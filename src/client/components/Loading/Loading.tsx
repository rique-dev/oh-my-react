import { React, reactDelayRender } from '@lib'

export default reactDelayRender({ delay: 300 })(() => <div>Loading...</div>)
