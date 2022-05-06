import { Piece } from './peice/piece';
import { SquareId } from './square-id';
import { Square } from './square';
import assert from 'assert';

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
    for (let x = 1; x <= Board.BOARD_WIDTH; x++) {
      for (let y = 1; y <= Board.BOARD_HEIGHT; y++) {
        let currentId = SquareId.fromBoardOrNull(x, y);
        const square = this.getSquare(currentId);
        if (currentId.equals(squareId)) {
          square.isSelected = true;
          for (let nx = x - 1; nx <= x + 1; nx++) {
            for (let ny = y - 1; ny <= y + 1; ny++) {
              if (nx == x && ny == y) continue;
              const highlightedId = SquareId.fromBoardOrNull(nx, ny);
              if (highlightedId != null) {
                this.getSquare(highlightedId).isHighLighted = true;
              }
            }
          }
        }
      }
    }
  }

  putPiece(squareId: SquareId, piece: Piece) {
    this.getSquare(squareId).piece = piece;
  }
}
