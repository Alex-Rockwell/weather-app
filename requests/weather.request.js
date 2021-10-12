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
      q: city,
      units: 'metric'
    },
    json: true
  }

  try {
    const data = await rp(options)
    const celsius = (Math.round(data.main.temp*10))/10
    return {
      weather: `${data.name}: ${celsius}`,
      error: null
    }
  } catch (error) {
    return {
      weather: null,
      error: error.error.message
    }
  }
}