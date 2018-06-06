import { Loading } from '@components'
import reactImportedComponent from 'react-imported-component'

const component = reactImportedComponent(() => import('./NotFoundPage'), {
  LoadingComponent: Loading,
})

export default {
  component,
  path: '*',
  exact: true,
}
