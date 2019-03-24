import { IEntity } from './IEntity'
import { IWorld } from '../world'

export interface IEntityFactory {
  createEntity: () => IEntity
  getWorld: () => IWorld
}
