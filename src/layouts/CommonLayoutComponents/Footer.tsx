import React from "react";
import { CardFooter} from "@/components/ui/card";

export function Footer() {
  return (
    <div>
      <div className="flex items-center justify-center mt-8 p-4 bg-background dark:bg-gray-800 text-foreground dark:text-gray-200 rounded-md shadow-md border dark:border-gray-700">
        <span className="text-lg font-semibold mr-2">PMS Admin</span>
        <span className="text-sm font-medium">© 2025</span>
      
      </div>
      <CardFooter className="flex justify-center py-4 border-t dark:border-gray-700">
          <span className="text-sm text-foreground dark:text-gray-400">
            Design & Developed By ❤️ Mentem Technologies
          </span>
        </CardFooter>
    
    </div>
  );
}
