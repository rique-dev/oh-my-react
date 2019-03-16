import {
  Avatar,
  HamburgerMenu,
  IconButtonList,
  IconButtonListProps,
  LogoIts4,
} from '@components'
import { luiz } from '@images'
import { React } from '@lib'
import { Grid } from '@lib/material-ui'
import { connectRoot, Props } from '@state/root'
import s from './Header.scss'

interface HeaderState {
  itemsToAccess: IconButtonListProps
}

@connectRoot()
export default class Header extends React.Component<{}, HeaderState> {
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
            badgeContent: 40,
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
            badgeContent: 100,
            color: '#fff',
          },
        ],
      },
    })
  }

  handleClickIconMock(): void {
    this.setState({})
  }

  render(): JSX.Element {
    const { sidebarOpenMenu, sidebar } = this.props as Props

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
              <HamburgerMenu
                isOpen={sidebar.isOpen}
                handleClick={sidebarOpenMenu}
              />
            </div>
          </Grid>
          <Grid item>
            <div className={s.logo}>
              <LogoIts4 color="white" />
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
