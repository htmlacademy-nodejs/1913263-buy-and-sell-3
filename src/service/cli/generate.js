'use strict';

const fs = require(`fs`);
const {getRandomInt, shuffle} = require(`../../utils`);

const DEFAULT_COUNT = 1;
const MAX_COUNT = 1000;
const TYPES = [`offer`, `sale`];
const SUM = {MIN: 1000, MAX: 100000};
const PICTURES = {MIN: 1, MAX: 16};
const CATEGORIES = [`Книги`, `Разное`, `Посуда`, `Игры`, `Животные`, `Журналы`];
const TITLES = [
  `Продам книги Стивена Кинга.`,
  `Продам новую приставку Sony Playstation 5.`,
  `Продам отличную подборку фильмов на VHS.`,
  `Куплю антиквариат.`,
  `Куплю породистого кота.`,
  `Продам коллекцию журналов «Огонёк».`,
  `Отдам в хорошие руки подшивку «Мурзилка».`,
  `Продам советскую посуду. Почти не разбита.`,
  `Куплю детские санки.`,
];
const DESCRIPTIONS = [
  `Товар в отличном состоянии.`,
  `Пользовались бережно и только по большим праздникам.`,
  `Продаю с болью в сердце...`,
  `Бонусом отдам все аксессуары.`,
  `Даю недельную гарантию.`,
  `Если товар не понравится — верну всё до последней копейки.`,
  `Это настоящая находка для коллекционера!`,
  `Если найдёте дешевле — сброшу цену.`,
  `Таких предложений больше нет!`,
  `Две страницы заляпаны свежим кофе.`,
  `При покупке с меня бесплатная доставка в черте города.`,
  `Кажется, что это хрупкая вещь.`,
  `Мой дед не мог её сломать.`,
  `Кому нужен этот новый телефон, если тут такое...`,
  `Не пытайтесь торговаться. Цену вещам я знаю.`,
];

const generate = () => {
  const count = parseInt(process.argv[3], 10) || DEFAULT_COUNT;

  if (count > MAX_COUNT) {
    console.info(`Не больше 1000 объявлений`);
    process.exit(1);
  }

  const result = Array(count)
    .fill({})
    .map(() => ({
      type: TYPES[getRandomInt(0, 1)],
      title: TITLES[getRandomInt(0, TITLES.length - 1)],
      description: shuffle(DESCRIPTIONS).slice(0, getRandomInt(1, 5)).join(` `),
      sum: getRandomInt(SUM.MIN, SUM.MAX),
      picture: `item${getRandomInt(PICTURES.MIN, PICTURES.MAX)}.jpg`,
      category: shuffle(CATEGORIES).slice(0, getRandomInt(1, CATEGORIES.length - 1)),
    }));

  const data = JSON.stringify(result, ` `, 2);

  fs.writeFile(`mocks.json`, data, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.info(`Operation success. File created.`);
    process.exit(0);
  });
};

module.exports = {
  name: `--generate`,
  run() {
    generate();
  },
};
