import { IfStatement } from "typescript";

import { Keyword } from "../keyword";
import { BasicWalker } from "./basicWalker";

export class NoIfWalker extends BasicWalker {
  public visitIfStatement(node: IfStatement) {
    const keyword = new Keyword(node.kind, node.getStart());
    this.addKeywordFailure(keyword);

    super.visitIfStatement(node);
  }
}
