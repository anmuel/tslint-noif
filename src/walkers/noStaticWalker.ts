import { ElementAccessExpression, FunctionExpression } from "typescript";

import { BasicWalker } from "./basicWalker";

export class NoStaticWalker extends BasicWalker {
  public visitElementAccessExpression(expr: ElementAccessExpression) {
    console.log("ElementAccessExpression");
    console.info(expr);
    super.visitElementAccessExpression(expr);
  }

  public visitFunctionExpression(expr: FunctionExpression) {
    console.log("FunctionExpression");
    console.info(expr);
    super.visitFunctionExpression(expr);
  }
}
