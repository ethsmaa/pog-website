import React from 'react';
import Wrapper from '../containers/wrapper';
import { fetchEvents } from '@/features/notion/fetchEvents';


export default async function Page() {
    const rows = await fetchEvents();

    return (
        <>
        <code>{rows[0].name}</code>
            <Wrapper />
        </>
    );
}