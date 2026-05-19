type Color = string;

export interface Scheme {
  white: Color;
  brightWhite: Color;

  black: Color;
  brightBlack: Color;

  red: Color;
  brightRed: Color;

  green: Color;
  brightGreen: Color;

  yellow: Color;
  brightYellow: Color;

  blue: Color;
  brightBlue: Color;

  magenta: Color;
  brightMagenta: Color;

  cyan: Color;
  brightCyan: Color;
}

export const defaultScheme: Scheme = {
  white: '#ece8e2',
  brightWhite: '#ece8e2',

  black: '#232320',
  brightBlack: '#837d73',

  red: '#a93e41',
  brightRed: '#e2b1b2',

  green: '#247424',
  brightGreen: '#85ce85',

  yellow: '#6F6C1B',
  brightYellow: '#c2bd62',

  blue: '#3B6399',
  brightBlue: '#adbddf',

  magenta: '#654988',
  brightMagenta: '#b6a5d1',

  cyan: '#306A69',
  brightCyan: '#82c8c7',
}

export const darkScheme: Scheme = {
  white: '#4f4c46',
  brightWhite: '#4f4c46',

  black: '#ece8e4',
  brightBlack: '#9f9891',

  red: '#e2b1b2',
  brightRed: '#a93e41',

  green: '#85ce85',
  brightGreen: '#247424',

  yellow: '#c2bd62',
  brightYellow: '#6F6C1B',

  blue: '#adbddf',
  brightBlue: '#3B6399',

  magenta: '#b6a5d1',
  brightMagenta: '#654988',

  cyan: '#82c8c7',
  brightCyan: '#306A69',
}
