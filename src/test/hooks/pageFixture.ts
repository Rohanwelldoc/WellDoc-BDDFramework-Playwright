import { Browser, BrowserContext, Page } from "@playwright/test";

export const fixture = {
  browser: null as Browser | null,
  context: null as BrowserContext | null,
  page: null as Page | null
};
