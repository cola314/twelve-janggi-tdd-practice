import { Piece } from './piece/piece';
import { SquareId } from './square-id';
import { GameState } from './game-state';

test('get initial game board state', () => {
  const game = new GameState();
  expect(game.getSquare(SquareId.fromBoardOrNull(1, 1)).piece).toEqual(Piece.jang('Top'));
  expect(game.getSquare(SquareId.fromBoardOrNull(2, 1)).piece).toEqual(Piece.king('Top'));
  expect(game.getSquare(SquareId.fromBoardOrNull(3, 1)).piece).toEqual(Piece.sang('Top'));
  expect(game.getSquare(SquareId.fromBoardOrNull(1, 2)).piece).toEqual(Piece.empty());
  expect(game.getSquare(SquareId.fromBoardOrNull(2, 2)).piece).toEqual(Piece.ja('Top'));
  expect(game.getSquare(SquareId.fromBoardOrNull(3, 2)).piece).toEqual(Piece.empty());
  expect(game.getSquare(SquareId.fromBoardOrNull(1, 3)).piece).toEqual(Piece.empty());
  expect(game.getSquare(SquareId.fromBoardOrNull(2, 3)).piece).toEqual(Piece.ja('Bottom'));
  expect(game.getSquare(SquareId.fromBoardOrNull(3, 3)).piece).toEqual(Piece.empty());
  expect(game.getSquare(SquareId.fromBoardOrNull(1, 4)).piece).toEqual(Piece.sang('Bottom'));
  expect(game.getSquare(SquareId.fromBoardOrNull(2, 4)).piece).toEqual(Piece.king('Bottom'));
  expect(game.getSquare(SquareId.fromBoardOrNull(3, 4)).piece).toEqual(Piece.jang('Bottom'));
});

test('select square then square selected', () => {
  const game = new GameState();
  const squareId = SquareId.fromBoardOrNull(1, 1);
  game.select(squareId);
  expect(game.getSquare(squareId).isSelected).toBe(true);
});

test('select square then other square to be not selected', () => {
  const game = new GameState();
  const square = SquareId.fromBoardOrNull(1, 1);
  const other = SquareId.fromBoardOrNull(1, 2);
  game.select(square);
  game.select(other);
  expect(game.getSquare(square).isSelected).toBe(false);
  expect(game.getSquare(other).isSelected).toBe(true);
});
