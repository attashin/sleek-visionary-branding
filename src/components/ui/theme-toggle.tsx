
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  // Now this component just displays a static moon icon
  // with no toggle functionality
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full w-10 h-10 bg-background/50 backdrop-blur-sm border border-border transition-all duration-300 hover:bg-background cursor-default"
      aria-label="Dark mode"
      disabled={true}
    >
      <Moon className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
