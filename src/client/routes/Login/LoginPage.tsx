import { React, Link, renderRoutes } from '@lib'
import Radar from '@Login/Radar'

import s from './LoginStyle.scss'

export default ({ route }) => (
  <div>
    <h1 className={s.h1}>Login</h1>
    <li>
      <Link to={Radar.to({ id: 123 })}>com params</Link>
    </li>
    {renderRoutes(route.routes)}
  </div>
)
