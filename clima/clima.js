const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=ee8d4f7a372862486b14ad6312f13804`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}