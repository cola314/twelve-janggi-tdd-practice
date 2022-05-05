import { Game } from './game';
import { Piece } from './peice/piece';
import { SquareId } from './square-id';

test('get initial game board state', () => {
  let game = new Game();
  let state = game.getGameState();
  expect(state.getSquare(SquareId.fromBoard(1, 1)).piece).toBe(Piece.jang('Top'));
  expect(state.getSquare(SquareId.fromBoard(2, 1)).piece).toBe(Piece.king('Top'));
  expect(state.getSquare(SquareId.fromBoard(3, 1)).piece).toBe(Piece.sang('Top'));
  expect(state.getSquare(SquareId.fromBoard(1, 2)).piece).toBe(Piece.empty());
  expect(state.getSquare(SquareId.fromBoard(2, 2)).piece).toBe(Piece.ja('Top'));
  expect(state.getSquare(SquareId.fromBoard(3, 2)).piece).toBe(Piece.empty());
  expect(state.getSquare(SquareId.fromBoard(1, 3)).piece).toBe(Piece.empty());
  expect(state.getSquare(SquareId.fromBoard(2, 3)).piece).toBe(Piece.ja('Bottom'));
  expect(state.getSquare(SquareId.fromBoard(3, 3)).piece).toBe(Piece.empty());
  expect(state.getSquare(SquareId.fromBoard(1, 4)).piece).toBe(Piece.sang('Bottom'));
  expect(state.getSquare(SquareId.fromBoard(2, 4)).piece).toBe(Piece.king('Bottom'));
  expect(state.getSquare(SquareId.fromBoard(3, 4)).piece).toBe(Piece.jang('Bottom'));
});

test('select square then square selected', () => {
  const game = new Game();
  const squareId = SquareId.fromBoard(1, 1);
  game.select(squareId);
  expect(game.getGameState().getSquare(squareId).isSelected).toBe(true);
});

test('select square then other square to be not selected', () => {
  let game = new Game();
  const square = SquareId.fromBoard(1, 1);
  const other = SquareId.fromBoard(1, 2);
  game.select(square);
  game.select(other);
  expect(game.getGameState().getSquare(square).isSelected).toBe(false);
  expect(game.getGameState().getSquare(other).isSelected).toBe(true);
});
