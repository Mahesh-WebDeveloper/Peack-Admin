import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ThemeProvider } from "../context/ThemeProvider";
import { Sidebar } from "../layouts/CommonLayoutComponents/Sidebar";
import { Header } from "../layouts/CommonLayoutComponents/Header";
import { Footer } from "../layouts/CommonLayoutComponents/Footer";

import {
  Home,
  FileText,
  Target,
  BarChart2,
  Mail,
  CheckCircle,
  Clock,
  Database,
  Bell,
} from "lucide-react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import DashbordPageCardsLayout from "../components/DashbordPageComponents/DashbordPageCards";

const DashbordPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);



  const stats = [
    { label: "Total Enquiries", value: "156", trend: "+12%", icon: FileText },
    { label: "In Progress", value: "43", trend: "+5%", icon: Clock },
    { label: "Completed", value: "98", trend: "+18%", icon: CheckCircle },
    { label: "Pending", value: "15", trend: "-3%", icon: Bell },
  ];

  const handleExportExcel = () => {
    const table = document.querySelector(".my-table");

    // Check if the table exists
    if (!table) {
      console.error("Table not found!");
      return;
    }

    const rows = table.querySelectorAll("tbody tr");

    // Ensure that the table has rows
    if (rows.length === 0) {
      console.error("Table has no rows to export!");
      return;
    }

    try {
      // Convert the table to a worksheet
      const ws = XLSX.utils.table_to_sheet(table);

      // Create a new workbook
      const wb = XLSX.utils.book_new();

      // Append the worksheet to the workbook
      XLSX.utils.book_append_sheet(wb, ws, "Enquiries");

      // Write the workbook to an array buffer
      const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });

      // Create a blob from the workbook output
      const blob = new Blob([wbout], { type: "application/octet-stream" });

      // Save the file using FileSaver
      saveAs(blob, "enquiries.xlsx");
    } catch (error) {
      console.error("Error during export:", error);
    }
  };

  const handleExportPdf = () => {
    const table = document.querySelector(".my-table");

    // Check if the table exists
    if (!table) {
      console.error("Table not found!");
      return;
    }

    const rows = table.querySelectorAll("tbody tr");

    // Ensure that the table has rows
    if (rows.length === 0) {
      console.error("Table has no rows to export!");
      return;
    }

    try {
      // Create a new jsPDF instance with landscape orientation
      const doc = new jsPDF("l", "mm", "a4"); // 'l' for landscape, 'mm' for millimeter units, 'a4' for page size

      // Define table styles
      const tableStyles = {
        head: {
          fillColor: [0, 123, 255], // Blue color for the header
          textColor: [255, 255, 255], // White text for the header
          fontSize: 8, // Reduced font size for header
          fontStyle: "bold",
          halign: "center",
          valign: "middle",
        },
        body: {
          fillColor: [255, 255, 255], // White background for the body
          textColor: [0, 0, 0], // Black text for the body
          fontSize: 7, // Reduced font size for body content
          halign: "center",
          valign: "middle",
        },
        alternateRow: {
          fillColor: [240, 240, 240], // Light gray for alternate rows
        },
        margin: { top: 20, left: 15, bottom: 20, right: 15 },
      };

      // Set document title and meta
      doc.setFontSize(16);
      doc.text("Enquiry Data", 15, 15);

      // Extract table data excluding first and last columns
      const tableData = Array.from(rows).map((row) => {
        const cells = Array.from(row.cells);
        // Exclude first and last columns
        return cells
          .slice(1, cells.length - 1)
          .map((cell) => cell.textContent || cell.innerText);
      });

      // Extract headers excluding first and last columns
      const headers = Array.from(table.querySelectorAll("thead th"))
        .slice(1, -1)
        .map((header) => header.textContent || header.innerText);

      // Generate the table without first and last columns
      doc.autoTable({
        head: [headers], // Set headers (without first and last)
        body: tableData, // Set body rows (without first and last columns)
        startY: 25, // Set table starting position
        theme: "grid", // Adds grid lines
        styles: tableStyles.head,
        bodyStyles: tableStyles.body,
        alternateRowStyles: tableStyles.alternateRow,
        margin: tableStyles.margin,
      });

      // Save the PDF with custom name
      doc.save("enquiries.pdf");
    } catch (error) {
      console.error("Error during PDF export:", error);
    }
  };

  const handlePrint = () => {
    const table = document.querySelector(".my-table");

    // Check if the table exists
    if (!table) {
      console.error("Table not found!");
      return;
    }

    // Clone the table to avoid modifying the original table
    const tableClone = table.cloneNode(true);

    // Remove the first and last columns from the cloned table
    const rows = tableClone.querySelectorAll("tr");
    rows.forEach((row) => {
      row.deleteCell(0); // Remove the first column
      row.deleteCell(row.cells.length - 1); // Remove the last column
    });

    // Create a temporary print window
    const printWindow = window.open("", "", "height=500,width=800");

    // Write HTML content for the print window
    printWindow.document.write("<html><head><title>Print Table</title>");

    // Add custom styles to match the PDF design
    printWindow.document.write(`
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
            }
            th, td {
              padding: 8px;
              border: 1px solid #ddd;
              text-align: center;
              font-size: 7px; /* Same font size as in the PDF */
            }
            th {
              background-color: #007bff; /* Blue header */
              color: white;
              font-weight: bold; /* Bold header text */
            }
            tr:nth-child(even) {
              background-color: #f2f2f2; /* Light gray for alternate rows */
            }
            tr:nth-child(odd) {
              background-color: white; /* White background for odd rows */
            }
          </style>
        `);

    // Write the modified table HTML content into the print window
    printWindow.document.write("<body>");
    printWindow.document.write("<h2>Enquiry Data</h2>");
    printWindow.document.write(tableClone.outerHTML); // Add the modified table to the print window
    printWindow.document.write("</body></html>");

    // Wait for the content to load and then trigger the print dialog
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 hidden lg:block transition-all duration-300 ${
            sidebarCollapsed ? "w-20" : "w-64"
          }`}
        >
          <div className="h-full border-r bg-background">
            <button
              className="absolute text-black bg-gray-300 hover:bg-gray-300 -right-4 top-20 hidden lg:flex items-center justify-center h-8 w-8 z-[999]"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
              {sidebarCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </button>
            <Sidebar collapsed={sidebarCollapsed} />
          </div>
        </aside>

        {/* Main Content Area */}
        <div
          className={`transition-all duration-300 ${
            sidebarCollapsed ? "lg:ml-20" : "lg:ml-64"
          }`}
        >
          <Header setSidebarOpen={setSidebarOpen} SidebarOpen={sidebarOpen} />

          <main className="container p-4 md:p-6 lg:p-8 bg-gray-200 dark:bg-background/95">
            <DashbordPageCardsLayout />

            <Footer />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DashbordPage;
