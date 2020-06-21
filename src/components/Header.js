import React from 'react';

export default function Header(){
    return (
        <div className="header uncopyable">
            <div className="logo">Hichess.org</div>

            <nav>
                <ul>
                    <li><a>Play</a></li>
                    <li><a>Learn</a></li>
                    <li><a>Watch</a></li>
                    <li><a>Community</a></li>
                    <li><a>Tools</a></li>
                </ul>
            </nav>
        </div>
    );
}