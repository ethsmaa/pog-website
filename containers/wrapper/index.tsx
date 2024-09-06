import React from 'react';
import AboutSection from '@/components/AboutSection';
import EventSection from '@/components/EventSection';
import MemberSection from '@/components/MemberSection';
import SponsorSection from '@/components/SponsorSection';


export default function Page() {
    return (
        <>
            <AboutSection />
            <SponsorSection />
            <EventSection />
            <MemberSection />
        </>

    );
}