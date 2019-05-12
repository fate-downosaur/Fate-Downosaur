import { IRenderer } from './IRenderer'
import { IWorld, World } from '../world'
import { RenderShape, Rectangle } from '../entity'

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
        this.drawImage(renderObject.image)
      })
    })
  }

  private drawImage(image: RenderShape[]) {
    image.forEach((shape) => this.drawShape(shape))
  }

  private drawShape(shape: RenderShape) {
    switch (shape.type) {
      case 'pixel': {
        this.ctx.fillRect(shape.x, shape.y, 1, 1)
      }
      case 'rectangle': {
        this.ctx.fillRect(
          shape.x,
          shape.y,
          (<Rectangle>shape).width,
          (<Rectangle>shape).height
        )
      }
    }
  }
}

export { Renderer }
