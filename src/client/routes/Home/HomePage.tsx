import {
  React,
  Page,
  FormattedMessage,
  Link,
  classNames,
  moment,
  Helmet,
} from '@lib'

import Login from '@Login'
import { PORT } from '@constants'
import { connectCounter, Props as CounterProps } from '@State/counter'

import style from './HomeStyle.scss'
import messages from './HomeMessages'
import { HomeParams } from './'

const styleHover = classNames({
  [style.someClass]: false,
  [style.test]: false,
})

interface HomeProps extends CounterProps {
  title: string
}
@connectCounter()
export default class HomePage extends Page<HomeParams, HomeProps> {
  render() {
    const {
      count,
      isPrime,
      incrementComplexy,
      increment,
      decrement,
      match,
      list,
    } = this.props

    return (
      <div className={styleHover}>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Home application" />
        </Helmet>
        {JSON.stringify(match)}
        <br />
        é primo? {JSON.stringify(isPrime)}
        <br />
        list: {JSON.stringify(list)}
        <br />
        Current counter value: {count}
        <div><button onClick={e => list.pop()}>list pop</button></div>
        <div><button onClick={e => increment({ count: 1 })}>Increment</button></div>
        <div><button onClick={e => incrementComplexy({ count: 1 })}>incrementComplexy</button></div>
        <div><button onClick={e => decrement({ count: 10 })}>Decrement</button></div>
        <h1 className={style.someClassAction}>Home {PORT.DEVELOPMENT}</h1>
        <h2 className={style.someClassAction}>
          <div className={style.someClassAction}>{moment(new Date()).format()}</div>
        </h2>
        <FormattedMessage {...messages.helloWorld} />
        <li>
          <Link to={Login.path}>Login</Link>
        </li>
      </div>
    )
  }
}
