import { PieceType, PlayerType, Square } from './square';

test('select square', () => {
  let square = new Square(PieceType.Ja, PlayerType.Top);
  square.changeSelect(true);
  expect(square.isSelected()).toBe(true);
});

test('reset square', () => {
  let square = new Square(PieceType.Ja, PlayerType.Top);
  square.changeSelect(false);
  expect(square.isSelected()).toBe(false);
});
