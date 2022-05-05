import { Piece } from './piece';

test('Pieces with the same type and owner are equals true', () => {
  expect(Piece.King('Top') === Piece.King('Top')).toBe(true);
});

test('Pieces with the same type but different owner are equals false', () => {
  expect(Piece.Ja('Top') === Piece.Ja('Bottom')).toBe(false);
});
