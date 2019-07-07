import { IEntity } from '../entity'

export type ListenerAction = ({ event }: { event: KeyboardEvent }) => void
export type Listener = {
  entity: IEntity
  key: Key
  action: ListenerAction
}
export interface IInputDispatcher {
  addListener: (listen: Listener) => number
  removeListener: (id: number) => void
}
