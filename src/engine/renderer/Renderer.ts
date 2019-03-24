import { IRenderer } from './IRenderer'
import { IWorld } from '../world'

class Renderer implements IRenderer {
  world: IWorld

  constructor(world: IWorld) {
    this.world = world
  }
}

export { Renderer }
