import { Piece } from './piece';
import { SquareId } from '../square-id';

test('Pieces with the same type and owner are equals true', () => {
  expect(Piece.king('Top')).toEqual(Piece.king('Top'));
});

test('Pieces with the same type but different owner are equals false', () => {
  expect(Piece.ja('Top')).not.toEqual(Piece.ja('Bottom'));
});

test('top player ja movable area test', () => {
  const piece = Piece.ja('Top');
  expect(piece.movableArea(SquareId.fromBoardOrNull(2, 2))).toEqual([SquareId.fromBoardOrNull(2, 3)]);
});

test('bottom player ja movable area test', () => {
  const piece = Piece.ja('Bottom');
  expect(piece.movableArea(SquareId.fromBoardOrNull(2, 2))).toEqual([SquareId.fromBoardOrNull(2, 1)]);
});

test('end of board positioned ja cannot move', () => {
  const piece = Piece.ja('Top');
  expect(piece.movableArea(SquareId.fromBoardOrNull(1, 4))).toEqual([]);
});
