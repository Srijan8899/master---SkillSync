import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    // footer div
    <footer className="text-center text-white mt-auto bg-gray-900">
      {/* contact and social media div */}
      <div className="flex justify-center items-center">
        {/* contactt text div */}
        <div className="mt-4 p-1">Contact us at our social media handles</div>
        {/* social media div */}
        <div className="m-4 p-1 flex justify-center items-center gap-2">
          {/* Facebook */}
          <a
            href="#!"
            className="mt-4 hover:scale-125 transition-all ease-in-out duration-300"
          >
            <FaFacebook size={29} />
          </a>
          {/* Instagram */}
          <a
            href="#!"
            className=" mt-4 hover:scale-125 transition-all ease-in-out duration-300"
          >
            <FaInstagram size={29} />
          </a>
          {/* Linkedin */}
          <a
            href="#!"
            className=" mt-4 hover:scale-125 transition-all ease-in-out duration-300"
          >
            <FaLinkedin size={29} />
          </a>
        </div>
      </div>

      {/* two buttons div */}
      <div className="flex items-center justify-center">
        {/* buttons div */}
        <div className="mb-4 flex gap-3  mr-3">
          {/* about div */}
          <div className="flex items-center justify-center text-white  w-20 h-8  hover:scale-110  hover:cursor-pointer transition-all ease-in-out duration-300">
            About
          </div>
          {/* admin div */}
          <div className="flex items-center justify-center text-white  w-20 h-8  hover:scale-110  hover:cursor-pointer transition-all ease-in-out duration-300">
            Admin
          </div>
        </div>
      </div>
      {/* copyright line div */}
      <div className="text-center p-0 bg-opacity-20 bg-black">
        Copyright &copy; 2024 SkillSync. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
