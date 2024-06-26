import React from "react";
import { Input, Button } from "@mui/base";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const SkillSearchBar = () => {
  return (
    <div className="bg-white flex justify-between w-full items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-xl">
      <div className="flex-grow-0 flex-shrink-0 w-1/2 sm:w-auto">
        <Input
          slotProps={{
            root: {
              className:
                "border-none h-8 w-full flex items-center justify-start",
            },
            input: {
              className:
                "w-full bg-transparent font-normal outline-none ml-2 text-[rgba(97,120,138,1)]",
              placeholder: "Search for a skill",
              type: "text",
            },
          }}
          startAdornment={
            <div className="w-5 h-5 flex items-center">
              <CiSearch className="text-4xl" />
            </div>
          }
        />
      </div>
      <NavLink to='/explore'>
      <Button className="bg-[rgba(28,145,242,1)] font-bold text-white min-w-[104px] h-12 w-[104px] cursor-pointer rounded-xl">
        Explore
      </Button>
      </NavLink>
    </div>
  );
};

export default SkillSearchBar;
