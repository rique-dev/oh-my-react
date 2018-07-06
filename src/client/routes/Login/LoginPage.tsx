import { Background } from '@components'
import { SignUp } from '@containers'
import { Fragment, Helmet, React } from '@lib'

export default ({ route }: any) => (
  <Fragment>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <Background type="Shape">
      <SignUp />
    </Background>
  </Fragment>
)
