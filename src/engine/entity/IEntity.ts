import { IWorld } from '../world'

export type Attributes = {
  color: string
}

export interface RenderShape {
  drawSelf: (ctx: CanvasRenderingContext2D, position: EntityPosition) => void
}

export type RenderObject = {
  position: EntityPosition
  layer: Layer
  image: RenderShape[]
}

export interface IEntity {
  getRenderObjects: () => RenderObject[]
  getPosition: () => EntityPosition
  setPosition: (position: EntityPosition) => IEntity
  getWorld: () => IWorld
  addEventListener: (arg: EventListenerOption) => number
  removeEventListener: (id: number) => void
}
