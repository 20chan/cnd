import { createContext, use, useState } from 'react';
export type UserTheme = 'system' | 'light' | 'dark';
export type AppTheme = Exclude<UserTheme, 'system'>;

const ThemeContext = createContext<UserTheme | undefined>(undefined);
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, _setTheme] = useState<UserTheme>('system');

  return <ThemeContext value={theme}>{children}</ThemeContext>;
};

export const useTheme = () => {
  const context = use(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
