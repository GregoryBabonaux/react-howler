let Howler

if (typeof window !== 'undefined') {
  Howler = require('howler/dist/howler.core.min.js')
}

module.exports = Howler
