import React from "react";
import {
  getBatteryStatusIcon,
  getFlightHoursIcon,
} from "../../helpers/droneCard";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuGoal } from "react-icons/lu";
import { HiWrenchScrewdriver } from "react-icons/hi2";

const ExpandedView = ({ selectedDrone }) => {
  return (
    <div className="w-full md:w-1/2 p-3  bg-white shadow-lg border-solid border-[2px] border-gray-100  rounded-xl flex flex-col items-center gap-1 ">
      <div className=" flex flex-col items-center">
        <img
          src={selectedDrone?.image}
          className="w-auto h-[300px] animate-upDown"
        />
        <h1 className="text-[35px] font-bold text-gray-800 italic">
          {selectedDrone?.id}
        </h1>
        <p className="py-1 px-3 text-[14px] font-semibold bg-blue-50 text-blue-400 rounded-md my-1 mb-2 flex items-center gap-1">
          <LuGoal />
          Current Mission : {selectedDrone?.current_mission}
        </p>

        <ul className="flex flex-col">
          <li
            className={`flex justify-center items-center gap-1 text-[14px] border-b-[1px] py-2 border-gray-100  ${
              getFlightHoursIcon(selectedDrone?.flight_hours)?.color
            }`}
          >
            {getFlightHoursIcon(selectedDrone?.flight_hours)?.icon} Flight Hours
            : {selectedDrone?.flight_hours}
          </li>
          <li
            className={`flex justify-center items-center gap-1 text-[14px] border-b-[1px] py-2 ${
              getBatteryStatusIcon(selectedDrone?.battery_status)?.color
            }`}
          >
            {getBatteryStatusIcon(selectedDrone?.battery_status)?.icon}
            Battery status : {selectedDrone?.battery_status}
          </li>
          <li
            className={`text-[14px] border-b-[1px] py-2 text-gray-500 flex justify-center items-center gap-2`}
          >
            <FaMapLocationDot /> Last Known location :{" "}
            {selectedDrone.last_known_location}
          </li>
        </ul>

        <div class="relative overflow-x-auto mt-4">
          <p className="flex justify-center gap-2 text-[13px] items-center py-2 text-gray-900 font-semibold">
            <HiWrenchScrewdriver />
            Maintainence logs
          </p>
          <table class="w-full text-sm text-left rtl:text-right text-gray-500  overflow-hidden">
            <thead class="text-xs text-gray-500 uppercase bg-gray-50  ">
              <tr>
                <th scope="col" class="px-6 py-[6px] text-[11px]">
                  Date
                </th>
                <th scope="col" class="px-6 py-[6px] text-[11px]">
                  Description
                </th>
                <th scope="col" class="px-6 py-[6px] text-[11px]">
                  Technician
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedDrone?.maintenance_logs?.map((log, idx) => {
                return (
                  <tr class="bg-white border-b " key={idx}>
                    <td class="px-6 py-[6px] text-[11px] font-medium text-gray-900 whitespace-nowrap ">
                      {log?.date}
                    </td>
                    <td class="px-6 py-[6px] text-[11px]">
                      {log?.description}
                    </td>
                    <td class="px-6 py-[6px] text-[11px]">{log?.technician}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpandedView;
