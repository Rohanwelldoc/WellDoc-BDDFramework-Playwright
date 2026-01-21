import mssql from 'mssql';

export const SurveyQueries = {

    // Marks survey as delivered (used to make survey eligible)
    updateSurveyDelivery: (patientID: number, surveyType: string) => ({
        sql: `
            UPDATE [Survey].[PsychoSocialSurvey]
            SET deliverydatetime = GETUTCDATE() - 1
            WHERE patientid = @pID
              AND surveytype = @sType
              AND statusID = 1
        `,
        params: [
            { name: 'pID', type: mssql.Int, value: patientID },
            { name: 'sType', type: mssql.VarChar(50), value: surveyType }
        ]
    }),

    // Fetch latest survey status for validation
    getSurveyStatus: (patientID: number) => ({
        sql: `
            SELECT TOP 1 statusID, deliverydatetime
            FROM [Survey].[PsychoSocialSurvey]
            WHERE patientid = @pID
            ORDER BY deliverydatetime DESC
        `,
        params: [
            { name: 'pID', type: mssql.Int, value: patientID }
        ]
    })
};
