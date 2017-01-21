import { SourceFile } from "typescript";

import { BasicRule } from "../basicRule";
import { NoIfWalker } from "../walkers/noIfWalker";

export class Rule extends BasicRule {
  public createWalker(sourceFile: SourceFile) {
    return new NoIfWalker(sourceFile, this.getOptions());
  }
}
