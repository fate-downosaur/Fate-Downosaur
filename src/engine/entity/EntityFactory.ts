import { IWorld } from '../world'
import { IEntityFactory, Entity, EntityGroup, Position } from '.'
import { RenderObject } from './IEntity'

class EntityFactory implements IEntityFactory {
  private world: IWorld
  constructor(world: IWorld) {
    this.world = world
  }

  createEntity(arg: RenderObject) {
    return new Entity(this.world, arg)
  }

  createEntityGroup(position: Position) {
    return new EntityGroup(this.world, position)
  }

  getWorld() {
    return this.world
  }
}

export { EntityFactory }
