import { IfStatement } from "typescript";

import { BasicWalker } from "./basicWalker";
import { Keyword } from "./keyword";

export class NoIfWalker extends BasicWalker {
  public visitIfStatement(node: IfStatement) {
    const keyword = new Keyword(node.kind, node.getStart());
    this.addKeywordFailure(keyword);

    super.visitIfStatement(node);
  }
}
