const {
  errorMessageFormatter,
  warnMessageFormatter,
  infoMessageFormatter,
  logMessageFormatter
} = require('./renderers')

function makeLogger({
  logMessageFormatter,
  infoMessageFormatter,
  warnMessageFormatter,
  errorMessageFormatter
}) {
  return function logger() {
    return {
      log: (message) => console.log(logMessageFormatter(message)),
      info: (message) => console.info(infoMessageFormatter(message)),
      warn: (message) => console.warn(warnMessageFormatter(message)),
      error: (message) => console.error(errorMessageFormatter(message))
    }
  }
}

const log = makeLogger({
  errorMessageFormatter,
  warnMessageFormatter,
  infoMessageFormatter,
  logMessageFormatter
})()
log.error('Error message...')
log.warn('Warn message...')
log.info('Info message...')
log.log('Log message...')

module.exports = { log }