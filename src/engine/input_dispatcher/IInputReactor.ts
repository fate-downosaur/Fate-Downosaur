import { Key } from './types'

export interface IInputReactor {
  react: (type: Key) => void
}
