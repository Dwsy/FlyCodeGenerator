import { createDiscreteApi } from 'naive-ui/es/discrete/src/discrete'

export const { message, notification, dialog, loadingBar } = createDiscreteApi([
  'message',
  'dialog',
  'notification',
  'loadingBar'
])
