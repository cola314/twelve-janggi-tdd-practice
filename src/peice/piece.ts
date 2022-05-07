import { PlayerType } from '../player';
import { SquareId } from '../square-id';
import { Square } from '../square';

export type PieceType = 'King' | 'Sang' | 'Jang' | 'Ja' | 'Hu' | 'Empty';

export type OwnerType = PlayerType | 'None';

export abstract class Piece {
  protected type: PieceType;
  protected owner: OwnerType;

  protected constructor(type: PieceType, owner: OwnerType) {
    this.type = type;
    this.owner = owner;
  }

  static king(owner: PlayerType): Piece {
    return new PieceKing(owner);
  }

  static sang(owner: PlayerType): Piece {
    return new PieceSang(owner);
  }

  static jang(owner: PlayerType): Piece {
    return new PieceJang(owner);
  }

  static ja(owner: PlayerType): Piece {
    return new PieceJa(owner);
  }

  static hu(owner: PlayerType): Piece {
    return new PieceHu(owner);
  }

  static empty() {
    return new PieceEmpty();
  }

  movableArea(squareId: SquareId): SquareId[] {
    return [];
  }
}

class PieceKing extends Piece {
  constructor(owner: PlayerType) {
    super('King', owner);
  }

  movableArea(squareId: SquareId): SquareId[] {
    if (squareId.isCaptiveArea()) {
      return SquareId.playerAllowedArea(this.owner as PlayerType);
    }
    return [
      [-1, -1],
      [0, -1],
      [1, -1],
      [-1, 0],
      [1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
    ]
      .map(x => squareId.addCoordinateOrNull(x[0], x[1]))
      .filter(x => x !== null);
  }
}

class PieceSang extends Piece {
  constructor(owner: PlayerType) {
    super('Sang', owner);
  }

  movableArea(squareId: SquareId): SquareId[] {
    if (squareId.isCaptiveArea()) {
      return SquareId.playerAllowedArea(this.owner as PlayerType);
    }
    return [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
    ]
      .map(x => squareId.addCoordinateOrNull(x[0], x[1]))
      .filter(x => x !== null);
  }
}

class PieceJang extends Piece {
  constructor(owner: PlayerType) {
    super('Jang', owner);
  }

  movableArea(squareId: SquareId): SquareId[] {
    if (squareId.isCaptiveArea()) {
      return SquareId.playerAllowedArea(this.owner as PlayerType);
    }
    return [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]
      .map(x => squareId.addCoordinateOrNull(x[0], x[1]))
      .filter(x => x !== null);
  }
}

class PieceJa extends Piece {
  constructor(owner: PlayerType) {
    super('Ja', owner);
  }

  movableArea(squareId: SquareId): SquareId[] {
    if (squareId.isCaptiveArea()) {
      return SquareId.playerAllowedArea(this.owner as PlayerType);
    }
    if (this.owner === 'Top') {
      return [squareId.addCoordinateOrNull(0, 1)].filter(x => x !== null);
    } else {
      return [squareId.addCoordinateOrNull(0, -1)].filter(x => x !== null);
    }
  }
}

class PieceHu extends Piece {
  constructor(owner: PlayerType) {
    super('Hu', owner);
  }

  movableArea(squareId: SquareId): SquareId[] {
    if (squareId.isCaptiveArea()) {
      return SquareId.playerAllowedArea(this.owner as PlayerType);
    }
    if (this.owner === 'Top') {
      return [
        [0, -1],
        [-1, 1],
        [0, 1],
        [1, 1],
      ]
        .map(x => squareId.addCoordinateOrNull(x[0], x[1]))
        .filter(x => x !== null);
    } else {
      return [
        [-1, -1],
        [0, -1],
        [1, -1],
        [0, 1],
      ]
        .map(x => squareId.addCoordinateOrNull(x[0], x[1]))
        .filter(x => x !== null);
    }
  }
}

class PieceEmpty extends Piece {
  constructor() {
    super('Empty', 'None');
  }
}
