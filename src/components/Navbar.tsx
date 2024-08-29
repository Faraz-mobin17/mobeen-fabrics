// import { useState } from "react";
import { menuItems } from "@/utils/constants";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent z-10 absolute top-0 w-full h-[70px] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* <img className="h-8 w-auto" src="/path-to-logo.png" alt="Logo" /> */}
              <span className="ml-2 text-lg font-semibold uppercase">
                mobeen fabrics
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
                {menuItems.map((item) => {
                  return (
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-white"
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:ml-4 sm:flex sm:items-center">
              <button className="text-white bg-pink-300 px-5 py-2 rounded-3xl hover:bg-transparent hover:border hover:border-pink-300 transition-all border border-transparent">
                Signup/Login
              </button>
              <div className="ml-4">
                <svg
                  className="h-6 w-6 text-gray-900 hover:text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h18M3 7h18M3 11h18M3 15h18M3 19h18"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
            >
              BANARASI
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
            >
              UNSTITCHED
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
            >
              SAREES
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
            >
              SUIT
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
            >
              DUPATTAS
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
            >
              CAMPAIGNS
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
            >
              HELP
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Signup/Login
            </a>
          </div>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
