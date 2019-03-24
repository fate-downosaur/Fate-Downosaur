import { IWorld } from '../world'

interface IRenderer {
  world: IWorld

  render(): void
}

export { IRenderer }
