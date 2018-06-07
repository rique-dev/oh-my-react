import * as React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import cx from 'classnames'

import Login from '@Login'
import s from './HomeStyle.scss'
import { PORT } from '@constants'
import messages from './HomeMessages'
import { Page } from '@lib'
import { HomeParams } from './'
import { connectCounter, Props as CounterProps } from '@State/counter'

const styleHover = cx({
  [s.someClass]: false,
  [s.test]: false,
})

interface HomeProps extends CounterProps {
  title: string
}
@connectCounter()
export default class HomePage extends Page<HomeParams, HomeProps> {
  render() {
    const { count, isPrime, increment, decrement, title, match } = this.props
    return (
      <div className={styleHover}>
        {JSON.stringify(isPrime)}
        <br />
        é primo? {isPrime}
        <br />
        Current counter value: {count}
        <div><button onClick={e => increment({ count: 5 })}>Increment</button></div>
        <div><button onClick={e => decrement({ count: 10 })}>Decrement</button></div>
        <h1 className={s.someClassAction}>Home {PORT.DEVELOPMENT}</h1>
        <h2 className={s.someClassAction}>
          <div className={s.someClassAction}>qwe</div>
        </h2>
        <FormattedMessage {...messages.hello} />
        <li>
          <Link to={Login.path}>Login</Link>
        </li>
      </div>
    )
  }
}
