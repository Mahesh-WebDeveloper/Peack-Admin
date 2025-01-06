import React from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
export function EnquiryPageDataTablePagination() {
  return (
    <div>
      <div className="px-6 py-4 border-t border-gray-100">
        <div className="flex flex-wrap items-center justify-between space-y-3 sm:space-y-0">
          {/* Entries per page selection */}
          <div className="flex items-center space-x-2 text-sm w-full sm:w-auto">
            <span className="text-gray-600 dark:text-gray-300">Showing</span>
            <Select>
              <SelectTrigger className="w-[70px] h-8 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-gray-600 dark:text-gray-300">
              of 50 entries
            </span>
          </div>

          {/* Pagination buttons */}
          <div className="flex items-center justify-center space-x-2 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Previous
            </Button>
            {[1, 2, 3].map((page) => (
              <Button
                key={page}
                size="sm"
                className={`h-8 w-8 border ${
                  page === 1
                    ? "bg-blue-600 text-white"
                    : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

