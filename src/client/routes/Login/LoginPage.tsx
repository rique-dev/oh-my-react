import * as React from 'react'
import { Link } from 'react-router-dom'

import Radar from '@Login/Radar'

import s from './LoginStyle.scss'
import { renderRoutes } from 'react-router-config'

export default ({ route }) => (
  <div>
    <h1 className={s.h1}>Login</h1>
    <li>
      <Link to={Radar.to({ id: 123 })}>com params</Link>
    </li>
    {renderRoutes(route.routes)}
  </div>
)
