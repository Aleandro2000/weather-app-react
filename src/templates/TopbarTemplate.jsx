import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
import { Menu, Transition } from "@headlessui/react";

export default function TopbarTemplate() {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`bg-gray-100 text-black p-4 ${isSticky ? "fixed top-0 w-full z-10 shadow-md" : ""}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo192.png" alt="Weather App Logo" className="w-10 h-10 mr-2" />
        </div>
        <div className="relative">
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className="flex items-center focus:outline-none" aria-label="Select Temperature Conversion Type">
                  <FontAwesomeIcon icon={faTemperatureHalf} className="h-5 w-5" />
                  <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5" />
                </Menu.Button>
                <Transition
                  show={open}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items static className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <span
                            className={`${
                              active ? "bg-gray-100" : ""
                            } block px-4 py-2 text-sm text-gray-700`}
                          >
                            Option 1
                          </span>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <span
                            className={`${
                              active ? "bg-gray-100" : ""
                            } block px-4 py-2 text-sm text-gray-700`}
                          >
                            Option 2
                          </span>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
}
