import { IOptions, RuleWalker } from "tslint";
import { SourceFile, SyntaxKind } from "typescript";

import { IKeyword } from "../keyword";

export class BasicWalker extends RuleWalker {
  protected addKeywordFailure(node: IKeyword) {
    const message = `The usage of ${node.getName()} is discouraged.`;
    const failure = this.createFailure(
      node.getStart(),
      node.getKeywordLength(),
      message,
    );
    this.addFailure(failure);
  }
}
