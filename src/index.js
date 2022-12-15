import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";



class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}



class Board extends Game {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext:true,
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice()
        squares[i] = this.state.xIsNext ? 'X' : 'Y';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        })
    }
  renderSquare(i) {
    // return <Square />;
      return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function Square(props) {
    return (
      <button className="square" onClick={props.onClick} >
        {/* TODO */}
        {props.value}
      </button>
    );
}



// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
