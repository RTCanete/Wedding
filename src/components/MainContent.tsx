// MainContent.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const MainContent: React.FC = () => {
    return (
        <main className="main-content">
            <h2>Welcome to our wedding plan website!</h2>
            <nav className="nav-bar">
                <ul>
                    <li>
                        <Link to="/schedule" className="nav-button">Schedule</Link>
                    </li>
                    <li>
                        <Link to="/entourage" className="nav-button">Entourage</Link>
                    </li>
                    <li>
                        <Link to="/guest-list" className="nav-button">Guest List</Link>
                    </li>
                    <li>
                        <Link to="/gallery" className="nav-button">Gallery</Link>
                    </li>
                </ul>
            </nav>
            {/* Add your wedding plan content here */}
        </main>
    );
};

export default MainContent;
