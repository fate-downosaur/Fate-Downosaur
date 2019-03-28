import { IEntityGroup, IEntity, Position, Attributes, Layer, Color } from './'
import { flatten } from 'lodash'
import { IWorld } from '../world'

class EntityGroup implements IEntityGroup {
  private entities: IEntity[]
  private originalPosition: Position
  private position: Position
  private world: IWorld

  constructor(world: IWorld, position: Position) {
    this.entities = []
    this.world = world
    this.position = position
    this.originalPosition = { ...position }
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

  addEntity(entity: IEntity) {
    this.entities.push(entity)
  }

  getEntities() {
    return this.entities
  }

  getRenderObjects() {
    const offsetX = this.position.x - this.originalPosition.x
    const offsetY = this.position.y - this.originalPosition.y
    const res = this.entities.map((entity) => {
      const renderObjects = entity.getRenderObjects()
      renderObjects.forEach((renderObject) => {
        const { x, y } = renderObject.position
        renderObject.position = {
          x: x + offsetX,
          y: y + offsetY
        }
      })
      return renderObjects
    })

    return flatten(res)
  }
}

export { EntityGroup }
