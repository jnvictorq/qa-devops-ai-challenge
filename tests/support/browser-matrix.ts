export const browserAliases = {
  Chrome: 'chrome',
  Firefox: 'firefox',
  Edge: 'edge',
  ChromeHeadless: 'chrome-headless',
  FirefoxHeadless: 'firefox-headless',
  EdgeHeadless: 'edge-headless',
} as const;

export type BrowserAlias = keyof typeof browserAliases;
export type ProjectName = (typeof browserAliases)[BrowserAlias];

export function projectNameForBrowser(browser: BrowserAlias): ProjectName {
  return browserAliases[browser];
}

export function projectTagForBrowser(browser: BrowserAlias): `@${ProjectName}` {
  return `@${projectNameForBrowser(browser)}`;
}
