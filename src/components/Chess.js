import React from 'react';
// import ChessPanel from './ChessPanel';
import ChessChat from './ChessChat';
import ChessWinLosePanel from './ChessWinLosePanel';
import ChessBoard from './ChessBoard';
import ChessRoundDetails from './ChessRoundDetails';
import './chess.css';

export default function Chess() {
    return (
        <div className="chess-wrap">
            <div className="chess">
                <ChessChat />
                <ChessWinLosePanel />
                <ChessBoard />
                <ChessRoundDetails />
            </div>
        </div>
    );
}