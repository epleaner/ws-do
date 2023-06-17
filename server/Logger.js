class Logger {
  constructor() {
    this.max = null;

    try {
      this.max = require('max-api');
      console.log('Max loaded');
    } catch (e) {
      console.log('No max');
    }
  }

  log(...message) {
    if (this.max) this.max.post(`wss: ${message}`);
    console.log(...message);
  }
}

module.exports = Logger;
