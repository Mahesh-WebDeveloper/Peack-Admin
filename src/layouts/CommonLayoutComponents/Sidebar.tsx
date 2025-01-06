"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Home, FileText, Target, BarChart2, Mail, CheckCircle, Clock, Database, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import {
  ChevronDown, ChevronRight, Plus,
  List, FilePlus, FileSearch, Users, Settings, Briefcase
} from "lucide-react";
import logo from "../../assets/logo (1).jpg";

// Sidebar Component
const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
export const Sidebar = ({ collapsed }) => {
  // Define the menuItems array directly within the Sidebar component


  const menuItems = [
    { title: "Dashboard", icon: Home, href: "/" },
    {
      title: "Enquiry Management",
      icon: FileText,
      submenu: [
        { title: "Add Enquiry", icon: Plus, href: "/EnquiryManagement" },
        { title: "View Enquiries", icon: List, href: "/EnquiryManagement" },
        { title: "Pending Enquiries", icon: Clock, href: "/enquiry/pending" },
      ],
    },
    {
      title: "Proposal",
      icon: FileText,
      submenu: [
        { title: "Create Proposal", icon: FilePlus, href: "/proposal/create" },
        { title: "View Proposals", icon: FileSearch, href: "/proposal/view" },
      ],
    },
    {
      title: "Opportunity",
      icon: Target,
      submenu: [
        { title: "New Opportunity", icon: Plus, href: "/opportunity/new" },
        { title: "Active Opportunities", icon: Briefcase, href: "/opportunity/active" },
        { title: "Closed Opportunities", icon: CheckCircle, href: "/opportunity/closed" },
      ],
    },
    { title: "Report", icon: BarChart2, href: "/report" },
    {
      title: "Offer Letter",
      icon: Mail,
      submenu: [
        { title: "Generate Letter", icon: FilePlus, href: "/offer-letter/generate" },
        { title: "View Letters", icon: FileSearch, href: "/offer-letter/view" },
      ],
    },
    { title: "Closed Enquiry", icon: CheckCircle, href: "/closed-enquiry" },
    {
      title: "Timesheet",
      icon: Clock,
      submenu: [
        { title: "Add Entry", icon: Plus, href: "/timesheet/add" },
        { title: "View Timesheet", icon: List, href: "/timesheet/view" },
      ],
    },
    {
      title: "Master",
      icon: Database,
      submenu: [
        { title: "Users", icon: Users, href: "/master/users" },
        { title: "Settings", icon: Settings, href: "/master/settings" },
      ],
    },
  ];
  
  // MenuItem Component
  const MenuItem = ({ item, collapsed }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    if (item.submenu) {
      return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className={classNames(
                "w-full justify-start gap-2",
                collapsed ? "px-2" : "px-4",
                isOpen && "bg-accent"
              )}
            >
              <item.icon className="h-5 w-5 text-muted-foreground" />
              {!collapsed && (
                <>
                  <span className="flex-1 text-left">{item.title}</span>
                  {isOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </>
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-6">
            {item.submenu.map((subItem, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className={classNames(
                      "w-full justify-start gap-2 my-1",
                      collapsed ? "px-2" : "px-4"
                    )}
                    onClick={() => window.location.href = subItem.href}
                  >
                    <subItem.icon className="h-4 w-4 text-muted-foreground" />
                    {!collapsed && <span>{subItem.title}</span>}
                  </Button>
                </TooltipTrigger>
                {collapsed && (
                  <TooltipContent side="right">{subItem.title}</TooltipContent>
                )}
              </Tooltip>
            ))}
          </CollapsibleContent>
        </Collapsible>
      );
    }
  
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            className={classNames(
              "w-full justify-start gap-2",
              collapsed ? "px-2" : "px-4"
            )}
            onClick={() => window.location.href = item.href}
          >
            <item.icon className="h-5 w-5 text-muted-foreground" />
            {!collapsed && <span>{item.title}</span>}
          </Button>
        </TooltipTrigger>
        {collapsed && (
          <TooltipContent side="right">{item.title}</TooltipContent>
        )}
      </Tooltip>
    );
  };
  

  return (
    <TooltipProvider>
      <ScrollArea className="h-full py-6">
        {/* Logo Section */}
        <div
          className={`flex items-center mb-8 ${
            collapsed ? "justify-center" : "justify-start px-4"
          }`}
        >
          {collapsed ? (
            <h2 className="text-lg font-semibold tracking-wide">
              PE<span className="text-red-500">A</span>K
            </h2>
          ) : (
            <img
              className="h-12 w-auto transition-transform duration-300 hover:scale-105"
              src={logo}
              alt="Logo"
            />
          )}
        </div>
        <Separator />

        {/* Menu Items */}
        <SidebarContent menuItems={menuItems} MenuItem={MenuItem} collapsed={collapsed} />

        {/* Footer Section */}
        {!collapsed && (
          <div className="absolute bottom-6 left-4 text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} PEAK. All rights reserved.</p>
          </div>
        )}
      </ScrollArea>
    </TooltipProvider>
  );
};

// Sidebar Content Component
const SidebarContent = ({ menuItems, MenuItem , collapsed }) => {
  const [openCollapsible, setOpenCollapsible] = useState(true);

  return (
    <div className="p-4 space-y-4">
        {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} collapsed={collapsed} />
         ))}


      <Separator />

      <Collapsible open={openCollapsible} onOpenChange={setOpenCollapsible}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className={`w-full justify-start gap-2 ${
              collapsed ? "px-2" : "px-4"
            }`}
          >
            <Bell className="h-5 w-5 text-muted-foreground" />
            {!collapsed && (
              <>
                <span>Notifications</span>
                <Badge variant="secondary" className="ml-auto">
                  5
                </Badge>
              </>
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2">
          <AnimatedListDemo className="p-4" />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

// Notification Component
const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto w-full cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl p-2 sm:p-3"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-xl sm:text-2xl">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center gap-1 whitespace-pre text-sm sm:text-lg font-medium dark:text-white">
            <span>{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-xs sm:text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

// Animated List Demo
export function AnimatedListDemo({ className }) {
  const notifications = [
    {
      name: "Payment received",
      description: "Magic UI",
      time: "15m ago",
      icon: "💸",
      color: "#00C9A7",
    },
    {
      name: "User signed up",
      description: "Magic UI",
      time: "10m ago",
      icon: "👤",
      color: "#FFB800",
    },
    {
      name: "New message",
      description: "Magic UI",
      time: "5m ago",
      icon: "💬",
      color: "#FF3D71",
    },
  ];

  return (
    <div
      className={cn(
        "relative flex h-[500px] flex-col overflow-hidden rounded-lg border bg-background md:shadow-xl",
        "w-full max-w-[230px]",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}