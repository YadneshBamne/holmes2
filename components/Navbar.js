import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="text-white p-2 ml-5 flex justify-between items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-house-lock ml-6"
          viewBox="0 0 16 16"
        >
          <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z" />
          <path d="M10 13a1 1 0 0 1 1-1v-1a2 2 0 0 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
        </svg>

        <div className="ml-9 flex text-center">
          <Link href={"./"}>
            <ul className="mx-10 ">Home</ul>
          </Link>
          <Link href={"./aboutus"}>
            <ul className="mx-10 ">About Us</ul>
          </Link>
          
        </div>
        <button type="button">
          <div class="bg-black flex justify-center items-center mr-5">
            <div class="relative inline-flex group">
              <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#1457ff] via-[#000000] to-[#1457ff] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <a
                href="#"
                class="relative inline-flex items-center justify-center px-8 py-2 text-white transition-all duration-200 bg-gray-900 font-pj rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Log In
              </a>
            </div>
          </div>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
