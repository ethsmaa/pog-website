import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

export const EventBox: React.FC<{
  event: EventData;
  isSelected: boolean;
  onClick: () => void;
  onClose: () => void;
  isHidden: boolean;
}> = ({ event, isSelected, onClick, onClose, isHidden }) => {
  const truncateContent = (content: string, length: number) => {
    return content.length > length ? content.substring(0, length) + "..." : content;
  };

  return (
    <div
      className={`relative cursor-pointer border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all duration-500 ease-in-out ${
        isSelected ? "w-full h-auto py-10 px-10" : "w-full h-20 overflow-hidden"
      } ${isHidden ? "hidden" : "block"} p-3`}
      onClick={!isSelected ? onClick : undefined} 
    >
      
      {isSelected && (
        <button
          onClick={(e) => {
            e.stopPropagation(); 
            onClose();
          }}
          className="absolute top-2 right-2 bg-[#1a264e] dark:bg-white text-white dark:text-gray-900 p-2 w-8 h-8 flex items-center justify-center rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-transparent dark:hover:bg-transparent hover:border-2 border-gray-900 hover:text-gray-900 dark:border-white dark:hover:text-white"
          aria-label="Close"
        >
          ✕
        </button>
      )}

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
      <p
        className={`mt-1 md:mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base ${
          !isSelected ? "line-clamp-2" : ""
        }`}
        dangerouslySetInnerHTML={{
          __html: isSelected ? event.content : truncateContent(event.content, 70),
        }}
      />
    </div>
  );
};
