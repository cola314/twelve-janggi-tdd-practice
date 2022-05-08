import { SquareId } from './square-id';
import { Piece } from './piece/piece';
import { Board } from './board';

test('select square then adjacent square highlighted', () => {
  const board = new Board();
  board.putPiece(SquareId.fromBoardOrNull(2, 2), Piece.king('Top'));
  board.select(SquareId.fromBoardOrNull(2, 2));
  expect(board.getSquare(SquareId.fromBoardOrNull(2, 2)).isSelected).toBe(true);
  expect(board.getSquare(SquareId.fromBoardOrNull(1, 1)).isHighLighted).toBe(true);
  expect(board.getSquare(SquareId.fromBoardOrNull(2, 1)).isHighLighted).toBe(true);
  expect(board.getSquare(SquareId.fromBoardOrNull(3, 1)).isHighLighted).toBe(true);
  expect(board.getSquare(SquareId.fromBoardOrNull(1, 2)).isHighLighted).toBe(true);
  expect(board.getSquare(SquareId.fromBoardOrNull(2, 2)).isHighLighted).toBe(false);
  expect(board.getSquare(SquareId.fromBoardOrNull(3, 2)).isHighLighted).toBe(true);
  expect(board.getSquare(SquareId.fromBoardOrNull(1, 3)).isHighLighted).toBe(true);
  expect(board.getSquare(SquareId.fromBoardOrNull(2, 3)).isHighLighted).toBe(true);
  expect(board.getSquare(SquareId.fromBoardOrNull(3, 3)).isHighLighted).toBe(true);
});

test('clear highlighted square test', () => {
  const board = new Board();
  board.putPiece(SquareId.fromBoardOrNull(1, 1), Piece.king('Top'));
  board.putPiece(SquareId.fromBoardOrNull(3, 4), Piece.king('Top'));
  board.select(SquareId.fromBoardOrNull(1, 1));
  board.select(SquareId.fromBoardOrNull(3, 4));
  expect(board.getSquare(SquareId.fromBoardOrNull(1, 1)).isHighLighted).toBe(false);
  expect(board.getSquare(SquareId.fromBoardOrNull(2, 1)).isHighLighted).toBe(false);
  expect(board.getSquare(SquareId.fromBoardOrNull(1, 2)).isHighLighted).toBe(false);
  expect(board.getSquare(SquareId.fromBoardOrNull(2, 2)).isHighLighted).toBe(false);
});
