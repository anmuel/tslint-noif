import * as dasherize from "dasherize";
import { SyntaxKind } from "typescript";

export interface IKeyword {
  kind: SyntaxKind;
  getStart(): number;
  getName(): string;
  getKeywordLength(): number;
}

export class Keyword implements IKeyword {
  private _name: string;

  constructor(public kind: SyntaxKind, public start: number) {
    // assignments are enough
  }

  public get keywordName(): string {
    const statementName = dasherize(SyntaxKind[this.kind]).split("-")[0];

    return statementName.toLowerCase();
  }

  public getKeywordLength() {
    return this.keywordName.length;
  }

  public set name(name: string) {
    this._name = name;
  }

  public getName() {
    return this._name || this.keywordName;
  }

  public getStart(): number {
    return this.start;
  }
}
