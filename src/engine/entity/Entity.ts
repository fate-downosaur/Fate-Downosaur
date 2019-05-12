import { IEntity, Position, Attributes, Layer, RenderShape } from './'
import { IWorld } from '../world'
import { RenderObject } from './IEntity'

class Entity implements IEntity {
  private image: RenderShape[]
  private position: Position
  private attributes: Attributes
  private layer: Layer
  private world: IWorld

  constructor(world: IWorld, arg: RenderObject) {
    this.world = world
    this.image = arg.image
    this.position = arg.position
    this.attributes = arg.attributes
    this.layer = arg.layer
  }

  getPosition() {
    return this.position
  }

  setPosition(position: Position) {
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
        attributes: this.attributes,
        layer: this.layer
      }
    ]
  }
}

export { Entity }
