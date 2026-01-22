import { useCallback, useEffect, useState } from 'react';

export type UserTheme = 'light' | 'dark' | 'system';
export type AppTheme = Exclude<UserTheme, 'system'>;

const THEME_KEY = 'ui-theme';

function getSystemTheme(): AppTheme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function getStoredTheme(): UserTheme {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem(THEME_KEY) as UserTheme | null;
  return stored && ['light', 'dark', 'system'].includes(stored)
    ? stored
    : 'system';
}

export function useTheme() {
  const [userTheme, setUserTheme] = useState<UserTheme>(getStoredTheme);

  // Apply theme immediately when it changes
  useEffect(() => {
    const theme = userTheme === 'system' ? getSystemTheme() : userTheme;
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem(THEME_KEY, userTheme);
  }, [userTheme]);

  // Update system theme when user prefers 'system'
  useEffect(() => {
    if (userTheme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      if (userTheme === 'system') {
        const newTheme = mediaQuery.matches ? 'dark' : 'light';
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [userTheme]);

  const toggleTheme = useCallback(() => {
    setUserTheme((prev) => {
      if (prev === 'system') {
        return getSystemTheme() === 'light' ? 'dark' : 'light';
      }
      return prev === 'light' ? 'dark' : 'light';
    });
  }, []);

  const theme = userTheme === 'system' ? getSystemTheme() : userTheme;

  return {
    userTheme,
    setUserTheme,
    toggleTheme,
    isDark: theme === 'dark',
  };
}
