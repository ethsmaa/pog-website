import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

export const EventBox: React.FC<{ event: EventData }> = ({ event }) => {
  return (
    <div className="py-2 px-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex justify-between md:justify-start items-center space-x-6">
        <h3 className="text-sm md:text-lg font-semibold text-black dark:text-white">
          {event.header}
        </h3>
        <div className="flex items-center space-x-1">
          <FaRegCalendarAlt className="text-gray-500 dark:text-gray-400" />
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {event.date}
          </p>
        </div>
      </div>
      <p className="mt-1 md:mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
        {event.content}
      </p>
    </div>
  );
};
