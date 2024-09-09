import React from 'react';
import AboutSection from '@/components/AboutSection';
import EventSection from '@/components/EventSection';
import MemberSection from '@/components/MemberSection';
import SponsorSection from '@/components/SponsorSection';
import HomeSection from '@/components/HomeSection';


export default function Page() {
    return (
        <>
            <HomeSection />
            <AboutSection />
            <SponsorSection />
            <EventSection />
            <MemberSection />
            

        </>

    );
}