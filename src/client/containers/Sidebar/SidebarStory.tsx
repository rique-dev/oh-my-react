import { Bootstrap } from '@containers/Bootstrap'
import { connectRoot, Props } from '@state/root'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Sidebar from './Sidebar'

@connectRoot()
class SidebarStory extends React.Component {
  componentDidMount(): void {
    const { sidebarOpenMenu } = this.props as Props

    sidebarOpenMenu()
  }

  render(): JSX.Element {
    const { sidebarOpenMenu } = this.props as Props

    return (
      <div>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            sidebarOpenMenu()
          }
        >
          Abrir/Fechar
        </button>
        <Sidebar />
      </div>
    )
  }
}

storiesOf('containers|Navigation', module).add('Sidebar', () => (
  <Bootstrap isStorybook>
    <SidebarStory />
  </Bootstrap>
))
