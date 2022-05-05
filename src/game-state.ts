import { PieceType, PlayerType, Square } from './square';

export class GameState {
  board: Square[][];
  constructor() {
    this.board = [
      [
        new Square(PieceType.Jang, PlayerType.Top),
        new Square(PieceType.King, PlayerType.Top),
        new Square(PieceType.Sang, PlayerType.Top),
      ],
      [
        new Square(PieceType.Empty, PlayerType.None),
        new Square(PieceType.Ja, PlayerType.Top),
        new Square(PieceType.Empty, PlayerType.None),
      ],
      [
        new Square(PieceType.Empty, PlayerType.None),
        new Square(PieceType.Ja, PlayerType.Down),
        new Square(PieceType.Empty, PlayerType.None),
      ],
      [
        new Square(PieceType.Sang, PlayerType.Down),
        new Square(PieceType.King, PlayerType.Down),
        new Square(PieceType.Jang, PlayerType.Down),
      ],
    ];
  }

  getSquare(x: number, y: number): Square {
    return this.board[y - 1][x - 1];
  }

  select(x: number, y: number) {
    this.board.forEach((squares, i) => {
      squares.forEach((square, j) => {
        if (i == y - 1 && j == x - 1) {
          square.changeSelect(true);
        } else {
          square.changeSelect(false);
        }
      });
    });
  }
}
