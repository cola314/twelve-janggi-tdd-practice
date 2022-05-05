import { Square } from './square';
import { Piece } from './peice/piece';

export class GameState {
  board: Square[][];
  constructor() {
    this.board = [
      [
        new Square(Piece.Jang('Top')),
        new Square(Piece.King('Top')),
        new Square(Piece.Sang('Top')),
      ],
      [
        new Square(Piece.Empty()),
        new Square(Piece.Ja('Top')),
        new Square(Piece.Empty()),
      ],
      [
        new Square(Piece.Empty()),
        new Square(Piece.Ja('Bottom')),
        new Square(Piece.Empty()),
      ],
      [
        new Square(Piece.Sang('Bottom')),
        new Square(Piece.King('Bottom')),
        new Square(Piece.Jang('Bottom')),
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
          square.isSelected = true;
        } else {
          square.isSelected = false;
        }
      });
    });
  }
}
