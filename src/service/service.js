'use strict';

const cli = require(`./cli`);

const flag = process.argv[2];

if (flag === `--help` || !flag) {
  cli[`--help`].run();
} else {
  cli[flag].run();
}
