import importedComponent from 'react-imported-component'
import { Loading } from '@components'
import Radar from '@Login/Radar'

const component = importedComponent(() => import('./LoginPage'), {
  LoadingComponent: Loading,
})

export default {
  component,
  path: '/login',
  routes: [
    Radar,
  ],
}
