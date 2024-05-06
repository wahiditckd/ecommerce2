import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FilterData() {
  return (
    <div className="flex items-center gap-4">
      Category
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Man</SelectItem>
          <SelectItem value="dark">Women</SelectItem>
          <SelectItem value="system">Elektonic</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
