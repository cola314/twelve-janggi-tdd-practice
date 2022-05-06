import { Piece } from './peice/piece';
import { SquareId } from './square-id';
import { GameState } from './game-state';

test('get initial game board state', () => {
  const game = new GameState();
  expect(game.getSquare(SquareId.fromBoard(1, 1)).piece).toBe(Piece.jang('Top'));
  expect(game.getSquare(SquareId.fromBoard(2, 1)).piece).toBe(Piece.king('Top'));
  expect(game.getSquare(SquareId.fromBoard(3, 1)).piece).toBe(Piece.sang('Top'));
  expect(game.getSquare(SquareId.fromBoard(1, 2)).piece).toBe(Piece.empty());
  expect(game.getSquare(SquareId.fromBoard(2, 2)).piece).toBe(Piece.ja('Top'));
  expect(game.getSquare(SquareId.fromBoard(3, 2)).piece).toBe(Piece.empty());
  expect(game.getSquare(SquareId.fromBoard(1, 3)).piece).toBe(Piece.empty());
  expect(game.getSquare(SquareId.fromBoard(2, 3)).piece).toBe(Piece.ja('Bottom'));
  expect(game.getSquare(SquareId.fromBoard(3, 3)).piece).toBe(Piece.empty());
  expect(game.getSquare(SquareId.fromBoard(1, 4)).piece).toBe(Piece.sang('Bottom'));
  expect(game.getSquare(SquareId.fromBoard(2, 4)).piece).toBe(Piece.king('Bottom'));
  expect(game.getSquare(SquareId.fromBoard(3, 4)).piece).toBe(Piece.jang('Bottom'));
});

test('select square then square selected', () => {
  const game = new GameState();
  const squareId = SquareId.fromBoard(1, 1);
  game.select(squareId);
  expect(game.getSquare(squareId).isSelected).toBe(true);
});

test('select square then other square to be not selected', () => {
  const game = new GameState();
  const square = SquareId.fromBoard(1, 1);
  const other = SquareId.fromBoard(1, 2);
  game.select(square);
  game.select(other);
  expect(game.getSquare(square).isSelected).toBe(false);
  expect(game.getSquare(other).isSelected).toBe(true);
});
