import {
  Avatar,
  IconButton,
  IconButtonList,
  IconButtonListProps,
  LogoIts4,
} from '@components'
import Home from '@Home'
import { luiz } from '@images'
import { bind, Link, React } from '@lib'
import { Grid } from '@lib/material-ui'
import s from './Header.scss'

interface HeaderState {
  itemsToAccess: IconButtonListProps
}

export interface HeaderProps {
  menuIsOpen?: boolean
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
  componentWillMount(): void {
    this.setState({
      itemsToAccess: {
        list: [
          {
            handleClick: this.handleClickIconMock,
            nameIcon: 'chat-bubbles',
            badgeContent: 7,
            color: '#fff',
          },
          {
            handleClick: this.handleClickIconMock,
            nameIcon: 'bell-ringing',
            badgeContent: 4,
            color: '#fff',
          },
          {
            handleClick: this.handleClickIconMock,
            nameIcon: 'siren-alert',
            badgeContent: 12,
            color: '#fff',
          },
          {
            handleClick: this.handleClickIconMock,
            nameIcon: 'gamepad',
            badgeContent: 93,
            color: '#fff',
          },
        ],
      },
    })
  }

  @bind
  clickButtonMenu(e: React.MouseEvent<HTMLElement>): void {
    this.setState({}) // Envia para redux
  }

  handleClickIconMock(): void {
    this.setState({})
  }

  render(): JSX.Element {
    return (
      <Grid
        container
        justify="space-between"
        wrap="nowrap"
        direction="row"
        className={s.scope}
      >
        <Grid item container wrap="nowrap" xs={2}>
          <Grid item>
            <div className={s.menu}>
              <IconButton
                handleClick={this.clickButtonMenu}
                color="#fff"
                nameIcon="menu"
              />
            </div>
          </Grid>
          <Grid item>
            <div className={s.logo}>
              <Link to={Home.path}>
                <LogoIts4 color="white" />
              </Link>
            </div>
          </Grid>
        </Grid>
        <Grid item container justify="flex-end" xs={10}>
          <Grid item xs={11} container justify="flex-end" alignItems="center">
            <IconButtonList list={this.state.itemsToAccess.list} />
          </Grid>
          <Grid item>
            <div className={s.wrapperAvatar}>
              <Avatar className={s.avatar} src={luiz.src} alt={luiz.alt} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
