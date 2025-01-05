import React, { useEffect } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(Theme.DARK); // Default to DARK

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    document.documentElement.classList.toggle(Theme.DARK, newTheme === Theme.DARK);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      document.documentElement.classList.toggle(Theme.DARK, localTheme === Theme.DARK);
    } else {
      // Default to DARK if no theme is saved
      document.documentElement.classList.add(Theme.DARK);
      localStorage.setItem('theme', Theme.DARK);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
