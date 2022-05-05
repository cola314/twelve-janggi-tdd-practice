import { SquareId } from './square-id';

test('test board area square id', () => {
  expect(SquareId.fromBoard(1, 1).id).toBe(0);
  expect(SquareId.fromBoard(3, 1).id).toBe(2);
  expect(SquareId.fromBoard(1, 4).id).toBe(9);
  expect(SquareId.fromBoard(3, 4).id).toBe(11);
  expect(SquareId.fromBoard(2, 2).id).toBe(4);
});

test('test top player area square id', () => {
  expect(SquareId.fromCaptive('Top', 1).id).toBe(12);
  expect(SquareId.fromCaptive('Top', 6).id).toBe(17);
});

test('test bottom player area square id', () => {
  expect(SquareId.fromCaptive('Bottom', 1).id).toBe(18);
  expect(SquareId.fromCaptive('Bottom', 6).id).toBe(23);
});
