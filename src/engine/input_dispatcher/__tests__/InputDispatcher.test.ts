import { InputDispatcher } from '../'
import { IEntity } from '../../entity'
const godObject = {} as any
describe('InputDispatcher', () => {
  describe('hookUpEventListener()', () => {
    it('should call hookUpEventListener() when initialized', () => {
      const spy = jest.fn().mockReturnValue({ addEventListener: () => {} })
      InputDispatcher.initialize({ getInputSource: spy } as any)
      expect(spy).toBeCalled()
    })
  })

  describe('addListener()', () => {
    it('should have listener in list when added', () => {
      InputDispatcher.initialize({
        getInputSource: () => ({
          addEventListener: () => {}
        })
      } as any)
      const inputDispatcher = InputDispatcher.getInstance()
      inputDispatcher.addListener({
        key: 'space',
        action: godObject,
        entity: godObject
      })

      expect((<any>inputDispatcher).listeners.length).toBe(1)
    })
  })

  describe('removeListener()', () => {
    it('should remove listener in list when call remove', () => {
      InputDispatcher.initialize({
        getInputSource: () => ({
          addEventListener: () => {}
        })
      } as any)
      const inputDispatcher = InputDispatcher.getInstance()
      const id = inputDispatcher.addListener({
        key: 'space',
        action: godObject,
        entity: godObject
      })
      inputDispatcher.removeListener(id)

      expect((<any>inputDispatcher).listeners.length).toBe(0)
    })
  })

  describe('getInstance()', () => {
    it('should return same instance', () => {
      InputDispatcher.initialize({
        getInputSource: () => ({
          addEventListener: () => {}
        })
      } as any)
      const inputDispatcher = InputDispatcher.getInstance()
      const inputDispatcher2 = InputDispatcher.getInstance()
      expect(inputDispatcher).toEqual(inputDispatcher2)
    })
  })
})
