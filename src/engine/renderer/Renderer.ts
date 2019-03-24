import { IRenderer } from './IRenderer'
import { IWorld, World } from '../world'

class Renderer implements IRenderer {
  world: IWorld

  constructor(world: IWorld) {
    this.world = world
  }

  render() {
    this.world.entities.forEach((entity) => {
      console.log(entity)
    })
  }
}

export { Renderer }
