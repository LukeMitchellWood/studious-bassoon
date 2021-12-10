const ansiCodes = {
  reset: '\x1b[0m',
  style: {
    italic: '\x1b[3m',
    bold: '\x1b[1m',
  },
  fg: {
    red: '\x1b[38;5;160m',
    orange: '\x1b[38;5;208m',
    blue: '\x1b[38;5;39m',
    grey: '\x1b[38;5;240m'
  },
  bg: {
    red: '\x1b[48;5;160m',
    orange: '\x1b[48;5;208m',
    blue: '\x1b[48;5;39m',
    grey: '\x1b[48;5;240m'      
  }
}

module.exports = { ansiCodes };