import { GameState } from './game-state';

export class Game {
  getGameState(): GameState {
    return new GameState();
  }
}
