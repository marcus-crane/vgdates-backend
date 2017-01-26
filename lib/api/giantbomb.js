const axios = require('axios')

const queryByName = (title) => {
  return axios.get(`http://www.giantbomb.com/api/search?api_key=${process.env.GIANT_BOMB_API_KEY}&format=json&query=${title}&resources=game&field_list=deck,name,id,image,original_release_date`, {
    headers: {
      'User-Agent': 'VGDates/0.3 (+http://vgdat.es)'
    }
  })
}

const queryByID = (gameID) => {
  return axios.get(`http://www.giantbomb.com/api/game/3030-${gameID}/?api_key=${process.env.GIANT_BOMB_API_KEY}&format=json&field_list=date_last_updated,deck,developers,expected_release_day,expected_release_month,expected_release_quarter,expected_release_year,id,image,name,platforms,publishers,original_release_date,releases`, {
    headers: {
      'User-Agent': 'VGDates/0.3 (+http://vgdat.es)'
    }
  })
}

const queryRelease = (gameID) => {
  return axios.get(`http://www.giantbomb.com/api/release/3050-${gameID}/?api_key=${process.env.GIANT_BOMB_API_KEY}&format=json&field_list=date_last_updated,name,platform,region,developers,publishers,expected_release_day,expected_release_month,expected_release_quarter,expected_release_year`, {
    headers: {
      'User-Agent': 'VGDates/0.3 (+http://vgdat.es)'
    }
  })
}

module.exports = {
  queryByName,
  queryByID,
  queryRelease
}