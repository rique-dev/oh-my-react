const exec = require('./lib/exec')
const watch = require('node-watch')
const { appDirI18n, appSrcClient } = require('./../configs/paths')

const options = {
  recursive: true,
  filter: /\.*Messages.ts$/
}

const callback = async (evt, fileChange) => {
  try {
    exec(`extract-messages -l=pt,en -o src/client/translations/extracted -d pt --flat false 'src/client/**/*Messages.ts'`)
    console.log(`Update file translate ${fileChange.split('/').pop()}`)
  } catch (err) {
    console.log(err)
  }
}

watch(appSrcClient, options, callback)
