const axios = require('axios');
 const apiKey = 'YouApiKey'
 
 module.exports = {
     forecastApi: async (location, days) => {
         return await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=${days}&aqi=no&alerts=no`)
             .then(function (response) {
                return response.data;
             })
             .catch(function (error) {
                 console.log(error);
                 return{ error: "Unable to fetch forecast information." }
             })
     },
     // add alert API call hint: change forecast.json to match api wanted 
     // add current API
     // documentation https://www.weatherapi.com/docs/#intro-request
 }