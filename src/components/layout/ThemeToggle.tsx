import { LuMoon, LuSun } from 'react-icons/lu';
import { Button } from '@/lib/components/ui/button';
import { useTheme } from '@/lib/hooks/useTheme';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative rounded-full text-muted-foreground transition-colors hover:bg-transparent hover:text-primary dark:hover:bg-transparent cursor-pointer motion-reduce:transition-none"
      onClick={toggleTheme}
      size="icon"
      type="button"
      variant="ghost"
    >
      <LuSun
        aria-hidden="true"
        className="size-icon-base rotate-0 scale-100 transition-all motion-reduce:transition-none dark:-rotate-90 dark:scale-0"
      />
      <LuMoon
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 size-icon-base -translate-x-1/2 -translate-y-1/2 rotate-90 scale-0 transition-all motion-reduce:transition-none dark:rotate-0 dark:scale-100"
      />
    </Button>
  );
}
