import { RenderShape, Position } from '../'
import { Attributes } from '../IEntity'
import { setupCtx } from './utils'

export type Props = {
  x: number
  y: number
  attributes?: Attributes
  width: number
  height: number
}

export class Rectangle implements RenderShape {
  position: Position
  attributes: Attributes
  width: number
  height: number

  constructor(args: Props) {
    this.position = { x: args.x, y: args.y }
    this.attributes = args.attributes
    this.width = args.width
    this.height = args.height
  }

  drawSelf(ctx: CanvasRenderingContext2D, position: Position) {
    if (this.attributes) {
      setupCtx(this.attributes, ctx)
    }
    ctx.fillRect(
      position.x + this.position.x,
      position.y + this.position.y,
      this.width,
      this.height
    )
  }
}
