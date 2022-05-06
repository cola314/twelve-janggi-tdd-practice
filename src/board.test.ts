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
