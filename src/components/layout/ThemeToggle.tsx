import { LuMoon, LuSun } from "react-icons/lu";
import { Button } from "@/lib/components/ui/button";
import { useTheme } from "@/lib/hooks/useTheme";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative cursor-pointer rounded-full text-muted-foreground transition-colors hover:bg-transparent hover:text-primary motion-reduce:transition-none dark:hover:bg-transparent"
      onClick={toggleTheme}
      size="icon"
      type="button"
      variant="ghost"
    >
      <LuSun
        aria-hidden="true"
        className="size-icon-base scale-100 rotate-0 transition-all motion-reduce:transition-none dark:scale-0 dark:-rotate-90"
      />
      <LuMoon
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 size-icon-base -translate-x-1/2 -translate-y-1/2 scale-0 rotate-90 transition-all motion-reduce:transition-none dark:scale-100 dark:rotate-0"
      />
    </Button>
  );
}
