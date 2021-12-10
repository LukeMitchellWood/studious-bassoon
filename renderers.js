const { ansiCodes } = require('./ansi_codes')

baseText = (content) => `${content}${ansiCodes.reset}`
boldText = (content) => `${ansiCodes.style.bold}${baseText(content)}`
italicText = (content) => `${ansiCodes.style.italic}${baseText(content)}`
errorMessageFormatter = (text) => `${ansiCodes.fg.red}${boldText(text)}`
warnMessageFormatter = (text) => `${ansiCodes.fg.orange}${italicText(text)}`
infoMessageFormatter = (text) => `${ansiCodes.fg.blue}${italicText(text)}`
logMessageFormatter = (text) => `${ansiCodes.fg.grey}${italicText(text)}`

module.exports = {
  errorMessageFormatter,
  warnMessageFormatter,
  infoMessageFormatter,
  logMessageFormatter
}