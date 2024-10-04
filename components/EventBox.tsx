import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";

export const EventBox: React.FC<{ event: EventData }> = ({ event }) => {
    return (
        <div className="py-2 px-3 border border-black bg-white rounded-lg shadow-md">
            <div className="flex justify-between md:justify-start items-center space-x-6">
                <h3 className="text-sm md:text-lg font-semibold">{event.header}</h3>
                <div className='flex items-center space-x-1'>
                    <FaRegCalendarAlt className="text-gray-500" />
                    <p className="text-xs text-gray-500">{event.date}</p>
                </div>
            </div>
            <p className="mt-1 md:mt-2 text-gray-600 text-sm md:text-base">{event.content}</p>
        </div>
    );
};