import { Game } from './game';
import { Piece } from './peice/piece';

test('get initial game board state', () => {
  let game = new Game();
  let state = game.getGameState();
  expect(state.getSquare(1, 1).piece).toBe(Piece.Jang('Top'));
  expect(state.getSquare(2, 1).piece).toBe(Piece.King('Top'));
  expect(state.getSquare(3, 1).piece).toBe(Piece.Sang('Top'));
  expect(state.getSquare(1, 2).piece).toBe(Piece.Empty());
  expect(state.getSquare(2, 2).piece).toBe(Piece.Ja('Top'));
  expect(state.getSquare(3, 2).piece).toBe(Piece.Empty());
  expect(state.getSquare(1, 3).piece).toBe(Piece.Empty());
  expect(state.getSquare(2, 3).piece).toBe(Piece.Ja('Bottom'));
  expect(state.getSquare(3, 3).piece).toBe(Piece.Empty());
  expect(state.getSquare(1, 4).piece).toBe(Piece.Sang('Bottom'));
  expect(state.getSquare(2, 4).piece).toBe(Piece.King('Bottom'));
  expect(state.getSquare(3, 4).piece).toBe(Piece.Jang('Bottom'));
});

test('select square then square selected', () => {
  let game = new Game();
  game.select(1, 1);
  expect(game.getGameState().getSquare(1, 1).isSelected).toBe(true);
});

test('select square then other square to be not selected', () => {
  let game = new Game();
  game.select(1, 1);
  game.select(1, 2);
  expect(game.getGameState().getSquare(1, 1).isSelected).toBe(false);
  expect(game.getGameState().getSquare(1, 2).isSelected).toBe(true);
});
