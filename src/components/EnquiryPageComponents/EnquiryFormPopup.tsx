// Enquiry Form Component
import { X } from "lucide-react";
import { CircleDashed } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
export const EnquiryForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="fixed mx-auto inset-4 sm:inset-6 bg-background rounded-lg shadow-lg max-w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        {/* Header */}
        <div className="sticky top-0 bg-primary p-4 md:p-6 text-primary-foreground">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Add Enquiry</h2>
              <p className="text-sm opacity-90">
                Fill in the details below to create a new enquiry
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-primary-foreground"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Form */}
        <div className="p-4 md:p-8 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <form className="space-y-6">
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-700 dark:text-white">
                  <CircleDashed className="h-5 w-5 text-indigo-500" />
                  <span>Basic Information</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-4">
                  {/* Basic Fields */}
                  <div className="space-y-2">
                    <Label>Offer Status*</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Offer Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Substages</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Substages" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="stage1">Stage 1</SelectItem>
                        <SelectItem value="stage2">Stage 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Enquiry Title*</Label>
                    <Input placeholder="Enter Enquiry Title" />
                  </div>
                  <div className="space-y-2">
                    <Label>Enquiry No.</Label>
                    <Input placeholder="Enter Enquiry Number" />
                  </div>
                  <div className="space-y-2">
                    <Label>Enquiry Date</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Enquiry Type</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Enquiry Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product">Product</SelectItem>
                        <SelectItem value="service">Service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Enquiry Description</Label>
                    <Textarea placeholder="Enter Enquiry Description" />
                  </div>
                  <div className="space-y-2">
                    <Label>End User</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select End User" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user1">User 1</SelectItem>
                        <SelectItem value="user2">User 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Sector</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Sector" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sector1">Sector 1</SelectItem>
                        <SelectItem value="sector2">Sector 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Plant</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Plant" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plant1">Plant 1</SelectItem>
                        <SelectItem value="plant2">Plant 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Client</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Client" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="client1">Client 1</SelectItem>
                        <SelectItem value="client2">Client 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Last Date To Buy</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Closing Date</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Fees</Label>
                    <Input placeholder="Enter Fees" />
                  </div>
                  <div className="space-y-2">
                    <Label>Ins</Label>
                    <Input placeholder="Enter Ins" />
                  </div>
                  <div className="space-y-2">
                    <Label>Resp*</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Resp" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="resp1">Resp 1</SelectItem>
                        <SelectItem value="resp2">Resp 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {/* Add other fields like Vendor, Cost Calculation, Technical Submittal, etc., following this pattern */}
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex flex-wrap justify-between gap-4 mt-6">
              <Button
                variant="outline"
                onClick={onClose}
                className="w-full sm:w-auto"
              >
                Cancel
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white w-full sm:w-auto">
                <Send className="h-4 w-4 mr-2" />
                Submit Enquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
