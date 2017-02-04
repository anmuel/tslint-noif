import { SwitchStatement } from "typescript";

import { Keyword } from "../keyword";
import { BasicWalker } from "./basicWalker";

export class NoSwitchWalker extends BasicWalker {
  public visitSwitchStatement(node: SwitchStatement) {
    const keyword = new Keyword(node.kind, node.getStart());
    this.addKeywordFailure(keyword);

    super.visitSwitchStatement(node);
  }
}
