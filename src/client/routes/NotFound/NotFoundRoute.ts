import { Loading } from '@components'
import { reactImportedComponent } from '@lib'

const component = reactImportedComponent(() => import('./NotFoundPage'), {
  LoadingComponent: Loading,
})

export default {
  component,
  path: '*',
  exact: true,
}
