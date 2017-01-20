import {
  RuleFailure,
  Rules,
} from "tslint";
import { SourceFile, SwitchStatement } from "typescript";

import { NoSwitchWalker } from "../walkers/noSwitchWalker";

export class Rule extends Rules.AbstractRule {
  public apply(sourceFile: SourceFile): RuleFailure[] {
    const walker = new NoSwitchWalker(sourceFile, this.getOptions());
    return this.applyWithWalker(walker);
  }
}
