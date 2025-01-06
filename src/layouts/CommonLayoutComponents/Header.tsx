import React from "react";
import { Menu } from "lucide-react";
import {
  Bell,
  Home,
  FileText,
  Target,
  BarChart2,
  Mail,
  CheckCircle,
  Clock,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Sidebar } from "./Sidebar";
import { ThemeToggle } from "../../context/ThemeToggle";
import { UserMenu } from "../../components/EnquiryPageComponents/UserProfileMenu";

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export function Header({ sidebarOpen, setSidebarOpen }) {
  const menuItems = [
    { title: "Dashboard", icon: Home },
    { title: "Enquiry", icon: FileText },
    { title: "Proposal", icon: FileText },
    { title: "Opportunity", icon: Target },
    { title: "Report", icon: BarChart2 },
    { title: "Offer Letter", icon: Mail },
    { title: "Closed Enquiry", icon: CheckCircle },
    { title: "Timesheet", icon: Clock },
    { title: "Master", icon: Database },
  ];

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Left Section */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          {/* Mobile Navigation */}
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden focus:ring focus:ring-primary focus:outline-none"
              >
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-64 p-0 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
            >
              <Sidebar menuItems={menuItems} collapsed={false} />
            </SheetContent>
          </Sheet>
          <h1 className="hidden text-xl font-semibold text-gray-800 dark:text-gray-100 md:block lg:block">
            Enquiry Management
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          {/* Mobile View */}
          <div className="flex items-center space-x-3 lg:hidden">
            <ThemeToggle />
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="focus:ring focus:ring-primary hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Bell className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </Button>
              <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"></span>
            </div>
            {/* Language Switcher */}
            <Popover className="hidden sm:block">
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <GlobeIcon className="h-5 w-5" />
                  <span>English</span>
                  <ChevronDownIcon className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-2">
                <div className="grid gap-1">
                  <Button variant="ghost" className="justify-start">
                    <span>English</span>
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <span>हिंदी</span> {/* Hindi */}
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <span>اردو</span> {/* Urdu */}
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
            <UserMenu />
          </div>

          {/* Desktop View */}
          <div className="hidden items-center space-x-4 lg:flex">
            {/* Language Switcher */}
            <Popover className="hidden sm:block">
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <GlobeIcon className="h-5 w-5" />
                  <span>English</span>
                  <ChevronDownIcon className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-2">
                <div className="grid gap-1">
                  <Button variant="ghost" className="justify-start">
                    <span>English</span>
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <span>हिंदी</span> {/* Hindi */}
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <span>اردو</span> {/* Urdu */}
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
            <ThemeToggle />
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="focus:ring focus:ring-primary hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Bell className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </Button>
              <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"></span>
            </div>
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
