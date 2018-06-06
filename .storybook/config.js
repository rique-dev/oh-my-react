import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

setOptions({
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
})

const req = require.context('../', true, /\Story.tsx?$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
