import React from 'react';
import ChessBoard from './ChessBoard';
import ChessRoundDetails from './ChessRoundDetails';

export default function ChessPanel(){
    return (
        <div className="chess-panel">
            <ChessBoard/>
            <ChessRoundDetails/>
        </div>
    );
}