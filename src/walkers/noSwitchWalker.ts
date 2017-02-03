import { SwitchStatement } from "typescript";

import { BasicWalker } from "./basicWalker";
import { Keyword } from "./keyword";

export class NoSwitchWalker extends BasicWalker {
  public visitSwitchStatement(node: SwitchStatement) {
    const keyword = new Keyword(node.kind, node.getStart());
    this.addKeywordFailure(keyword);

    super.visitSwitchStatement(node);
  }
}
