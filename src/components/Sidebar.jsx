import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { themes } from "@/utils/options";

const themeEntries = Object.entries(themes);
console.log('dd', themeEntries);

const Sidebar = () => {
  return (
    <div className="border-[1px] rounded-xl border-gray-700 h-full text-white">
      <div className="flex flex-col">
        <span> Theme </span>
        <DropdownMenu>
          <DropdownMenuTrigger>Themes</DropdownMenuTrigger>
          <DropdownMenuContent >
          {themeEntries.map(([themeName, themeData]) => (
              <React.Fragment key={themeName}>
                <DropdownMenuItem>{themeName}</DropdownMenuItem>
                <DropdownMenuSeparator />
              </React.Fragment>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Sidebar;
