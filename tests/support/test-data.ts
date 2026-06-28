import type { BrowserAlias } from './browser-matrix';

export type SuccessfulLoginCase = {
  browser: BrowserAlias;
  customer: string;
};

export const successfulLoginFeature1: SuccessfulLoginCase[] = [
  { browser: 'Chrome', customer: 'Hermoine Granger' },
  { browser: 'Firefox', customer: 'Harry Potter' },
  { browser: 'Edge', customer: 'Ron Weasly' },
  { browser: 'ChromeHeadless', customer: 'Albus Dumbledore' },
  { browser: 'FirefoxHeadless', customer: 'Neville Longbottom' },
  { browser: 'EdgeHeadless', customer: 'Harry Potter' },
];

export const successfulLoginFeature2: SuccessfulLoginCase[] = [
  { browser: 'Firefox', customer: 'Hermoine Granger' },
  { browser: 'Edge', customer: 'Harry Potter' },
  { browser: 'ChromeHeadless', customer: 'Ron Weasly' },
  { browser: 'FirefoxHeadless', customer: 'Albus Dumbledore' },
  { browser: 'EdgeHeadless', customer: 'Ron Weasly' },
  { browser: 'Chrome', customer: 'Neville Longbottom' },
];

export const noCustomerFeature1: BrowserAlias[] = [
  'Chrome',
  'Firefox',
  'Edge',
  'ChromeHeadless',
  'FirefoxHeadless',
  'EdgeHeadless',
];

export const noCustomerFeature2: BrowserAlias[] = [
  'Edge',
  'ChromeHeadless',
  'FirefoxHeadless',
  'EdgeHeadless',
  'Chrome',
  'Firefox',
];
