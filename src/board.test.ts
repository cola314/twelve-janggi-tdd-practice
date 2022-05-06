import { SquareId } from './square-id';
import { Piece } from './peice/piece';
import { Board } from './board';

test('select square then adjacent square highlighted', () => {
  const board = new Board();
  board.putPiece(SquareId.fromBoard(2, 2), Piece.king('Top'));
  board.select(SquareId.fromBoard(2, 2));
  expect(board.getSquare(SquareId.fromBoard(2, 2)).isSelected).toBe(true);
  expect(board.getSquare(SquareId.fromBoard(1, 1)).isHighLighted).toBe(true);
  expect(board.getSquare(SquareId.fromBoard(2, 1)).isHighLighted).toBe(true);
  expect(board.getSquare(SquareId.fromBoard(3, 1)).isHighLighted).toBe(true);
  expect(board.getSquare(SquareId.fromBoard(1, 2)).isHighLighted).toBe(true);
  expect(board.getSquare(SquareId.fromBoard(2, 2)).isHighLighted).toBe(false);
  expect(board.getSquare(SquareId.fromBoard(3, 2)).isHighLighted).toBe(true);
  expect(board.getSquare(SquareId.fromBoard(1, 3)).isHighLighted).toBe(true);
  expect(board.getSquare(SquareId.fromBoard(2, 3)).isHighLighted).toBe(true);
  expect(board.getSquare(SquareId.fromBoard(3, 3)).isHighLighted).toBe(true);
});

test('clear highlighted square test', () => {
  const board = new Board();
  board.putPiece(SquareId.fromBoard(1, 1), Piece.king('Top'));
  board.putPiece(SquareId.fromBoard(3, 4), Piece.king('Top'));
  board.select(SquareId.fromBoard(1, 1));
  board.select(SquareId.fromBoard(3, 4));
  expect(board.getSquare(SquareId.fromBoard(1, 1)).isHighLighted).toBe(false);
  expect(board.getSquare(SquareId.fromBoard(2, 1)).isHighLighted).toBe(false);
  expect(board.getSquare(SquareId.fromBoard(1, 2)).isHighLighted).toBe(false);
  expect(board.getSquare(SquareId.fromBoard(2, 2)).isHighLighted).toBe(false);
});
