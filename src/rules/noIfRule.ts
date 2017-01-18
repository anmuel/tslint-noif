import {
  RuleFailure,
  Rules,
  RuleWalker,
} from "tslint";
import { IfStatement, SourceFile } from "typescript";

export class Rule extends Rules.AbstractRule {
  public static FAILURE_STRING = "The usage of if-statements is discouraged.";

  public apply(sourceFile: SourceFile): RuleFailure[] {
    const walker = new NoIfWalker(sourceFile, this.getOptions());
    return this.applyWithWalker(walker);
  }
}

/* tslint:disable:max-classes-per-file */
class NoIfWalker extends RuleWalker {
  public visitIfStatement(node: IfStatement) {
    const failure = this.createFailure(
      node.getStart(),
      "if".length,
      Rule.FAILURE_STRING
    );

    this.addFailure(failure);

    super.visitIfStatement(node);
  }
}
