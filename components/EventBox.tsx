import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

export const EventBox: React.FC<{
  event: EventData;
  isSelected: boolean;
  onClick: () => void;
  isHidden: boolean;
}> = ({ event, isSelected, onClick, isHidden }) => {
  // Açıklamayı 70 karaktere kadar sınırlandırmak için bir helper function
  const truncateContent = (content: string, length: number) => {
    if (content.length > length) {
      return content.substring(0, length) + "..."; // 70 karakterden büyükse üç nokta ekle
    }
    return content;
  };

  return (
    <div
      className={`cursor-pointer border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all duration-500 ease-in-out ${
        isSelected
          ? "w-full h-auto py-10 px-10" // Seçiliyse geniş ekran ve padding
          : "w-full h-20 overflow-hidden" // Seçili değilse daha geniş ama dar
      } ${isHidden ? "hidden" : "block"} p-3`} // Kutucuğa padding eklendi
      onClick={onClick}
    >
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
      {/* İçerik sadece seçildiğinde tam gösterilecek */}
      <p
        className={`mt-1 md:mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base ${
          !isSelected ? "line-clamp-2" : ""
        }`}
      >
        {isSelected ? event.content : truncateContent(event.content, 70)}
        {/* Seçili değilse 70 karakter göster */}
      </p>
    </div>
  );
};
