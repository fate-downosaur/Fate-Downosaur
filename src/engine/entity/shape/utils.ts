import { Attributes } from '../IEntity'

function setupCtx(attributes: Attributes, ctx: CanvasRenderingContext2D) {
  if (attributes.color) {
    ctx.fillStyle = attributes.color
  }
}
export { setupCtx }
