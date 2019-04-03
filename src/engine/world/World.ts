import { IWorld } from './IWorld'
import { Renderer, IRenderer } from '../renderer'
import { InputDispatcher, IInputDispatcher } from '../input_dispatcher'
import { ICollisionDetector, CollisionDetector } from '../collision_detector'
import { IEntity, IEntityFactory, EntityFactory } from '../entity'

class World implements IWorld {
  private entities: IEntity[]
  private renderer: IRenderer
  private inputDispatcher: IInputDispatcher
  private collisionDetector: ICollisionDetector
  private inputSource: HTMLElement

  entityFactory: IEntityFactory
  millionSecondesSinceStart: number
  dimension: { width: number; height: number }
  constructor(inputSource: HTMLElement) {
    this.renderer = new Renderer(this)
    this.inputDispatcher = InputDispatcher.getInstance(this)
    this.collisionDetector = new CollisionDetector(this)
    this.entityFactory = new EntityFactory(this)
    this.inputSource = inputSource
  }

  getEntities() {
    return this.entities
  }

  getInputSource() {
    return this.inputSource
  }
}

export { World }
