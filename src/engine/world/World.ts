import { IWorld } from './IWorld'
import { Renderer, IRenderer } from '../renderer'
import { InputReactor, IInputReactor } from '../input_reactor'
import { ICollisionDetector, CollisionDetector } from '../collision_detector'
import { IEntity } from '../entity'

class World implements IWorld {
  dimension: { width: number; height: number }
  renderer: IRenderer
  inputReactor: IInputReactor
  collisionDetector: ICollisionDetector
  entities: IEntity[]

  constructor() {
    this.renderer = new Renderer(this)
    this.inputReactor = new InputReactor(this)
    this.collisionDetector = new CollisionDetector(this)
  }
}

export { World }
