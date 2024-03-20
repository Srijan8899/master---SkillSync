import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import logo from '../../imageAssets/skillsync-logo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      id="header"
      className="flex justify-between items-center py-4 px-4 sm:px-8 md:px-16 lg:px-32"
    >
      <div id="logo-box" className="flex items-center">
        <img src={logo} width="35px" alt="SkillSync Logo" />
        <h1 className="text-2xl ml-2 ">SkillSync</h1>
      </div>

      <div id="main-btn-box" className="flex items-center">
        <div className="hidden sm:flex justify-end space-x-2 pr-4 md:pr-8">
          <Button variant="text" sx={{ color: "black" }}>
            Explore Skills
          </Button>
          <Button variant="text" sx={{ color: "black" }}>
            Become an Instructor
          </Button>
        </div>

        <div className="sm:hidden">
          {/* <MenuIcon   /> */}
          <IoMenu className="cursor-pointer" onClick={toggleMenu} />
        </div>

        {isMenuOpen && (
          <div
            className={`flex flex-col sm:hidden absolute top-16 right-4 bg-white p-4 shadow-md z-20 `}
          >
            <Button
              variant="text"
              sx={{
                color: "black",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Log in
            </Button>
            <Button
              variant="text"
              sx={{
                color: "black",
                "&:hover": { textDecoration: "underline" },
              }}
              className="hover:underline"
            >
              Sign up
            </Button>
            <Button
              variant="text"
              sx={{
                color: "black",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              About
            </Button>
          </div>
        )}

        <div className="hidden sm:flex">
          <Stack spacing={2} direction="row">
            <Button variant="contained">Sign up</Button>
            <Button variant="outlined">Log in</Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Header;
