import { EntityFactory } from '../'
import { IWorld } from '../../world'
import { RenderObject } from '../IEntity'

const factory = new EntityFactory({} as IWorld)
function fakeEntity(arg: any) {
  return factory.createEntity(arg as RenderObject)
}
function fakeEntityGroup(position: any) {
  return factory.createEntityGroup(position)
}

describe('addEntity()', () => {
  const entity: any = fakeEntity({ position: { x: 0, y: 0 } })
  const entityGroup = fakeEntityGroup({ x: 4, y: 4 })
  entityGroup.addEntity(entity)
  it('should contain entity', () => {
    expect(entityGroup.getEntities()[0]).toBe(entity)
    expect(entityGroup.getEntities().length).toBe(1)
  })
})

describe('getRenderObjects()', () => {
  it('should apply offset to renderObjects when called', () => {
    const entity: any = fakeEntity({ position: { x: 0, y: 0 } })
    const entityGroup = fakeEntityGroup({ x: 4, y: 4 })
    entityGroup.addEntity(entity)
    expect(entityGroup.getRenderObjects()[0].position).toEqual({ x: 0, y: 0 })
    entityGroup.setPosition({ x: 8, y: 8 })
    expect(entityGroup.getRenderObjects()[0].position).toEqual({ x: 4, y: 4 })
  })

  it('should get correct renderObjects when nested entityGroup together', () => {
    const entity: any = fakeEntity({ position: { x: 0, y: 0 } })
    const entityGroupInner = fakeEntityGroup({ x: 4, y: 4 })
    entityGroupInner.addEntity(entity)

    const entity2: any = fakeEntity({ position: { x: 0, y: 0 } })
    const entityGroupOuter = fakeEntityGroup({ x: 4, y: 4 })
    entityGroupOuter.addEntity(entityGroupInner)
    entityGroupOuter.addEntity(entity2)

    expect(entityGroupOuter.getRenderObjects().length).toEqual(2)
    expect(entityGroupOuter.getRenderObjects()[0].position).toEqual({
      x: 0,
      y: 0
    })

    entityGroupOuter.setPosition({ x: 8, y: 8 })
    expect(entityGroupOuter.getRenderObjects()[0].position).toEqual({
      x: 4,
      y: 4
    })
    expect(entityGroupOuter.getRenderObjects()[1].position).toEqual({
      x: 4,
      y: 4
    })

    entityGroupInner.setPosition({ x: 4, y: 5 })
    expect(entityGroupOuter.getRenderObjects()[0].position).toEqual({
      x: 4,
      y: 5
    })
    expect(entityGroupOuter.getRenderObjects()[1].position).toEqual({
      x: 4,
      y: 4
    })
  })
})
