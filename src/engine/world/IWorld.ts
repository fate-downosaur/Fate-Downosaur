import { IRenderer } from '../renderer'
import { IInputDispatcher } from '../input_dispatcher'
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
  getInputSource: () => HTMLElement
}

export { IWorld }
