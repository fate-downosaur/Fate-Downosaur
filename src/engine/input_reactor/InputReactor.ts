import { IInputReactor } from './IInputReactor'
import { IWorld } from '../world'

class InputReactor implements IInputReactor {
  world: IWorld

  constructor(world: IWorld) {
    this.world = world
  }
}

export { InputReactor }
