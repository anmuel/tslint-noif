import { 
   ElementAccessExpression,
   GetAccessorDeclaration,
   MethodDeclaration,
   Node,
   PropertyDeclaration,
   SetAccessorDeclaration,
   SyntaxKind,
 } from "typescript";

import { BasicWalker } from "./basicWalker";
import { Keyword } from "./keyword";

export class NoStaticWalker extends BasicWalker {

  public visitPropertyDeclaration(propertyDeclaration: PropertyDeclaration) {
    this.addNodeFailure(propertyDeclaration);
    super.visitPropertyDeclaration(propertyDeclaration);
  }

  public visitMethodDeclaration(methodDeclaration: MethodDeclaration) {
    this.addNodeFailure(methodDeclaration);
    super.visitMethodDeclaration(methodDeclaration);
  }

  public visitSetAccessor(accessor: SetAccessorDeclaration) {
    this.addNodeFailure(accessor);
    super.visitSetAccessor(accessor);
  }

  public visitGetAccessor(accessor: GetAccessorDeclaration) {
    this.addNodeFailure(accessor);
    super.visitGetAccessor(accessor);
  }

  private addNodeFailure(node: Node) {
    const staticModifiers = node.modifiers.filter((modifier) => {
      return modifier.kind === SyntaxKind.StaticKeyword;
    });
    const staticModifier = staticModifiers[0];
    if (staticModifier) {
      const keyword = new Keyword(staticModifier.kind,
      staticModifier.getStart());
      this.addKeywordFailure(keyword);
    }
  }
}
