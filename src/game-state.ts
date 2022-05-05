import { PieceType, Square } from './square';

export class GameState {
  board: Square[][];
  constructor() {
    this.board = [
      [
        new Square(PieceType.Jang),
        new Square(PieceType.King),
        new Square(PieceType.Sang),
      ],
      [
        new Square(PieceType.Empty),
        new Square(PieceType.Ja),
        new Square(PieceType.Empty),
      ],
      [
        new Square(PieceType.Empty),
        new Square(PieceType.Ja),
        new Square(PieceType.Empty),
      ],
      [
        new Square(PieceType.Sang),
        new Square(PieceType.King),
        new Square(PieceType.Jang),
      ],
    ];
  }

  getSquare(x: number, y: number): Square {
    return this.board[y - 1][x - 1];
  }
}