import { Piece } from './piece/piece';

export class Square {
  piece: Piece;
  isSelected: boolean;
  isHighLighted: boolean;

  constructor(piece: Piece = Piece.empty()) {
    this.piece = piece;
    this.isSelected = false;
    this.isHighLighted = false;
  }
}
