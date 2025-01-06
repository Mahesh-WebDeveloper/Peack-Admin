import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "@/context/ThemeContext"; // Import useTheme hook

export const StatsCard = ({ label, value, trend, icon: Icon }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme(); // Get current theme from context

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const isPositive = trend?.startsWith("+");

  return (
    <MagicCard
      className="cursor-pointer flex flex-col gap-4 p-6 shadow-2xl transition-shadow duration-300"
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"} 
    >
      <div className="flex items-center justify-between">
        {/* Label and Value */}
        <div>
          {isLoading ? (
            <>
              <Skeleton className="h-4 w-24 mb-2 bg-gray-300 animate-pulse" />
              <Skeleton className="h-6 w-20 bg-gray-300 animate-pulse" />
            </>
          ) : (
            <>
              <p className="text-sm font-medium text-muted-foreground">
                {label}
              </p>
              <h3 className="text-2xl font-bold mt-2">{value}</h3>
            </>
          )}
        </div>

        {/* Icon */}
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          {isLoading ? (
            <Skeleton className="h-10 w-10 rounded-full bg-gray-300 animate-pulse" />
          ) : (
            <Icon className="h-6 w-6 text-primary" />
          )}
        </div>
      </div>

      {/* Trend Badge */}
      <div className="mt-4">
        {isLoading ? (
          <Skeleton className="h-6 w-16 rounded-md bg-gray-300 animate-pulse" />
        ) : (
          <Badge
            variant={isPositive ? "success" : "destructive"}
            className={`px-3 py-1 rounded-md ${isPositive ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
          >
            {trend}
          </Badge>
        )}
      </div>
    </MagicCard>
  );
};
