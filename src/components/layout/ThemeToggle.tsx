'use client';

import { LuMoon, LuSun } from 'react-icons/lu';
import { Button } from '@/lib/components/ui/button';
import { useTheme } from '@/lib/hooks/useTheme';

export function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <Button
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative rounded-full text-muted-foreground transition-colors hover:bg-transparent hover:text-accent dark:hover:bg-transparent cursor-pointer motion-reduce:transition-none"
      onClick={toggleTheme}
      size="icon"
      type="button"
      variant="ghost"
    >
      <LuSun className="h-5 w-5 rotate-0 scale-100 transition-all motion-reduce:transition-none dark:-rotate-90 dark:scale-0" />
      <LuMoon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rotate-90 scale-0 transition-all motion-reduce:transition-none dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
