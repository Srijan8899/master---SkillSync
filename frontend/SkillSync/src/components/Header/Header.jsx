import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import logo from "../../imageAssets/skillsync-logo.svg";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext.jsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isloggedIn, setIsLoggedIn , logout } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const clickHandler = () => {
    logout();
    setIsLoggedIn(false);
    toast.error("Logout Successfully");
  };

  return (
    <>
      {isloggedIn ? (
        // header for loggedIn user

        //  {/* header after login  */}

        <div
          id="header"
          className="flex justify-between items-center py-4 px-4 sm:px-8 md:px-16 lg:px-32 shadow-md"
        >
          <NavLink to="/">
            <div id="logo-box" className="flex items-center">
              <img src={logo} width="35px" alt="SkillSync Logo" />
              <h1 className="text-2xl ml-2 ">SkillSync</h1>
            </div>
          </NavLink>

          <div id="main-btn-box" className="flex items-center">
            <div className="hidden sm:flex justify-end space-x-2 pr-4 md:pr-8">
              {/* explore skills button */}
              <NavLink to="/explore">
                <Button variant="text" sx={{ color: "black" }}>
                  Explore Skills
                </Button>
              </NavLink>
            </div>
            <div>
              <button>
                <FaRegUserCircle className="text-4xl" onClick={toggleMenu} />
              </button>
            </div>

            {isMenuOpen && (
              <div
                className={`flex flex-col absolute top-16 right-16 bg-white p-4 shadow-md z-20 `}
              >
                <NavLink to="/instructor">
                  <Button
                    variant="text"
                    sx={{
                      color: "black",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Dashboard
                  </Button>
                </NavLink>

                <NavLink to="/profile">
                  <Button
                    variant="text"
                    sx={{
                      color: "black",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Profile
                  </Button>
                </NavLink>

                <NavLink to="#">
                  <Button
                    variant="text"
                    sx={{
                      color: "black",
                      "&:hover": { textDecoration: "underline" },
                    }}
                    className="hover:underline"
                  >
                    Invoice history
                  </Button>
                </NavLink>

                <NavLink to={"/"} onClick={clickHandler}>
                  <Button
                    variant="text"
                    sx={{
                      color: "black",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Log Out
                  </Button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      ) : (
        // default header code

        <div
          id="header"
          className="flex justify-between items-center py-4 px-4 sm:px-8 md:px-16 lg:px-32 shadow-md mb-3"
        >
          <NavLink to="/">
            <div id="logo-box" className="flex items-center">
              <img src={logo} width="35px" alt="SkillSync Logo" />
              <h1 className="text-2xl ml-2 ">SkillSync</h1>
            </div>
          </NavLink>

          <div id="main-btn-box" className="flex items-center">
            <div className="hidden sm:flex justify-end space-x-2 pr-4 md:pr-8">
              {/* explore skills button */}
              <NavLink to="/explore">
                <Button variant="text" sx={{ color: "black" }}>
                  Explore Skills
                </Button>
              </NavLink>

              {/* become an instructor button goes to signup page for instructor */}
              <NavLink to="/signup">
                <Button variant="text" sx={{ color: "black" }}>
                  Become an Instructor
                </Button>
              </NavLink>
            </div>

            <div className="sm:hidden">
              {/* <MenuIcon   /> */}
              <IoMenu className="cursor-pointer" onClick={toggleMenu} />
            </div>

            {isMenuOpen && (
              <div
                className={`flex flex-col sm:hidden absolute top-16 right-4 bg-white p-4 shadow-md z-20 `}
              >
                <NavLink to="/login">
                  <Button
                    variant="text"
                    sx={{
                      color: "black",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Log in
                  </Button>
                </NavLink>

                <NavLink to="/signup">
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
                </NavLink>

                <NavLink to="/about">
                  <Button
                    variant="text"
                    sx={{
                      color: "black",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    About
                  </Button>
                </NavLink>
              </div>
            )}

            <div className="hidden sm:flex">
              <Stack spacing={2} direction="row">
                <NavLink to="/signup">
                  {" "}
                  <Button variant="contained">Sign up</Button>
                </NavLink>
                <NavLink to="/login">
                  {" "}
                  <Button variant="outlined">Log in</Button>
                </NavLink>
              </Stack>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
