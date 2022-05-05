import { PlayerType } from './player';

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
  private static readonly BOARD_WIDTH = 3;
  private static readonly BOARD_HEIGHT = 4;
  private static readonly CAPTIVE_AREA_SIZE = 6;
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
    return new SquareId(x + y * this.BOARD_WIDTH);
  }

  /**
   * Get Captive Area SquareId
   * @param owner
   * @param index 1-based
   * @constructor
   */
  static fromCaptive(player: PlayerType, index: number): SquareId {
    index--;
    let id = this.BOARD_WIDTH * this.BOARD_HEIGHT + index;
    if (player === 'Bottom') id += this.CAPTIVE_AREA_SIZE;
    return new SquareId(id);
  }
}
