import { PlayerType } from './player';
import { Board } from './board';

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
  static fromBoard(x: number, y: number) {
    x--;
    y--;
    return new SquareId(x + y * Board.BOARD_WIDTH);
  }

  /**
   * Get Captive Area SquareId
   * @param owner
   * @param index 1-based
   * @constructor
   */
  static fromCaptive(player: PlayerType, index: number): SquareId {
    index--;
    let id = Board.BOARD_WIDTH * Board.BOARD_HEIGHT + index;
    if (player === 'Bottom') id += Board.CAPTIVE_AREA_SIZE;
    return new SquareId(id);
  }

  equals(other: SquareId) {
    return this.id === other.id;
  }
}
