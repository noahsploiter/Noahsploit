import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="backdrop-blur-md bg-[#0d1d35fb]/30 top-0 fixed ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex items-center justify-between h-16">
          <Link href="/" className="w-screen">
            <h1 className="text-gray-300 text-xl font-bold flex justify-end pr-5">
              NOAHSPLOIT
            </h1>
          </Link>
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={handleClick}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobile ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center"></div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/">
                  <div className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </div>
                </Link>
                <Link href="/About">
                  <div className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </div>
                </Link>
                <Link href="/contact">
                  <div className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMobile && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/">
              <div className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </div>
            </Link>
            <Link href="/About">
              <div className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </div>
            </Link>
            <Link href="/contact">
              <div className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
