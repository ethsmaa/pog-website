import React, { useState } from "react";
import leftGradient from "../public/images/event-lb.svg";
import rightGradient from "../public/images/event-rm.svg";

import { EventBox } from "./EventBox";
import { PageCard } from "./PageCard";
import { EVENTS_DATA } from "@/utils/constants";

export default function EventSection({ events }: { events: EventData[] }) {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null); // Seçilen event index'i

  return (
    <div
      id="events"
      className="relative w-screen min-h-screen overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Sağ arka plan gradyanı */}
      <div
        className="absolute top-[7%] right-[-10%] w-[700px] h-[800px] bg-no-repeat bg-contain opacity-60 md:opacity-80 z-0"
        style={{
          backgroundImage: `url(${rightGradient.src})`,
        }}
      />

      {/* Sol arka plan gradyanı */}
      <div
        className="absolute bottom-[1%] left-[-15%] w-[750px] h-[700px] bg-no-repeat bg-contain opacity-70 z-0"
        style={{
          backgroundImage: `url(${leftGradient.src})`,
        }}
      />

      <div className="absolute inset-0 flex pt-2 md:pt-0 md:items-center justify-center">
        <div className="relative z-10 flex flex-col items-center w-full max-w-7xl p-4 md:px-24">
          <div className="flex flex-col self-center items-center md:self-start md:items-start">
            <PageCard
              content={EVENTS_DATA.cardContent}
              backgroundColor="#8F99C2"
            />
            <h1 className="text-3xl font-bold my-2 md:my-6 sm:text-5xl dark:text-white">
              {EVENTS_DATA.title}
            </h1>
          </div>

          <div className="w-full space-y-3 md:space-y-4 mt-3">
            {events.map((event, index) => (
              <EventBox
                key={index}
                event={event}
                isSelected={selectedEvent === index}
                onClick={() =>
                  setSelectedEvent(selectedEvent === index ? null : index)
                } // Seçiliyse iptal et, değilse seç
                isHidden={selectedEvent !== null && selectedEvent !== index} // Seçili olmayanlar görünmez
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
