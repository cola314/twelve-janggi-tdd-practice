import { Piece } from './piece';
import { SquareId } from '../square-id';

function expectSquaresAreEqual(realSquares: SquareId[], expectSquares: SquareId[]) {
  return expect(realSquares.map(x => x.id).sort()).toEqual(expectSquares.map(x => x.id).sort());
}

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

test('SANG piece movable area test', () => {
  const piece = Piece.sang('Top');
  const movableArea = piece.movableArea(SquareId.fromBoardOrNull(2, 2));
  expect(movableArea).toEqual([
    SquareId.fromBoardOrNull(1, 1),
    SquareId.fromBoardOrNull(3, 1),
    SquareId.fromBoardOrNull(1, 3),
    SquareId.fromBoardOrNull(3, 3),
  ]);
});

test('JANG piece movable area test', () => {
  const piece = Piece.jang('Top');
  const movableArea = piece.movableArea(SquareId.fromBoardOrNull(2, 2));
  expectSquaresAreEqual(movableArea, [
    SquareId.fromBoardOrNull(2, 1),
    SquareId.fromBoardOrNull(1, 2),
    SquareId.fromBoardOrNull(3, 2),
    SquareId.fromBoardOrNull(2, 3),
  ]);
});

test('EMPTY piece movable area test', () => {
  const piece = Piece.empty();
  const movableArea = piece.movableArea(SquareId.fromBoardOrNull(1, 1));
  expect(movableArea).toEqual([]);
});

test('top player HU piece movable area test', () => {
  const piece = Piece.hu('Top');
  const movableArea = piece.movableArea(SquareId.fromBoardOrNull(2, 2));
  expectSquaresAreEqual(movableArea, [
    SquareId.fromBoardOrNull(2, 1),
    SquareId.fromBoardOrNull(1, 3),
    SquareId.fromBoardOrNull(2, 3),
    SquareId.fromBoardOrNull(3, 3),
  ]);
});

test('bottom player HU piece movable area test', () => {
  const piece = Piece.hu('Bottom');
  const movableArea = piece.movableArea(SquareId.fromBoardOrNull(2, 2));
  expectSquaresAreEqual(movableArea, [
    SquareId.fromBoardOrNull(1, 1),
    SquareId.fromBoardOrNull(2, 1),
    SquareId.fromBoardOrNull(3, 1),
    SquareId.fromBoardOrNull(2, 3),
  ]);
});

test('top player select captive area piece test', () => {
  const piece = Piece.ja('Top');
  expect(piece.movableArea(SquareId.fromCaptiveOrNull('Top', 1))).toEqual([
    SquareId.fromBoardOrNull(1, 1),
    SquareId.fromBoardOrNull(2, 1),
    SquareId.fromBoardOrNull(3, 1),
    SquareId.fromBoardOrNull(1, 2),
    SquareId.fromBoardOrNull(2, 2),
    SquareId.fromBoardOrNull(3, 2),
    SquareId.fromBoardOrNull(1, 3),
    SquareId.fromBoardOrNull(2, 3),
    SquareId.fromBoardOrNull(3, 3),
  ]);
});

test('bottom select captive area piece test', () => {
  const piece = Piece.ja('Bottom');
  expect(piece.movableArea(SquareId.fromCaptiveOrNull('Bottom', 1))).toEqual([
    SquareId.fromBoardOrNull(1, 2),
    SquareId.fromBoardOrNull(2, 2),
    SquareId.fromBoardOrNull(3, 2),
    SquareId.fromBoardOrNull(1, 3),
    SquareId.fromBoardOrNull(2, 3),
    SquareId.fromBoardOrNull(3, 3),
    SquareId.fromBoardOrNull(1, 4),
    SquareId.fromBoardOrNull(2, 4),
    SquareId.fromBoardOrNull(3, 4),
  ]);
});
