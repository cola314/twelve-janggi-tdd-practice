import { Piece } from './piece/piece';
import { SquareId } from './square-id';
import { Square } from './square';

export class Board {
  static readonly BOARD_WIDTH = 3;
  static readonly BOARD_HEIGHT = 4;
  static readonly CAPTIVE_AREA_SIZE = 6;

  squares: Square[] = [];

  constructor() {
    for (let i = 0; i < 12; i++) this.squares.push(new Square(Piece.empty()));
  }

  getSquare(squareId: SquareId): Square {
    return this.squares[squareId.id];
  }

  select(squareId: SquareId) {
    this.squares.forEach(square => {
      square.isSelected = false;
      square.isHighLighted = false;
    });
    const selectedSquare = this.getSquare(squareId);
    selectedSquare.isSelected = true;
    const movableArea = selectedSquare.piece.movableArea(squareId);
    movableArea.forEach(id => (this.getSquare(id).isHighLighted = true));
  }

  putPiece(squareId: SquareId, piece: Piece) {
    this.getSquare(squareId).piece = piece;
  }
}
