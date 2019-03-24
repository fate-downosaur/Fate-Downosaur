import { IEntity, Position, Attributes, Layer, Color } from './IEntity'

class Entity implements IEntity {
  image: Color[][]
  position: Position
  attributes: Attributes
  layer: Layer
}

export { Entity }
