import { IInputDispatcher } from './IInputDispatcher'
import { IWorld } from '../world'
import { InputType } from './types'
import { IEntity } from '../entity'

type Listener = {
  id: number
  entity: IEntity
  type: InputType
}

class InputDispatcher implements IInputDispatcher {
  private world: IWorld
  private listeners: Listener[]
  private static instance: IInputDispatcher
  static listenerId = 0

  static getInstance(world: IWorld) {
    if (InputDispatcher.instance) {
      return InputDispatcher.instance
    }
    return new InputDispatcher(world)
  }

  private constructor(world: IWorld) {
    this.world = world
    this.listeners = []
    this.hookUpEventListener()
  }

  hookUpEventListener() {}

  addListener(type: InputType, entity: IEntity) {
    InputDispatcher.listenerId += 1

    const listener = {
      entity,
      type,
      id: InputDispatcher.listenerId
    }
    this.listeners.push(listener)
    return InputDispatcher.listenerId
  }

  removeListener(id: number) {
    this.listeners = this.listeners.filter((listener) => listener.id !== id)
  }
}

export { InputDispatcher }
