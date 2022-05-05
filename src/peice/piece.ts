import { PlayerType } from '../player';

export type PieceType = 'King' | 'Sang' | 'Jang' | 'Ja' | 'Hu' | 'Empty';

export type OwnerType = PlayerType | 'None';

export class Piece {
  private type: PieceType;
  private owner: OwnerType;

  private constructor(type: PieceType, owner: OwnerType) {
    this.type = type;
    this.owner = owner;
  }

  private static cachedPieces: Piece[] = [];

  private static getCachedPiece(type: PieceType, owner: OwnerType): Piece {
    let piece = this.cachedPieces.find(x => x.type == type && x.owner == owner);
    if (!piece) {
      piece = new Piece(type, owner);
      Piece.cachedPieces.push(piece);
    }
    return piece;
  }

  static King(owner: PlayerType): Piece {
    return Piece.getCachedPiece('King', owner);
  }

  static Sang(owner: PlayerType): Piece {
    return Piece.getCachedPiece('Sang', owner);
  }

  static Jang(owner: PlayerType): Piece {
    return Piece.getCachedPiece('Jang', owner);
  }

  static Ja(owner: PlayerType): Piece {
    return Piece.getCachedPiece('Ja', owner);
  }

  static Hu(owner: PlayerType): Piece {
    return Piece.getCachedPiece('Hu', owner);
  }

  static Empty() {
    return Piece.getCachedPiece('Empty', 'None');
  }
}
