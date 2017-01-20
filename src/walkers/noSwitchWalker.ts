import { SwitchStatement } from "typescript";

import { BasicWalker } from "./basicWalker";

export class NoSwitchWalker extends BasicWalker {
  public visitSwitchStatement(node: SwitchStatement) {
    this.addKeywordFailure(node);

    super.visitSwitchStatement(node);
  }
}
