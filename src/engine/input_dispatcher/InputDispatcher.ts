import { IInputDispatcher } from './IInputDispatcher'
import { IWorld } from '../world'
import { IEntity } from '../entity'
import { ListenerAction, Listener } from './'

type DispatcherListener = Listener & {
  id: number
}

class InputDispatcher implements IInputDispatcher {
  private world: IWorld
  private listeners: DispatcherListener[]
  private static instance: IInputDispatcher | undefined
  static listenerId = 0

  static getInstance() {
    return InputDispatcher.instance
  }

  static initialize(world: IWorld) {
    InputDispatcher.instance = new InputDispatcher(world)
    return InputDispatcher.instance
  }

  private constructor(world: IWorld) {
    this.world = world
    this.listeners = []
    this.listener = this.listener.bind(this)
    this.hookUpEventListener(world.getInputSource())
  }

  private hookUpEventListener(container: HTMLElement) {
    // MTODO: fix this
    window.addEventListener('keypress', this.listener)
  }

  private listener(event: KeyboardEvent) {
    this.listeners.forEach((listener) => {
      if (listener.key.toLowerCase() === event.code.toLowerCase()) {
        this.dispatch(event, listener)
      }
    })
  }

  private dispatch(event: KeyboardEvent, listener: Listener) {
    listener.action({ event })
  }

  addListener(listener: { key: Key; entity: IEntity; action: ListenerAction }) {
    InputDispatcher.listenerId += 1
    ;(<DispatcherListener>listener).id = InputDispatcher.listenerId
    this.listeners.push(listener as DispatcherListener)
    return InputDispatcher.listenerId
  }

  removeListener(id: number) {
    this.listeners = this.listeners.filter((listener) => listener.id !== id)
  }
}

export { InputDispatcher }
