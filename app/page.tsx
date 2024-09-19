import React from 'react';
import Wrapper from '../containers/wrapper';

const fetchFromNotion = async () => {
    const response = await fetch('http://localhost:3000/api/notion');
    const data = await response.json();
    return JSON.parse(data);
}

export default async function Page() {
    const rows: rowsStructured = await fetchFromNotion();

    return (
        <>
        <code>{rows[0].first_name}</code>
            <Wrapper />
        </>
    );
}