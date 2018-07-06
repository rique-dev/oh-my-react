import { A, ButtonSuccess, Image, PasswordField, TextField } from '@components'
import { its4, itsLogo } from '@images'
import { bind, injectIntl, React } from '@lib'
import { Grid, Paper } from '@lib/material-ui'
import { FormattedMessage, InjectedIntl } from 'react-intl'
import s from './SignUp.scss'
import messages from './SignUpMessage'

interface State {
  user: string
  password: string
}

interface Props {
  intl?: InjectedIntl
}
// class Container<P, S, SS> extends React.PureComponent<P, S, SS> { }

@injectIntl()
export default class SignUp extends React.Component<Props, State> {
  componentDidMount(): void {
    this.setState({
      user: '',
      password: '',
    })
  }

  @bind
  changeFieldPassword(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      password: e.target.value,
    })
  }

  @bind
  changeFieldUser(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      user: e.target.value,
    })
  }

  @bind
  clickButtonAccess(e: React.MouseEvent<HTMLElement>): void {
    this.setState({}) // Envia para redux
  }

  render(): JSX.Element {
    const { intl } = this.props
    // const { password, user } = this.state

    const handleErrorIntl = (msg: FormattedMessage.MessageDescriptor) => {
      throw new Error(msg.defaultMessage)
    }

    const formatMessage = intl ? intl.formatMessage : handleErrorIntl

    return (
      <Paper className={s.paper}>
        <form>
          <Grid container>
            <Grid item container justify="space-between" xs={12}>
              <Grid item xs={6}>
                <Image src={its4} width={24} className={s.marginSafeLogo} />
                <Image src={itsLogo} width={99} />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="user"
                label={formatMessage(messages.user)}
                helperText="Digite seu usuário"
                // value={user}
                handleChange={this.changeFieldUser}
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordField
                id="password"
                label="Password"
                helperText="Digite sua senha"
                // value={password}
                handleChange={this.changeFieldPassword}
              />
            </Grid>
            <Grid
              item
              xs={12}
              container
              justify="flex-end"
              className={s.wrapperBtn}
            >
              <ButtonSuccess
                handleClick={this.clickButtonAccess}
                message={messages.access}
              />
            </Grid>
            <Grid item xs={12} className={s.helpLinks}>
              <A message={messages.forgotYourPassword} />
              <br />
              <A message={messages.speakWithAnAttendant} />
            </Grid>
          </Grid>
        </form>
      </Paper>
    )
  }
}
