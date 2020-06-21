import React from 'react';

export default function Header(){
    return (
        <div className="header uncopyable">
            <div className="logo">Hichess.org</div>

            <nav>
                <ul>
                    <li>Play</li>
                    <li>Learn</li>
                    <li>Watch</li>
                    <li>Community</li>
                    <li>Tools</li>
                </ul>
            </nav>
        </div>
    );
}