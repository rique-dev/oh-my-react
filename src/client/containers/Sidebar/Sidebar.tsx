import {
  DrawerSidebar,
  Grid,
  ListItems,
  SearchField,
  Wrapper,
} from '@components'
import { React } from '@lib'
import { connectRoot, Props } from '@state/root'

@connectRoot()
export default class Sidebar extends React.Component {
  render(): JSX.Element {
    const { sidebar, sidebarOpenMenu } = this.props as Props

    return (
      <DrawerSidebar open={sidebar.isOpen} onClose={sidebarOpenMenu}>
        <Wrapper paddingX={12}>
          <Grid container>
            <Grid item>
              <Wrapper paddingX={8}>
                <SearchField id="search" label="Pesquisa" />
              </Wrapper>
              <ListItems
                list={[
                  {
                    text: 'Biz',
                    color: '#3f51b5',
                    icon: {
                      nameIcon: 'chat',
                    },
                  },
                  {
                    text: 'Files',
                    color: '#3f51b5',
                    icon: {
                      nameIcon: 'files',
                    },
                  },
                  {
                    text: 'My company',
                    color: '#3f51b5',
                    icon: {
                      nameIcon: 'office',
                    },
                  },
                  {
                    text: 'People',
                    color: '#d43156',
                    icon: {
                      nameIcon: 'networking',
                    },
                  },
                  {
                    text: 'Announcements',
                    color: '#d43156',
                    icon: {
                      nameIcon: 'megaphone',
                    },
                  },
                  {
                    text: 'Check-it-out',
                    color: '#d43156',
                    icon: {
                      nameIcon: 'satellite-dish',
                    },
                  },
                  {
                    text: 'Agenda',
                    color: '#d43156',
                    icon: {
                      nameIcon: 'calendar',
                    },
                  },
                  {
                    text: 'Setup',
                    color: '#d43156',
                    icon: {
                      nameIcon: 'gear',
                    },
                  },
                  {
                    text: 'Authorizations',
                    color: '#d43156',
                    icon: {
                      nameIcon: 'unlock',
                    },
                  },
                  {
                    text: 'School',
                    color: '#f99000',
                    icon: {
                      nameIcon: 'bell-ringing',
                    },
                  },
                  {
                    text: 'Games',
                    color: '#f99000',
                    icon: {
                      nameIcon: 'gamepad',
                    },
                  },
                  {
                    text: 'Planning',
                    color: '#f99000',
                    icon: {
                      nameIcon: 'notebook',
                    },
                  },
                  {
                    text: 'Analytics (BI)',
                    color: '#f99000',
                    icon: {
                      nameIcon: 'charts',
                    },
                  },
                  {
                    text: 'Ads',
                    color: '#f99000',
                    icon: {
                      nameIcon: 'refund',
                    },
                  },
                  {
                    text: 'Gamification',
                    color: '#f99000',
                    icon: {
                      nameIcon: 'prize',
                    },
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Wrapper>
      </DrawerSidebar>
    )
  }
}
