import { IWorld } from '../world'

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

export type RenderObject = {
  position: Position
  attributes: Attributes
  layer: Layer
  image: Color[][]
}

export interface IEntity {
  getRenderObjects: () => RenderObject[]
  getPosition: () => Position
  setPosition: (position: Position) => IEntity
  getWorld: () => IWorld
}
