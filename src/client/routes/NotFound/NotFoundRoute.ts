import { reactImportedComponent } from '@lib'
import { Loading } from '@components'

const component = reactImportedComponent(() => import('./NotFoundPage'), {
  LoadingComponent: Loading,
})

export default {
  component,
  path: '*',
  exact: true,
}
