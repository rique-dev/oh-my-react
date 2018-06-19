import { FormattedMessage, Helmet, Link, React, renderRoutes } from '@lib'
import Radar from '@Login/Radar'

import messages from './LoginMessages'
import s from './LoginStyle.scss'

export default ({ route }: any) => (
  <div>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <h1 className={s.h1}>
      <FormattedMessage {...messages.hello} />
    </h1>
    <li>
      <Link to={Radar.to({ id: 123 })}>com params</Link>
    </li>
    {renderRoutes(route.routes)}
  </div>
)
