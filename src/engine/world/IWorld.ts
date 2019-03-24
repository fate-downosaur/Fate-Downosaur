import { IRenderer } from '../renderer'
import { IInputReactor } from '../input_reactor'
import { ICollisionDetector } from '../collision_detector'
import { IEntity, IEntityFactory } from '../entity'

interface IWorld {
  getEntities: () => IEntity[]
  entityFactory: IEntityFactory
  millionSecondesSinceStart: number
  dimension: {
    width: number
    height: number
  }
}

export { IWorld }
