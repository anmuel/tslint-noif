import { SourceFile } from "typescript";

import { BasicRule } from "../basicRule";
import { NoStaticWalker } from "../walkers/noStaticWalker";

export class Rule extends BasicRule {
  protected createWalker(sourceFile: SourceFile) {
    return new NoStaticWalker(sourceFile, this.getOptions());
  }
}
