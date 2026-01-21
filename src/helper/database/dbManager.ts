import mssql from "mssql";
import { createLogger } from "winston";
import { options } from "../util/logger";

const logger = createLogger(options("DatabaseLogs"));

const dbConfig: mssql.config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER!,
  database: process.env.DB_NAME,
  port: 1433,
  options: {
    encrypt: true,
    trustServerCertificate: false
  },
  pool: {
    max: 5,
    min: 0,
    idleTimeoutMillis: 30000
  }
};

export class DBManager {
  private static pool?: mssql.ConnectionPool;

  /**
   * Initialize DB pool (call ONCE in BeforeAll)
   */
  public static async init() {
    if (!this.pool) {
      logger.info("Initializing DB connection pool...");
      this.pool = await new mssql.ConnectionPool(dbConfig).connect();
      logger.info("DB pool initialized successfully");
    }
  }

  /**
   * Execute INSERT / UPDATE / DELETE
   */
  public static async executeUpdate(
    query: string,
    params: { name: string; type: any; value: any }[] = []
  ): Promise<number> {
    if (!this.pool) {
      throw new Error("DB Pool not initialized. Call DBManager.init() first.");
    }

    try {
      const request = this.pool.request();
      params.forEach(p => request.input(p.name, p.type, p.value));

      logger.info(`Executing Update Query: ${query}`);
      const result = await request.query(query);

      return result.rowsAffected[0] || 0;
    } catch (error) {
      logger.error("DB Update Failed", error);
      throw error;
    }
  }

  /**
   * Execute SELECT
   */
  public static async executeQuery<T = any>(
    query: string,
    params: { name: string; type: any; value: any }[] = []
  ): Promise<T[]> {
    if (!this.pool) {
      throw new Error("DB Pool not initialized. Call DBManager.init() first.");
    }

    try {
      const request = this.pool.request();
      params.forEach(p => request.input(p.name, p.type, p.value));

      logger.info(`Executing Select Query: ${query}`);
      const result = await request.query<T>(query);

      return result.recordset;
    } catch (error) {
      logger.error("DB Query Failed", error);
      throw error;
    }
  }

  /**
   * Close DB pool (call ONCE in AfterAll)
   */
  public static async close() {
    if (this.pool) {
      logger.info("Closing DB connection pool...");
      await this.pool.close();
      this.pool = undefined;
    }
  }
  
}
