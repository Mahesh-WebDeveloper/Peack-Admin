import { useEffect, useState } from "react";
export const ThemeProvider = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return (
        <div className="min-h-screen bg-background transition-colors duration-300">
            {children}
        </div>
    );
};