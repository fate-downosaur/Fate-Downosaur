import { IRenderer } from './IRenderer'
import { IWorld, World } from '../world'
import { RenderShape, Rectangle, RenderObject } from '../entity'

class Renderer implements IRenderer {
  world: IWorld
  private ctx: CanvasRenderingContext2D
  private canvasSize: { width: number; height: number }

  constructor(world: IWorld) {
    this.world = world
    const canvas = world.getCanvas()
    this.ctx = canvas.getContext('2d')
    this.canvasSize = { width: canvas.width, height: canvas.height }
    console.log(canvas.width, canvas.height)
  }

  render() {
    const { width, height } = this.canvasSize
    this.ctx.clearRect(0, 0, width, height)
    this.world.getEntities().forEach((entity) => {
      entity.getRenderObjects().forEach((renderObject) => {
        this.drawImage(renderObject)
      })
    })
  }

  private drawImage({ image, position }: RenderObject) {
    image.forEach((shape) => {
      this.ctx.fillStyle = 'black'
      shape.drawSelf(this.ctx, position)
    })
  }
}

export { Renderer }
