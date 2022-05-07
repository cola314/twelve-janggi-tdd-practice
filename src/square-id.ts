import { PlayerType } from './player';
import { Board } from './board';

interface Coordinate {
  x: number;
  y: number;
}

interface CaptiveArea {
  player: PlayerType;
  index: Number;
}

/**
|--------------------|
| 12 13 14 15 16 17  | Top Player captive Area
|--------------------|
|     0   1   2      |  Game Board Area
|     3   4   5      |
|     6   7   8      |
|     9   10  11     |
|--------------------|
| 18 19 20 21 22 23  | Bottom Player Captive Area
|--------------------|
 */
export class SquareId {
  readonly id: number;

  private constructor(id: number) {
    this.id = id;
  }

  /**
   * Get Game Board Area
   * @param x 1-based
   * @param y 1-based
   * @constructor
   */
  static fromBoardOrNull(x: number, y: number): SquareId | null {
    if (1 <= x && x <= Board.BOARD_WIDTH && 1 <= y && y <= Board.BOARD_HEIGHT) {
      x--;
      y--;
      return new SquareId(x + y * Board.BOARD_WIDTH);
    }
    return null;
  }

  /**
   * Get Captive Area SquareId
   * @param owner
   * @param index 1-based
   * @constructor
   */
  static fromCaptiveOrNull(player: PlayerType, index: number): SquareId | null {
    index--;
    let id = Board.BOARD_WIDTH * Board.BOARD_HEIGHT + index;
    if (player === 'Bottom') id += Board.CAPTIVE_AREA_SIZE;
    return new SquareId(id);
  }

  toBoardCoordinateOrNull(): Coordinate | null {
    if (this.id < Board.BOARD_WIDTH * Board.BOARD_HEIGHT) {
      return {
        x: (this.id % Board.BOARD_WIDTH) + 1,
        y: Math.trunc(this.id / Board.BOARD_WIDTH) + 1,
      };
    }
    return null;
  }

  toCaptiveIndexOrNull(): CaptiveArea | null {
    if (this.id >= Board.BOARD_WIDTH * Board.BOARD_HEIGHT) {
      let index = this.id - Board.BOARD_HEIGHT * Board.BOARD_WIDTH;
      if (index >= Board.CAPTIVE_AREA_SIZE) {
        return {
          player: 'Bottom',
          index: index - Board.CAPTIVE_AREA_SIZE + 1,
        };
      }
      return {
        player: 'Top',
        index: index + 1,
      };
    }
    return null;
  }

  equals(other: SquareId) {
    return this.id === other.id;
  }

  addCoordinateOrNull(dx: number, dy: number): SquareId | null {
    const cd = this.toBoardCoordinateOrNull();
    if (cd) {
      return SquareId.fromBoardOrNull(cd.x + dx, cd.y + dy);
    }
    return null;
  }

  static playerAllowedArea(owner: PlayerType): SquareId[] {
    if (owner === 'Top') {
      return [...Array(9)].map((_, i) => new SquareId(i));
    } else {
      return [...Array(9)].map((_, i) => new SquareId(i + 3));
    }
  }

  isCaptiveArea() {
    return this.id >= Board.BOARD_WIDTH * Board.BOARD_HEIGHT;
  }
}
