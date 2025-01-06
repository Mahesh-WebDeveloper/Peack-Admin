import { useTheme } from './ThemeContext';
import { Button } from "@/components/ui/button";
import   {Moon, Sun } from 'lucide-react';
export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9">
            {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
            ) : (
                <Moon className="h-4 w-4" />
            )}
        </Button>
    );
};