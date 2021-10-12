const rp = require('request-promise')

module.exports = async function(city = '') {
  if (!city) {
    throw new Error('Имя города не может быть пустым')
  }

  const KEY = 'e0a7f8029be91ddd3754c562b3b8afc7'  //константа с ключем
  const uri = 'http://api.openweathermap.org/data/2.5/weather' //скопируем пример запроса из документации openweathermap за исключением ?q=London&appid={API key}

  const options = {       //объект конфигурации для запроса
    uri,
    qs: {
      appid: KEY,
      q: city
    },
    json: true
  }

  const response = await rp(options)
  console.log(response)
}