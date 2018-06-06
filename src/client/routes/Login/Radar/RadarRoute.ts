import importedComponent from 'react-imported-component'
import { Loading } from '@components'
import { toPath } from '@lib'
import { Params } from '.'

const component = importedComponent(() => import('./RadarPage'), {
  LoadingComponent: Loading,
})

const path = '/login/radar/:id?'

export default {
  path,
  component,
  to: toPath<Params>(path),
  exact: true,
}
