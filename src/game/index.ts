import { World, EntityFactory, Rectangle, Pixel } from '../engine'

export function start(canvas: HTMLCanvasElement) {
  const world = new World(canvas, canvas)
  const entityFactory = new EntityFactory(world)
  const e = entityFactory.createEntity({
    position: { x: 20, y: 10 },
    layer: {
      type: 'foreground',
      index: 1
    },
    image: [
      new Pixel({ x: 20, y: 20, attributes: { color: 'red' } }),
      new Rectangle({ x: 0, y: 0, width: 20, height: 10 }),
      new Rectangle({
        x: 100,
        y: 0,
        width: 20,
        height: 40,
        attributes: { color: 'green' }
      })
    ]
  })
  world.start()
}
