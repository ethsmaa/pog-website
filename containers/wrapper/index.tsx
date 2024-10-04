'use client';
import React from 'react';
import AboutSection from '@/components/AboutSection';
import EventSection from '@/components/EventSection';
import MemberSection from '@/components/MemberSection';
import SponsorSection from '@/components/SponsorSection';
import HomeSection from '@/components/HomeSection';
import FooterSection from '@/components/FooterSection';
import { fetchEvents } from '@/features/notion/fetchEvents';


// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page() {
    const eventsData = await fetchEvents(); // Notion'dan event verilerini çekiyoruz

    

    return (
        <div className="w-full">
            <HomeSection />
            <AboutSection />
            <SponsorSection />
            <EventSection events={eventsData} />
            <MemberSection />
            <FooterSection />
        </div>
    );
}
