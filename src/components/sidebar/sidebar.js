import React, { useState } from "react";
import { Button } from "@windmill/react-ui";
import * as Icons from "../../assets/icons";
import { Transition } from "@windmill/react-ui";
import { DropdownIcon } from "../../assets/icons";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}
function Sidebar() {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  function handleDropdownMenuClick() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }

  const sidebardata = [
    {
      icon: "HomeIcon",
      name: "Dashboard",
    },
    {
      icon: "FormsIcon",
      name: "Forms",
    },
    {
      icon: "CardsIcon",
      name: "Cards",
    },
    {
      icon: "ChartsIcon",
      name: "Charts",
    },
    {
      icon: "ButtonsIcon",
      name: "Buttons",
    },
    {
      icon: "ModalsIcon",
      name: "Modals",
    },
    {
      icon: "TablesIcon",
      name: "Tables",
    },
    {
      icon: "PagesIcon",
      name: "Pages",
      subdata: [
        {
          name: "Login",
        },
        {
          name: "Create account",
        },
        {
          name: "Forgot password",
        },
        {
          name: "404",
        },
        {
          name: "Blank",
        },
      ],
    },
  ];

  return (
    <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block">
      <div className="py-4 text-gray-500 dark:text-gray-400">
        <a
          className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
          href="#"
        >
          Windmill
        </a>
        <ul className="mt-6">
          {sidebardata.map((mainItem) =>
            mainItem.sidebardata ? (
              <li key={mainItem.name} className="relative px-6 py-3">
                <button
                  className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  onClick={() => handleDropdownMenuClick}
                  aria-haspopup="true"
                >
                  <span className="inline-flex items-center">
                    <Icon
                      className="w-5 h-5"
                      aria-hidden="true"
                      icon={mainItem.icon}
                    />
                    <span className="ml-4">{mainItem.name}</span>
                  </span>
                  <DropdownIcon className="w-4 h-4" aria-hidden="true" />
                </button>
                <Transition
                  show={isDropdownMenuOpen}
                  enter="transition-all ease-in-out duration-300"
                  enterFrom="opacity-25 max-h-0"
                  enterTo="opacity-100 max-h-xl"
                  leave="transition-all ease-in-out duration-300"
                  leaveFrom="opacity-100 max-h-xl"
                  leaveTo="opacity-0 max-h-0"
                >
                  <ul
                    className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                    aria-label="submenu"
                  >
                    {mainItem.subdata?.map((r) => (
                      <li
                        className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                        key={r.name}
                      >
                        <p>{r.name}</p>
                      </li>
                    ))}
                  </ul>
                </Transition>
              </li>
            ) : (
              <li className="relative px-6 py-3" key={mainItem.name}>
                <p
                
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  activeClassName="text-gray-800 dark:text-gray-100"
                >
                    <span
                      className="absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg"
                      aria-hidden="true"
                    ></span>
                  <Icon
                    className="w-5 h-5"
                    aria-hidden="true"
                    icon={mainItem.icon}
                  />
                  <span className="ml-4">{mainItem.name}</span>
                </p>
              </li>
            )
          )}
        </ul>
        <div className="px-6 my-6">
          <Button>Create account</Button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
