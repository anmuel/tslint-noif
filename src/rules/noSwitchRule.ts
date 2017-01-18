import {
  RuleFailure,
  Rules,
  RuleWalker,
} from "tslint";
import { SourceFile, SwitchStatement } from "typescript";

export class Rule extends Rules.AbstractRule {
  public static FAILURE_STRING =
    "The usage of switch-statements is discouraged.";

  public apply(sourceFile: SourceFile): RuleFailure[] {
    const walker = new NoSwitchWalker(sourceFile, this.getOptions());
    return this.applyWithWalker(walker);
  }
}

/* tslint:disable:max-classes-per-file */
class NoSwitchWalker extends RuleWalker {
  public visitSwitchStatement(node: SwitchStatement) {
    const failure = this.createFailure(
      node.getStart(),
      "switch".length,
      Rule.FAILURE_STRING,
    );

    this.addFailure(failure);

    super.visitSwitchStatement(node);
  }
}
