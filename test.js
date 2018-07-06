const path = require('path')
const readdir = require('util').promisify(require('fs').readdir)
const webfontsGenerator = require('webfonts-generator')
const { appSrcClient } = require('./configs/paths')

const extension = extFilter => element => {
  const extName = path.extname(element)
  return extName === '.' + extFilter
}

const Main = async () => {
  const files = await readdir(`${appSrcClient}/vendors/webfont-icons/source`)
  const filesSvg = files
    .filter(extension('svg'))
    .map(file => `${appSrcClient}/vendors/webfont-icons/source/${file}`)

  webfontsGenerator({
    files: filesSvg,
    dest: `${appSrcClient}/vendors/webfont-icons`,
  })
}

Main()
