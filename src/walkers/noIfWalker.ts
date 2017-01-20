import { IfStatement } from "typescript";

import { BasicWalker } from "./basicWalker";

export class NoIfWalker extends BasicWalker {
  public visitIfStatement(node: IfStatement) {
    this.addKeywordFailure(node);

    super.visitIfStatement(node);
  }
}
