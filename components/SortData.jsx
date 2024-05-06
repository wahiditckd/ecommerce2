import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SortData() {
  return (
    <div className="flex items-center gap-4">
      Category
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Low Price</SelectItem>
          <SelectItem value="dark">Hight Price</SelectItem>
          <SelectItem value="system">Medium Price</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
