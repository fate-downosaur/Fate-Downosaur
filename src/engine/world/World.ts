import { IWorld } from './IWorld'
import { Renderer, IRenderer } from '../renderer'
import { InputReactor, IInputReactor } from '../input_reactor'
import { ICollisionDetector, CollisionDetector } from '../collision_detector'
import { IEntity, IEntityFactory, EntityFactory } from '../entity'

class World implements IWorld {
  private entities: IEntity[]
  private renderer: IRenderer
  private inputReactor: IInputReactor
  private collisionDetector: ICollisionDetector

  entityFactory: IEntityFactory
  millionSecondesSinceStart: number
  dimension: { width: number; height: number }
  constructor() {
    this.renderer = new Renderer(this)
    this.inputReactor = new InputReactor(this)
    this.collisionDetector = new CollisionDetector(this)
    this.entityFactory = new EntityFactory(this)
  }

  getEntities() {
    return this.entities
  }
}

export { World }
