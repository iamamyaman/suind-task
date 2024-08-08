import React, { useState } from "react";
import Logo from "../../../src/assets/images/logo.png";
import { BiHome } from "react-icons/bi";
import { HiDatabase } from "react-icons/hi";
import { MdOutlineSatelliteAlt } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { RiLogoutCircleRFill, RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router";

const Sidebar = ({ showSidebar, setIsUserAuthenticated }) => {
  const navigate = useNavigate();
  const menuItems = [
    {
      text: "Home",
      icon: <BiHome size={20} />,
    },
    {
      text: "Data Analysis",
      icon: <HiDatabase size={20} />,
    },
    {
      text: "Satelite Analysis",
      icon: <MdOutlineSatelliteAlt size={20} />,
    },
    {
      text: "Weather",
      icon: <TiWeatherPartlySunny size={20} />,
    },
  ];

  //function to handle logout logic
  const onLogout = () => {
    setIsUserAuthenticated(false);
    localStorage.removeItem("user");
    navigate("/login");
  };

  const [activeMenu, setActiveMenu] = useState(menuItems[0]);
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
        !showSidebar ? "-translate-x-full" : "translate-x-0"
      } sm:translate-x-0`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex flex-col">
        <img src={Logo} className="w-[100px] mb-5 "></img>
        <ul className="space-y-2 font-medium">
          {menuItems?.map((item, idx) => (
            <li
              key={idx}
              className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer ${
                item.text === activeMenu.text ? "bg-gray-700" : ""
              }`}
            >
              {item?.icon}
              <span className="ms-3">{item?.text}</span>
            </li>
          ))}
        </ul>
        <li
          className="flex gap-2 items-center text-white mt-auto cursor-pointer"
          onClick={onLogout}
        >
          <RiLogoutCircleRLine />
          Logout
        </li>
      </div>
    </aside>
  );
};

export default Sidebar;
