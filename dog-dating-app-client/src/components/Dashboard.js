import React, { useEffect } from 'react';
import Header from './Header';
import UserPets from './UserPets';

export default function Dashboard() {
    useEffect(() => {
        document.title = 'Dog Dating App';
    }, []);
       
    return (
        <div>
            <Header />
            <UserPets />
            

        </div>
    )
}

