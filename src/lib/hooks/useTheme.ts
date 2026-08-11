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
  const [userTheme, setUserTheme] = useState<UserTheme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<AppTheme>('light');

  useEffect(() => {
    setUserTheme(getStoredTheme());
  }, []);

  useEffect(() => {
    const theme = userTheme === 'system' ? getSystemTheme() : userTheme;
    setResolvedTheme(theme);
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem(THEME_KEY, userTheme);
  }, [userTheme]);

  useEffect(() => {
    if (userTheme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      const theme = mediaQuery.matches ? 'dark' : 'light';
      setResolvedTheme(theme);
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
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

  return {
    userTheme,
    setUserTheme,
    toggleTheme,
    isDark: resolvedTheme === 'dark',
  };
}
