import React, { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { GiDeliveryDrone } from "react-icons/gi";
import { userData } from "../../data/userdata";

import DroneCard from "./DroneCard";
import ExpandedView from "./ExpandedView";
import { useNavigate } from "react-router";

const Dashboard = ({ isUserAuthenticated, setIsUserAuthenticated }) => {
  console.log(isUserAuthenticated);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const drones = userData.drones;

  const [selectedDrone, setSelectedDrone] = useState(drones[0]);

  //logout user if user is not authenticated
  useEffect(() => {
    if (!isUserAuthenticated) {
      navigate("/login");
      return;
    }
  }, []);

  return (
    <div className="w-full h-[100vh] overflow-y-hidden">
      <button
        type="button"
        onClick={() => setShowSidebar(!showSidebar)}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <HiMenuAlt2 />
      </button>

      {/* Sidebar Component */}
      <Sidebar
        showSidebar={showSidebar}
        setIsUserAuthenticated={setIsUserAuthenticated}
      />

      {/* Main Dashboard Area */}
      <div class="p-4 sm:ml-64 bg-gray-50">
        <h1 className="text-gray-800 font-bold text-2xl mb-4 flex gap-2 items-center ">
          Your Drones
          <GiDeliveryDrone />
        </h1>

        <div className="flex flex-col md:flex-row gap-3 h-[90vh] overflow-auto md:overflow-hidden ">
          {/* Drones list */}
          <div className="w-full md:w-1/2 h-fit md:h-full md:overflow-y-auto bg-white border-2  border-gray-100 rounded-xl p-5 flex flex-col  md:flex-row md:flex-wrap md:justify-between md:gap-[10px] gap-2 overflow-hidden  scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50">
            {drones?.map((drone, idx) => {
              return (
                <DroneCard
                  key={drone.id}
                  drone={drone}
                  onClick={() => setSelectedDrone(drone)}
                  selected={drone.id === selectedDrone.id}
                />
              );
            })}
          </div>

          {/* Expanded view of Drone details */}
          <ExpandedView selectedDrone={selectedDrone} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
