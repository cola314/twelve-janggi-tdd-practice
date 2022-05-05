export enum PieceType {
  King = 'King',
  Sang = 'Sang',
  Jang = 'Jang',
  Ja = 'Ja',
  Hu = 'Hu',
  Empty = 'Empty',
}

export class Square {
  type: PieceType;

  constructor(type: PieceType) {
    this.type = type;
  }

  getType(): PieceType {
    return this.type;
  }
}
