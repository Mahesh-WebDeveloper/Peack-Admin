import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Edit, Copy, Trash2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/toaster";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function EnquiryPageDataTable() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="my-table">
          <thead className="bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-900">
            <tr>
              {/* Checkbox column */}
              <th className="px-6 py-4 w-12">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700"
                  onChange={(e) => {
                    const checkboxes =
                      document.querySelectorAll(".row-checkbox");
                    checkboxes.forEach((checkbox) => {
                      checkbox.checked = e.target.checked;
                    });
                  }}
                />
              </th>
              <th className="px-6 py-4 w-20 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                SI
              </th>
              <th className="px-6 py-4 w-40 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                Enq No.
              </th>
              <th className="px-6 py-4 w-40 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                Enq Type
              </th>
              <th className="px-6 py-4 w-64 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                Enq Title
              </th>
              <th className="px-6 py-4 w-40 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                End-User
              </th>
              <th className="px-6 py-4 w-40 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                Plant
              </th>
              <th className="px-6 py-4 w-40 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                Client
              </th>
              <th className="px-6 py-4 w-40 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                Vendor
              </th>
              <th className="px-6 py-4 w-48 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                Offer Status
              </th>
              <th className="px-6 py-4 w-32 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                Resp
              </th>
              <th className="px-6 py-4 w-48 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                Closing Date
              </th>
              <th className="px-6 py-4 w-36 text-right text-sm font-medium text-gray-600 dark:text-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {isLoading
              ? Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4">
                        <Skeleton className="h-4 w-5" />
                      </td>
                      <td className="px-6 py-4">
                        <Skeleton className="h-4 w-5" />
                      </td>
                      <td className="px-6 py-4">
                        <Skeleton className="h-4 w-20" />
                      </td>
                      <td className="px-6 py-4">
                        <Skeleton className="h-4 w-20" />
                      </td>
                      <td className="px-6 py-4">
                        <Skeleton className="h-4 w-40" />
                      </td>
                      <td className="px-6 py-4">
                        <Skeleton className="h-4 w-20" />
                      </td>
                      <td className="px-6 py-4">
                        <Skeleton className="h-4 w-20" />
                      </td>
                      <td className="px-6 py-4">
                        <Skeleton className="h-4 w-20" />
                      </td>
                      <td className="px-6 py-4">
                        <Skeleton className="h-4 w-20" />
                      </td>
                      <td className="px-6 py-4">
                        <Skeleton className="h-4 w-24" />
                      </td>
                      <td className="px-6 py-4">
                        <Skeleton className="h-4 w-16" />
                      </td>
                      <td className="px-6 py-4">
                        <Skeleton className="h-4 w-24" />
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex gap-2 justify-end">
                          <Skeleton className="h-8 w-8" />
                          <Skeleton className="h-8 w-8" />
                          <Skeleton className="h-8 w-8" />
                        </div>
                      </td>
                    </tr>
                  ))
              : Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <tr
                      key={i}
                      className="hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 row-checkbox"
                          value={i}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                        {i + 1}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100 truncate">
                        ENQ-{1000 + i}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100 truncate">
                        {i % 2 === 0 ? "Type A" : "Type B"}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100 truncate">
                        Sample Title {i + 1}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100 truncate">
                        User {i + 1}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100 truncate">
                        Plant {i + 1}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100 truncate">
                        Client {i + 1}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100 truncate">
                        Vendor {i + 1}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ${
                            i % 2 === 0
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                          }`}
                        >
                          {i % 2 === 0 ? "Accepted" : "Pending"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                        Resp {i + 1}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 truncate">
                        {new Date().toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          {/* Copy Button with Tooltip */}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0 group"
                                >
                                  <Copy className="h-4 w-4 text-gray-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600 group-hover:shadow-md dark:text-gray-400 dark:group-hover:text-blue-400" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent
                                side="top"
                                className="px-2 py-1 text-sm"
                              >
                                <p>Copy</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          {/* Edit Button with Tooltip */}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0 group"
                                >
                                  <Edit className="h-4 w-4 text-gray-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-green-600 group-hover:shadow-md dark:text-gray-400 dark:group-hover:text-green-400" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent
                                side="top"
                                className="px-2 py-1 text-sm"
                              >
                                <p>Edit</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          {/* Trash Button with Tooltip */}

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <AlertDialog>
                                  <AlertDialogTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-8 w-8 p-0 group"
                                    >
                                      <Trash2 className="h-4 w-4 text-gray-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-red-600 group-hover:shadow-md dark:text-gray-400 dark:group-hover:text-red-400" />
                                    </Button>
                                  </AlertDialogTrigger>
                                  <AlertDialogContent>
                                    <AlertDialogHeader>
                                      <AlertDialogTitle>
                                        Confirm Deletion
                                      </AlertDialogTitle>
                                      <AlertDialogDescription>
                                        Are you sure you want to delete this
                                        record? This action cannot be undone.
                                      </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                      <AlertDialogCancel>
                                        Cancel
                                      </AlertDialogCancel>
                                      <AlertDialogAction
                                        onClick={() => handleDelete(i)}
                                      >
                                        Delete
                                      </AlertDialogAction>
                                    </AlertDialogFooter>
                                  </AlertDialogContent>
                                </AlertDialog>
                              </TooltipTrigger>
                              <TooltipContent
                                side="top"
                                className="px-2 py-1 text-sm"
                              >
                                <p>Delete</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </td>
                    </tr>
                  ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
