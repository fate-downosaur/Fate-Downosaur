import { IEntity, IEntityFactory } from '../entity'
import { Listener } from '../input_dispatcher'

interface IWorld {
  getEntities: () => IEntity[]
  entityFactory: IEntityFactory
  millionSecondesSinceStart: number
  dimension: {
    width: number
    height: number
  }
  getInputSource: () => HTMLElement
  getCanvas: () => HTMLCanvasElement
  addEntity: (entity: IEntity) => void
  removeEntity: (entity: IEntity) => void
  start: () => void
  pause: () => void
  stop: () => void
  addEventListener: (option: EventListenerOption) => number
  removeEventListener: (id: number) => void
}

export { IWorld }
