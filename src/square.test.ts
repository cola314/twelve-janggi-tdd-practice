import { Square } from './square';
import { Piece } from './piece/piece';

test('select square', () => {
  let square = new Square(Piece.ja('Top'));
  square.isSelected = true;
  expect(square.isSelected).toBe(true);
});

test('reset square', () => {
  let square = new Square(Piece.ja('Top'));
  square.isSelected = false;
  expect(square.isSelected).toBe(false);
});
