export enum PieceType {
  King = 'King',
  Sang = 'Sang',
  Jang = 'Jang',
  Ja = 'Ja',
  Hu = 'Hu',
  Empty = 'Empty',
}

export enum PlayerType {
  None,
  Top,
  Down,
}

export class Square {
  private readonly type: PieceType;
  private _isSelected: boolean;
  private owner: PlayerType;

  constructor(type: PieceType, owner: PlayerType) {
    this.type = type;
    this.owner = owner;
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

  getOwner() {
    return this.owner;
  }
}
