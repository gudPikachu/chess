
import React, { Component } from "react";
import PropTypes from "prop-types";
import Chess  from "chess.js";

import Chessboard from "chessboardjsx";

const chess = new Chess();

class RandomVsRandom extends Component {
  static propTypes = { children: PropTypes.func };

  state = { fen: "start" };

  componentDidMount() {
    this.game = chess;
    setTimeout(() => this.makeRandomMove(), 1000);
  }

  componentWillUnmount() {
    window.clearTimeout(this.timer());
  }

  timer = () => window.setTimeout(this.makeRandomMove, 1000);

  makeRandomMove = () => {
    let possibleMoves = this.game.moves();

    // exit if the game is over
    if (
      this.game.game_over() === true ||
      this.game.in_draw() === true ||
      possibleMoves.length === 0
    )
      return;

    let randomIndex = Math.floor(Math.random() * possibleMoves.length);
    this.game.move(possibleMoves[randomIndex]);
    this.setState({ fen: this.game.fen() });

    this.timer();
  };

  render() {
    const { fen } = this.state;
    return this.props.children({ position: fen });
  }
}

export default function ChessBoard() {
  return (
    <div className="chess-board">
      <RandomVsRandom>
        {({ position }) => (
          <Chessboard
            width={320}
            id="random"
            position={position}
            transitionDuration={300}
            boardStyle={{
              borderRadius: "5px",
              boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
            }}
          />
        )}
      </RandomVsRandom>
    </div>
  );
}
