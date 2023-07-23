const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  waitForTimeout: 90000,
  helpers: {
    Puppeteer: {
      url: 'https://bluescapeqainterview.wordpress.com/contact/',
      show: true,
      windowSize: '1200x900',
      waitForNavigation: ['domcontentloaded', 'networkidle0'],
    },
  },
  include: {
    I: './steps_file.js',
  },
  name: 'BluescapeFormAutomation',
};
