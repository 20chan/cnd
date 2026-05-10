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

  black: '#1f1d1a',
  brightBlack: '#837d73',

  red: '#a93e41',
  brightRed: '#a93e41',

  green: '#287028',
  brightGreen: '#287028',

  yellow: '#666423',
  brightYellow: '#666423',

  blue: '#45638f',
  brightBlue: '#45638f',

  magenta: '#5c3f81',
  brightMagenta: '#5c3f81',

  cyan: '#2f6b6a',
  brightCyan: '#2f6b6a',
}
