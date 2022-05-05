import { PieceType, Square } from './square';

test('select square', () => {
  let square = new Square(PieceType.Ja);
  square.changeSelect(true);
  expect(square.isSelected()).toBe(true);
});

test('reset square', () => {
  let square = new Square(PieceType.Ja);
  square.changeSelect(false);
  expect(square.isSelected()).toBe(false);
});
