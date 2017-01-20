import { RuleFailure, Rules } from "tslint";
import { SourceFile } from "typescript";

export abstract class BasicRule extends Rules.AbstractRule {
  public apply(sourceFile: SourceFile): RuleFailure[] {
    return this.applyWithWalker(this.createWalker(sourceFile));
  }

  protected abstract createWalker(sourceFile: SourceFile);
}
