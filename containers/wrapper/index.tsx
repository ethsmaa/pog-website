'use client';

import React from 'react';
import AboutSection from '@/components/AboutSection';
import EventSection from '@/components/EventSection';
import MemberSection from '@/components/MemberSection';
import SponsorSection from '@/components/SponsorSection';
import HomeSection from '@/components/HomeSection';
import FooterSection from '@/components/FooterSection';

export default function Page({ events }: { events: EventData[] }) {

    return (
        <div className="w-full">
            <HomeSection />
            <AboutSection />
            <SponsorSection />
            <EventSection events={events} /> {/* Verileri EventSection'a geçirin */}
            <MemberSection />
            <FooterSection />
        </div>
    );
}
