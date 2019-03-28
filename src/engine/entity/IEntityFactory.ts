import { IWorld } from '../world'
import { IEntityGroup, IEntity, RenderObject, Position } from '.'

export interface IEntityFactory {
  createEntity: (arg: RenderObject) => IEntity
  createEntityGroup: (p: Position) => IEntityGroup
  getWorld: () => IWorld
}
