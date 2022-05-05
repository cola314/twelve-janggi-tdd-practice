import { Piece } from './peice/piece';

export class Square {
  piece: Piece;
  isSelected: boolean;

  constructor(piece: Piece = Piece.Empty()) {
    this.isSelected = false;
    this.piece = piece;
  }
}
