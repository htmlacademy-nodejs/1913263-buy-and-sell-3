'use strict';

const message = `
Программа запускает http-сервер и формирует файл с данными для API.
\tГайд:
\tservice.js <command>

\tКоманды:
\t--version:\t\tвыводит номер версии
\t--help:\t\t\tпечатает этот текст
\t--generate <count>\tформирует файл mocks.json
`;

module.exports = {
  name: `--help`,
  run() {
    console.info(message);
    process.exit(0);
  },
};
