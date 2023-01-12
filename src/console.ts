import { console } from './utils/console';

type ConsoleType = typeof console;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Console extends ConsoleType { }

  // eslint-disable-next-line vars-on-top, no-var
  var console: Console;
}

// @ts-ignore
const global: typeof globalThis = (function () { return this as any; })();
global.console = console;
