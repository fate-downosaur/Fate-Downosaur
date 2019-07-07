import { IEntity } from './IEntity'

export interface IEntityGroup extends IEntity {
  addEntity: (entity: IEntity) => void
  getEntities: () => IEntity[]
}
