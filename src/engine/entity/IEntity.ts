import { IWorld } from '../world'
import { Key, ListenerAction } from '../input_dispatcher'

export type Position = {
  x: number
  y: number
}

export type Attributes = {
  color: string
}

export type LayerType = 'background' | 'foreground' | 'ui'

export type Layer = {
  type: LayerType
  index: number
}

export type Color = string

export interface RenderShape {
  drawSelf: (ctx: CanvasRenderingContext2D, position: Position) => void
}

export type RenderObject = {
  position: Position
  layer: Layer
  image: RenderShape[]
}

export interface IEntity {
  getRenderObjects: () => RenderObject[]
  getPosition: () => Position
  setPosition: (position: Position) => IEntity
  getWorld: () => IWorld
  addEventListener: (arg: { key: Key; action: ListenerAction }) => void
  removeEventListener: () => void
}
