import { GameState } from './game-state';
import { SquareId } from './square-id';

export class Game {
  gameState: GameState;
  constructor() {
    this.gameState = new GameState();
  }

  getGameState(): GameState {
    return this.gameState;
  }

  select(squareId: SquareId) {
    this.gameState.select(squareId);
  }
}
