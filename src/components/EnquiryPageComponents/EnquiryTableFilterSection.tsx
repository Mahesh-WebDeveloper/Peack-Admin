import React from "react";
import { Search, Plus, Trash2, Download, Filter, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Printer } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DeleteButton } from "./AnimatedDeleteButton";

export function EnquiryTableFilterSection({
  handleExportExcel,
  setIsEnquiryFormOpen,
  setFiltersOpen,
  handleExportPdf,
  handlePrint,
}) {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <Button
              className="bg-primary text-white dark:bg-black dark:text-white py-2 px-4 rounded-md hover:bg-primary/90 transition duration-300 ease-in-out"
              onClick={() => setIsEnquiryFormOpen(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              New Enquiry
            </Button>
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full dark:bg-white dark:text-black">
              50 Active
            </span>
          </div>
          {/* <Button
            variant="destructive"
            className="dark:bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete All
          </Button> */}

          <DeleteButton />
        </div>
      </div>

      {/* Filters Section */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
            {/* Search Input */}
            <div className="relative flex-1 w-full lg:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500 " />
              <input
                type="text"
                placeholder="Search enquiries..."
                className="w-full pl-10 border-gray-200 pr-4 py-2 bg-white dark:bg-gray-800 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:text-white text-sm md:text-base border-1 border-gray-300"
              />
            </div>

            {/* Priority Select */}
            <Select className="w-full lg:w-[180px]">
              <SelectTrigger className="w-full lg:w-[180px] border bg-white dark:bg-gray-800 rounded-md">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                {[
                  {
                    value: "all",
                    label: "All Priorities",
                    color: "text-gray-500",
                  },
                  {
                    value: "high",
                    label: "High Priority",
                    color: "text-red-500",
                  },
                  {
                    value: "medium",
                    label: "Medium Priority",
                    color: "text-yellow-500",
                  },
                  {
                    value: "low",
                    label: "Low Priority",
                    color: "text-green-500",
                  },
                ].map((priority) => (
                  <SelectItem key={priority.value} value={priority.value}>
                    <span className="flex items-center space-x-2">
                      <Circle className={`h-3 w-3 ${priority.color}`} />
                      <span>{priority.label}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 justify-between lg:justify-start">
            <Button
              onClick={() => setFiltersOpen(true)}
              variant="outline"
              className="border py-2 px-4 rounded-md w-full sm:w-1/2 lg:w-auto hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>

            <Button
              variant="outline"
              onClick={handleExportExcel}
              className="flex items-center space-x-2 w-full sm:w-1/2 lg:w-auto justify-center"
            >
              <Download className="h-4 w-4" />
              <span>Export Excel</span>
            </Button>

            <Button
              variant="outline"
              onClick={handleExportPdf}
              className="flex items-center space-x-2 w-full sm:w-1/2 lg:w-auto justify-center"
            >
              <Download className="h-4 w-4" />
              <span>Export PDF</span>
            </Button>

            <Button
              variant="outline"
              onClick={handlePrint}
              className="flex items-center space-x-2 w-full sm:w-1/2 lg:w-auto justify-center"
            >
              <Printer className="h-4 w-4" />
              <span>Print PDF</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
