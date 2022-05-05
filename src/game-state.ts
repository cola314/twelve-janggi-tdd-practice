import { Square } from './square';
import { Piece } from './peice/piece';
import { SquareId } from './square-id';

export class GameState {
  squares: Square[];
  constructor() {
    this.squares = [
      new Square(Piece.jang('Top')),
      new Square(Piece.king('Top')),
      new Square(Piece.sang('Top')),
      new Square(Piece.empty()),
      new Square(Piece.ja('Top')),
      new Square(Piece.empty()),
      new Square(Piece.empty()),
      new Square(Piece.ja('Bottom')),
      new Square(Piece.empty()),
      new Square(Piece.sang('Bottom')),
      new Square(Piece.king('Bottom')),
      new Square(Piece.jang('Bottom')),
    ];
  }

  getSquare(squareId: SquareId): Square {
    return this.squares[squareId.id];
  }

  select(squareId: SquareId) {
    this.squares.forEach((square, id) => {
      square.isSelected = id == squareId.id;
    });
  }
}
