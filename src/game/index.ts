import { World, EntityFactory } from '../engine'
export function start(canvas: HTMLCanvasElement) {
  const world = new World(canvas, canvas)
  const entityFactory = new EntityFactory(world)
  const e = entityFactory.createEntity({
    position: { x: 0, y: 0 },
    attributes: { color: 'red' },
    layer: {
      type: 'foreground',
      index: 1
    },
    image: [
      { x: 20, y: 20, type: 'pixel' },
      { type: 'rectangle', x: 0, y: 0, width: 10, height: 10 }
    ]
  })
  world.start()
}
