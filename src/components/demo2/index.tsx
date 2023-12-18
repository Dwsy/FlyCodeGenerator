import { useFlyStore } from '../../store/flyStore'

export const helloTsx = () => {
  const flyStore = useFlyStore()
  return h(<h2>Hello TSX</h2>)
}
