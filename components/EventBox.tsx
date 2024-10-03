import React from 'react';

type EventProps = {
    event: {
        header: string,
        content: string,
    };
};


export const EventBox: React.FC<EventProps> = ({ event }) => {
    return (
        <div className="py-2 px-3  border border-black bg-white rounded-lg shadow-md">

            <div className="flex justify-between md:justify-start items-center space-x-6">
                <h3 className="text-sm md:text-lg font-semibold">{event.header}</h3>
                <p className="text-xs text-gray-500">12.02.2025</p>
            </div>

            <p className="mt-1 md:mt-2 text-gray-600 text-sm md:text-base">{event.content}</p>

        </div>
    );
};
