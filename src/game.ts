import { GameState } from './game-state';

export class Game {
  gameState: GameState;
  constructor() {
    this.gameState = new GameState();
  }

  getGameState(): GameState {
    return this.gameState;
  }

  select(x: number, y: number) {
    this.gameState.select(x, y);
  }
}
