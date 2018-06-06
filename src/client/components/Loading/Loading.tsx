import * as React from 'react'
import reactDelayRender from 'react-delay-render'

export default reactDelayRender({ delay: 300 })(() => <div>Loading...</div>)
