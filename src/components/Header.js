import React from 'react';

export default function Header(){
    return (
        <div className="header uncopyable">
            <div className="logo">Hichess.org</div>

            <nav>
                <ul>
                    <li><a href="#">Play</a></li>
                    <li><a href="#">Learn</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Tools</a></li>
                </ul>
            </nav>
        </div>
    );
}