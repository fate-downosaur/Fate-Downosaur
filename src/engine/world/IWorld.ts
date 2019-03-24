import { IRenderer } from '../renderer'
import { IInputReactor } from '../input_reactor'
import { ICollisionDetector } from '../collision_detector'
import { IEntity } from '../entity'

interface IWorld {
  renderer: IRenderer
  inputReactor: IInputReactor
  collisionDetector: ICollisionDetector
  entities: IEntity[]
}

export { IWorld }
