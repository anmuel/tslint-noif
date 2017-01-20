import {
  RuleFailure,
  Rules,
} from "tslint";
import { IfStatement, SourceFile } from "typescript";

import { NoIfWalker } from "../walkers/noIfWalker";

export class Rule extends Rules.AbstractRule {
  public apply(sourceFile: SourceFile): RuleFailure[] {
    const walker = new NoIfWalker(sourceFile, this.getOptions());
    return this.applyWithWalker(walker);
  }
}
