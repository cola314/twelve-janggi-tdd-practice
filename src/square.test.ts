import { Square } from './square';
import { Piece } from './peice/piece';

test('select square', () => {
  let square = new Square(Piece.Ja('Top'));
  square.isSelected = true;
  expect(square.isSelected).toBe(true);
});

test('reset square', () => {
  let square = new Square(Piece.Ja('Top'));
  square.isSelected = false;
  expect(square.isSelected).toBe(false);
});
