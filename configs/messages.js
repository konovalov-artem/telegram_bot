module.exports = {
  start: 'Сообщу о новых объявлениях на самых популярных сайтах.\nДля вызова меню введите команду /menu , для начала работы нажмите "Новая подписка."',
  menu: 'Меню:',
  newsubs: 'Перейдите на один из предложенных сайтов, в поиске установите нужные фильтры и пришлите мне ссылку, а я буду искать объявления.',
  nosubs: 'У Вас пока что нет подписок.',
  prettyLink: (url, title) => `<a href="${url}">${title}</a>`,
  manyResults: (url, title) => `Ваша подписка: <a href="${url}">${title}</a> была удалена, по причине большого количества найденных объявлений, попробуйте сузить параметры поиска.`,
  delsub: 'Подписка удалена!',
  wrongUrl: {
    ria: 'Вы дали мне не верную ссылку, попробуйте еще раз, она должна быть формата:\n "https://auto.ria.com/search/..."',
    olx: 'Вы дали мне не верную ссылку, попробуйте еще раз, она должна быть формата:\n "https://rabota.ua/jobsearch/vacancy_list..."'
  },
  titleQuestion: 'Теперь дайте название этой подписке, например:',
  titleExample: {
    ria: 'Toyota Land Cruiser 200',
    olx: 'Зимняя шапка',
    rabota: 'Менеджер по продажам в Харькове'
  },
  titleAnswer: 'Начинаю присматривать варианты для Вас 😉 ',
  alreadySubs: 'У вас уже есть подписка по этой ссылке:',
  notSupported: 'В данный момент этот сервис не поддерживается'
}
