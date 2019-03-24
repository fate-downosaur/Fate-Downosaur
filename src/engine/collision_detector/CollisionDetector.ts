import { ICollisionDetector } from './ICollisionDetector'
import { IWorld } from '../world'

class CollisionDetector implements ICollisionDetector {
  world: IWorld

  constructor(world: IWorld) {
    this.world = world
  }
}

export { CollisionDetector }
