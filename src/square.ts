export enum PieceType {
  King = 'King',
  Sang = 'Sang',
  Jang = 'Jang',
  Ja = 'Ja',
  Hu = 'Hu',
  Empty = 'Empty',
}

export class Square {
  private readonly type: PieceType;
  private _isSelected: boolean;

  constructor(type: PieceType) {
    this.type = type;
    this._isSelected = false;
  }

  changeSelect(select: boolean) {
    this._isSelected = select;
  }

  isSelected() {
    return this._isSelected;
  }

  getType(): PieceType {
    return this.type;
  }
}
