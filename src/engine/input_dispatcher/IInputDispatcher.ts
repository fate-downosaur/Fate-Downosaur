import { InputType } from './'
import { IEntity } from '../entity'

export interface IInputDispatcher {
  addListener: (type: InputType, entity: IEntity) => number
  removeListener: (id: number) => void
}
