import { Piece } from './piece';

test('Pieces with the same type and owner are equals true', () => {
  expect(Piece.king('Top') === Piece.king('Top')).toBe(true);
});

test('Pieces with the same type but different owner are equals false', () => {
  expect(Piece.ja('Top') === Piece.ja('Bottom')).toBe(false);
});
