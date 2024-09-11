import React from 'react';

type EventProps = {
    event: {
        eventID: number; //todo: id lazim mi acaba indexle cozebilir miyiz?
        title: string;
        date: string; // todo: bunu date formatinda yapabiliriz
        content: string;
    };
};

export const EventBox: React.FC<EventProps> = ({ event }) => {
    return (
        <div className="py-2 px-3  border border-black bg-white rounded-lg shadow-md">

            <div className="flex justify-between md:justify-start items-center space-x-6">
                <h3 className="text-sm md:text-lg font-semibold">{event.title}</h3>
                <p className="text-xs text-gray-500">{event.date}</p>
            </div>

            <p className="mt-1 md:mt-2 text-gray-600 text-sm md:text-base">{event.content}</p>

        </div>
    );
};
