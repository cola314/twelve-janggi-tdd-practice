import { SquareId } from './square-id';
import exp from 'constants';

test('test board area square id', () => {
  expect(SquareId.fromBoardOrNull(1, 1).id).toBe(0);
  expect(SquareId.fromBoardOrNull(3, 1).id).toBe(2);
  expect(SquareId.fromBoardOrNull(1, 4).id).toBe(9);
  expect(SquareId.fromBoardOrNull(3, 4).id).toBe(11);
  expect(SquareId.fromBoardOrNull(2, 2).id).toBe(4);
});

test('test top player area square id', () => {
  expect(SquareId.fromCaptiveOrNull('Top', 1).id).toBe(12);
  expect(SquareId.fromCaptiveOrNull('Top', 6).id).toBe(17);
});

test('test bottom player area square id', () => {
  expect(SquareId.fromCaptiveOrNull('Bottom', 1).id).toBe(18);
  expect(SquareId.fromCaptiveOrNull('Bottom', 6).id).toBe(23);
});

test('test square id to coordination', () => {
  expect(SquareId.fromBoardOrNull(1, 1).toBoardCoordinateOrNull()).toEqual({ x: 1, y: 1 });
});

test('out of range returns null', () => {
  expect(SquareId.fromBoardOrNull(3, 5)).toBeNull();
});
