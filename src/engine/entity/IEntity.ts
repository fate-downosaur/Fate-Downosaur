export type Position = {
  x: number
  y: number
}

export type Attributes = {
  color: string | Function
}

export type LayerType = 'background' | 'foreground' | 'ui'

export type Layer = {
  type: LayerType
  index: number
}

export type Color = string

export interface IEntity {
  position: Position
  attributes: Attributes
  layer: Layer
  image: Color[][]
}
