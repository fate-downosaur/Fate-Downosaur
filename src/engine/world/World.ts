import { IWorld } from './IWorld'
import { Renderer, IRenderer } from '../renderer'
import { InputDispatcher, IInputDispatcher } from '../input_dispatcher'
import { ICollisionDetector, CollisionDetector } from '../collision_detector'
import { IEntity, IEntityFactory, EntityFactory } from '../entity'

export type WorldStatus = 'playing' | 'stop' | 'pause'

class World implements IWorld {
  private entities: IEntity[]
  private renderer: IRenderer
  private inputDispatcher: IInputDispatcher
  private collisionDetector: ICollisionDetector
  private inputSource: HTMLElement
  private status: WorldStatus
  private canvas: HTMLCanvasElement

  entityFactory: IEntityFactory
  millionSecondesSinceStart: number
  dimension: { width: number; height: number }
  constructor(inputSource: HTMLElement, canvas: HTMLCanvasElement) {
    this.inputSource = inputSource
    this.canvas = canvas
    this.renderer = new Renderer(this)
    this.inputDispatcher = InputDispatcher.initialize(this)
    this.collisionDetector = new CollisionDetector(this)
    this.entityFactory = new EntityFactory(this)
    this.entities = []
  }

  getEntities() {
    return this.entities
  }

  getInputSource() {
    return this.inputSource
  }

  getCanvas() {
    return this.canvas
  }

  addEntity(entity: IEntity) {
    this.entities.push(entity)
  }

  removeEntity(entity: IEntity) {
    this.entities = this.entities.filter((i) => i !== entity)
  }

  start() {
    requestAnimationFrame(() => {
      this.renderer.render()
      this.start()
    })
  }

  pause() {}

  stop() {}
}

export { World }
