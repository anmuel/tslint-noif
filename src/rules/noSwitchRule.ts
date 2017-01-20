import { SourceFile } from "typescript";

import { BasicRule } from "../basicRule";
import { NoSwitchWalker } from "../walkers/noSwitchWalker";

export class Rule extends BasicRule {
  protected createWalker(sourceFile: SourceFile) {
    return new NoSwitchWalker(sourceFile, this.getOptions());
  }
}
