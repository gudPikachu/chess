import React from 'react';

export default function ChessChat(){
    return (
        <div className="chess-chat-wrap">
            <div className="chess-chat">
                <nav className="uncopyable">
                    <ul>
                        <li className="active">
                            <span>Chat room</span>
                        </li>
                        <li>
                            <span>Notes</span>
                        </li>
                    </ul>
                </nav>

                <input type='text' placeholder="Please be nice in the chat!"/>
            </div>
        </div>
    );
}