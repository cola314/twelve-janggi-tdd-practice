import { Game } from './game';
import { PieceType, PlayerType } from './square';

test('get initial game board state', () => {
  let game = new Game();
  let state = game.getGameState();
  expect(state.getSquare(1, 1).getType()).toBe(PieceType.Jang);
  expect(state.getSquare(2, 1).getType()).toBe(PieceType.King);
  expect(state.getSquare(3, 1).getType()).toBe(PieceType.Sang);
  expect(state.getSquare(1, 2).getType()).toBe(PieceType.Empty);
  expect(state.getSquare(2, 2).getType()).toBe(PieceType.Ja);
  expect(state.getSquare(3, 2).getType()).toBe(PieceType.Empty);
  expect(state.getSquare(1, 3).getType()).toBe(PieceType.Empty);
  expect(state.getSquare(2, 3).getType()).toBe(PieceType.Ja);
  expect(state.getSquare(3, 3).getType()).toBe(PieceType.Empty);
  expect(state.getSquare(1, 4).getType()).toBe(PieceType.Sang);
  expect(state.getSquare(2, 4).getType()).toBe(PieceType.King);
  expect(state.getSquare(3, 4).getType()).toBe(PieceType.Jang);
});

test('get initial game board state and check piece owner', () => {
  let game = new Game();
  let state = game.getGameState();
  expect(state.getSquare(1, 1).getOwner()).toBe(PlayerType.Top);
  expect(state.getSquare(2, 1).getOwner()).toBe(PlayerType.Top);
  expect(state.getSquare(3, 1).getOwner()).toBe(PlayerType.Top);
  expect(state.getSquare(1, 2).getOwner()).toBe(PlayerType.None);
  expect(state.getSquare(2, 2).getOwner()).toBe(PlayerType.Top);
  expect(state.getSquare(3, 2).getOwner()).toBe(PlayerType.None);
  expect(state.getSquare(1, 3).getOwner()).toBe(PlayerType.None);
  expect(state.getSquare(2, 3).getOwner()).toBe(PlayerType.Down);
  expect(state.getSquare(3, 3).getOwner()).toBe(PlayerType.None);
  expect(state.getSquare(1, 4).getOwner()).toBe(PlayerType.Down);
  expect(state.getSquare(2, 4).getOwner()).toBe(PlayerType.Down);
  expect(state.getSquare(3, 4).getOwner()).toBe(PlayerType.Down);
});

test('select square then square selected', () => {
  let game = new Game();
  game.select(1, 1);
  expect(game.getGameState().getSquare(1, 1).isSelected()).toBe(true);
});

test('select square then other square to be not selected', () => {
  let game = new Game();
  game.select(1, 1);
  game.select(1, 2);
  expect(game.getGameState().getSquare(1, 1).isSelected()).toBe(false);
  expect(game.getGameState().getSquare(1, 2).isSelected()).toBe(true);
});
