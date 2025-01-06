import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

// Reusable component for Date Input
const DateInput = ({ label, placeholder }) => (
  <div className="space-y-2">
    <Label>{label}</Label>
    <div className="relative">
      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
      <Input type="date" placeholder={placeholder} className="pl-10" />
    </div>
  </div>
);

// Reusable component for Select Dropdown
const SelectDropdown = ({ label, placeholder, options }) => (
  <div className="space-y-2">
    <Label>{label}</Label>
    <Select>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export const FiltersDialog = ({ open = false, onOpenChange }) => {
  const enquiryOptions = [
    { value: "all", label: "All Types" },
    { value: "product", label: "Product" },
    { value: "service", label: "Service" },
  ];

  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "active", label: "Active" },
    { value: "pending", label: "Pending" },
    { value: "completed", label: "Completed" },
  ];

  const sortByOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "price-low", label: "Price: Low to High" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Advanced Filters
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4">
          <SelectDropdown
            label="Enquiry Type"
            placeholder="Select type"
            options={enquiryOptions}
          />
          <SelectDropdown
            label="Status"
            placeholder="Select status"
            options={statusOptions}
          />
          <div className="space-y-2">
            <Label>Client</Label>
            <Input placeholder="Search clients..." />
          </div>
          <div className="space-y-2">
            <Label>Plant</Label>
            <Input placeholder="Search plants..." />
          </div>
          <DateInput label="Start Date" />
          <DateInput label="End Date" />
          <div className="space-y-2">
            <Label>Price Range</Label>
            <div className="flex items-center space-x-2">
              <Input type="number" placeholder="Min" />
              <span>to</span>
              <Input type="number" placeholder="Max" />
            </div>
          </div>
          <SelectDropdown
            label="Sort By"
            placeholder="Select order"
            options={sortByOptions}
          />
        </div>

        <DialogFooter className="mt-6">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="mr-2"
          >
            Reset Filters
          </Button>
          <Button
            onClick={() => onOpenChange(false)}
            className="bg-primary hover:bg-primary/90"
          >
            Apply Filters
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
