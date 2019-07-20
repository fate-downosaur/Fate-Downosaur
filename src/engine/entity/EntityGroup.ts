import { IEntityGroup, IEntity } from './'
import { flatten } from 'lodash-es'
import { IWorld } from '../world'

class EntityGroup implements IEntityGroup {
  private entities: IEntity[]
  private originalPosition: EntityPosition
  private position: EntityPosition
  private world: IWorld

  constructor(world: IWorld, position: EntityPosition) {
    this.entities = []
    this.world = world
    this.position = position
    this.originalPosition = { ...position }
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

  addEventListener(option: EventListenerOption) {
    return this.world.addEventListener(option)
  }

  removeEventListener(id: number) {
    return this.world.removeEventListener(id)
  }
}

export { EntityGroup }
