import { IWorld } from '../world'
import { IEntityFactory, Entity } from './index'
class EntityFactory implements IEntityFactory {
  private world: IWorld
  constructor(world: IWorld) {
    this.world = world
  }

  createEntity() {
    return new Entity()
  }

  getWorld() {
    return this.world
  }
}

export { EntityFactory }
