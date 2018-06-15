import { React, Link, renderRoutes, Helmet, FormattedMessage } from '@lib'
import Radar from '@Login/Radar'

import s from './LoginStyle.scss'
import messages from './LoginMessages'

export default ({ route }) => (
  <div>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <h1 className={s.h1}>
    <FormattedMessage {...messages.hello}/>
    </h1>
    <li>
      <Link to={Radar.to({ id: 123 })}>com params</Link>
    </li>
    {renderRoutes(route.routes)}
  </div>
)
