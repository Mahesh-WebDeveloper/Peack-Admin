import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

import { User, Settings, LogOut, ChevronDown } from "lucide-react";

export const UserMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className="flex items-center space-x-3 p-1.5 rounded-full hover:bg-blue-50 dark:hover:bg-black transition-colors"
                >
                    <div className="relative">
                        <img
                            className="h-8 w-8 rounded-full ring-2 ring-blue-500"
                            src="https://randomuser.me/api/portraits/men/0.jpg"
                            alt="User"
                        />
                        <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full ring-2 ring-white"></span>
                    </div>
                    <div className="hidden md:block text-left">
                        <div className="text-sm font-medium text-gray-700 dark:text-white">
                            Gajendra
                        </div>
                        <div className="text-xs text-gray-500 dark:text-white">
                            Gajendra@peak.com
                        </div>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
