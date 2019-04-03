import { InputDispatcher } from '../'
import { IEntity } from '../../entity'
describe('addListener() & removeListener()', () => {
  it('should have listener in list when added', () => {
    const inputDispatcher = InputDispatcher.getInstance({} as any)
    const entity = {} as IEntity
    inputDispatcher.addListener('space', entity)

    expect((<any>inputDispatcher).listeners.length).toBe(1)
  })

  it('should remove listener in list when call remove', () => {
    const inputDispatcher = InputDispatcher.getInstance({} as any)
    const entity = {} as IEntity
    const id = inputDispatcher.addListener('space', entity)
    inputDispatcher.removeListener(id)

    expect((<any>inputDispatcher).listeners.length).toBe(0)
  })
})
