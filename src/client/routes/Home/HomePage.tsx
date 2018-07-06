import { CardSlim } from '@components'
import { Header } from '@containers'
import { bind, Fragment, Helmet, Page, React } from '@lib'
import { HomeParams } from './'

export default class HomePage extends Page<HomeParams, {}> {
  @bind
  clickCardSlim(e: React.MouseEvent<HTMLElement>): void {
    this.setState({}) // Envia para redux
  }

  render(): JSX.Element {
    return (
      <Fragment>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Header />
        <div>
          <CardSlim nameIcon="more_vert" handleClick={this.clickCardSlim} />
        </div>
      </Fragment>
    )
  }
}
