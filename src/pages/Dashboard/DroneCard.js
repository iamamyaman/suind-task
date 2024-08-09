import React from "react";

import { FaMapLocationDot } from "react-icons/fa6";
import {
  getBatteryStatusIcon,
  getFlightHoursIcon,
  getStatusColor,
} from "../../helpers/droneCard";

const DroneCard = ({ drone, selected, onClick }) => {
  return (
    <div
      className={`group w-full md:w-[49%] h-[320px] min-w-[250px]  p-3 py-4 flex-none relative overflow-hidden flex flex-col gap-1 items-center   ${
        selected
          ? "bg-teal-200 border-[1px] border-green-200 shadow-md"
          : "bg-white border-[1px] border-gray-200 shadow-sm"
      } rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 cursor-pointer`}
      onClick={onClick}
    >
      <img
        src={drone.image}
        className="h-[180px] transform transition-transform duration-300 group-hover:scale-110"
      />
      <p className="font-semibold text-[20px] text-gray-600">{drone?.id}</p>
      <div
        className={`absolute top-0 left-0 py-1 px-2 rounded-br-md text-[10px] flex gap-1 items-center shadow-sm ${
          getStatusColor(drone?.status).color
        } ${getStatusColor(drone?.status)?.bg}`}
      >
        {getStatusColor(drone?.status).icon}
        {drone?.status}
      </div>
      <ul className="text-center flex justify-center gap-4 mt-2">
        <li
          className={`flex items-center gap-1 text-[14px] ${
            getFlightHoursIcon(drone?.flight_hours)?.color
          }`}
        >
          {getFlightHoursIcon(drone?.flight_hours)?.icon} {drone?.flight_hours}
        </li>
        <li
          className={`flex items-center gap-1 text-[14px] ${
            getBatteryStatusIcon(drone?.battery_status)?.color
          }`}
        >
          {getBatteryStatusIcon(drone?.battery_status)?.icon}
          {drone?.battery_status}
        </li>
      </ul>

      <div className={`text-[14px] text-gray-500 flex items-center gap-2`}>
        <FaMapLocationDot /> {drone?.last_known_location}
      </div>
    </div>
  );
};

export default DroneCard;
