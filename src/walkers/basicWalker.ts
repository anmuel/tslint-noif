import { IOptions, RuleWalker } from "tslint";
import { SourceFile, Statement, SyntaxKind} from "typescript";

export class BasicWalker extends RuleWalker {
  protected addKeywordFailure(node: Statement) {
    const statementName = SyntaxKind[node.kind].split("Statement")[0];
    const keywordName = statementName.toLowerCase();
    const keywordLength = keywordName.length;
    const message = `The usage of ${keywordName}-statements is discouraged.`;
    const failure = this.createFailure(
      node.getStart(),
      keywordLength,
      message,
    );
    this.addFailure(failure);
  }
}
