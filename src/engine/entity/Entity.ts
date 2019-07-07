import { IEntity, RenderShape } from './'
import { IWorld } from '../world'
import { RenderObject } from './IEntity'

class Entity implements IEntity {
  private image: RenderShape[]
  private position: EntityPosition
  private layer: Layer
  private world: IWorld

  constructor(world: IWorld, arg: RenderObject) {
    this.world = world
    this.image = arg.image
    this.position = arg.position
    this.layer = arg.layer
  }

  getPosition() {
    return this.position
  }

  setPosition(position: EntityPosition) {
    this.position = position
    return this
  }

  getWorld() {
    return this.world
  }

  getRenderObjects() {
    return [
      {
        image: this.image,
        position: this.position,
        layer: this.layer
      }
    ] as RenderObject[]
  }

  addEventListener(option: EventListenerOption) {
    return this.world.addEventListener(option)
  }

  removeEventListener(id: number) {
    return this.world.removeEventListener(id)
  }
}

export { Entity }
