// Importing icons from react-icons library
import { MdFlight, MdLocationOn } from "react-icons/md";
import { FaBatteryFull, FaBatteryHalf, FaBatteryQuarter } from "react-icons/fa";
import {
  AiOutlineCheckCircle,
  AiOutlineSync,
  AiOutlineWarning,
} from "react-icons/ai";

// Function to get status color, background color, and icon based on status
export const getStatusColor = (status) => {
  // Default color, icon, and background color
  let color = "text-gray-600";
  let icon = <AiOutlineSync className={color} />;
  let bg = "bg-gray-100";

  // Switch case to determine color, icon, and background color based on the status
  switch (status) {
    case "Available":
      color = "text-green-600"; // Green color for "Available" status
      bg = "bg-green-100"; // Light green background
      icon = <AiOutlineCheckCircle className={color} />; // Check circle icon
      break;
    case "In-flight":
      color = "text-blue-600"; // Blue color for "In-flight" status
      bg = "bg-blue-100"; // Light blue background
      icon = <MdFlight className={color} />; // Flight icon
      break;
    case "Maintenance":
      color = "text-yellow-600"; // Yellow color for "Maintenance" status
      bg = "bg-yellow-100"; // Light yellow background
      icon = <AiOutlineWarning className={color} />; // Warning icon
      break;
    default:
      break; // Default case retains initial values
  }

  // Return an object containing the icon, color, and background color
  return { icon, color, bg };
};

// Function to get flight hours icon and color based on the number of flight hours
export const getFlightHoursIcon = (flight_hours) => {
  let color = "text-gray-500"; // Default gray color
  if (flight_hours > 150) {
    color = "text-red-500"; // Red color if flight hours exceed 150
  } else if (flight_hours > 100) {
    color = "text-yellow-500"; // Yellow color if flight hours are between 101 and 150
  } else {
    color = "text-green-500"; // Green color if flight hours are 100 or less
  }
  // Return an object containing the flight icon and the color
  return { icon: <MdFlight className={color} />, color };
};

// Function to get battery status icon and color based on the battery level
export const getBatteryStatusIcon = (battery_status) => {
  const batteryLevel = parseInt(battery_status); // Convert battery status to integer
  let color = "text-gray-500"; // Default gray color
  let icon = <FaBatteryQuarter className={color} />; // Default icon for low battery

  // Determine icon and color based on battery level
  if (batteryLevel > 75) {
    color = "text-green-500"; // Green color for battery level above 75%
    icon = <FaBatteryFull className={color} />; // Full battery icon
  } else if (batteryLevel > 50) {
    color = "text-yellow-500"; // Yellow color for battery level between 51% and 75%
    icon = <FaBatteryHalf className={color} />; // Half battery icon
  } else if (batteryLevel > 25) {
    color = "text-red-500"; // Red color for battery level between 26% and 50%
    icon = <FaBatteryQuarter className={color} />; // Quarter battery icon
  }

  // Return an object containing the icon and color
  return { icon, color };
};
