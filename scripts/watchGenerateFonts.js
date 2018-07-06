const exec = require('./lib/exec')
const watch = require('node-watch')
const { appSrcClient } = require('./../configs/paths')

const options = {
  recursive: true,
  filter: /\/source\/.*\.svg$/,
}

const callback = async (evt, fileChange) => {
  try {
    exec(
      `node node_modules/icon-font-generator/bin/icon-font-generator src/client/vendors/webfont-icons/source/*.svg -o src/client/vendors/webfont-icons`,
    )
  } catch (err) {
    console.log(err)
  }
}

watch(appSrcClient, options, callback)
