import * as React from 'react'
import { Link } from 'react-router-dom'

import Home from '@Home'

export default () => (
  <div>
    <Link to={Home.path}>Home</Link>
  </div>
)
