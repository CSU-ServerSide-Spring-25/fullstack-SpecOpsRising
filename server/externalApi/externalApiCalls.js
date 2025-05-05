const axios = require('axios');
 const apiKey = '166106d140224f9dbdf194302250505'
 
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
     alertsApi: async (location) => {
        return await axios.get(`http://api.weatherapi.com/v1/alerts.json?key=${apiKey}&q=${location}`)
            .then(function (response) {
                console.log(response.data);
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return{ error: "Unable to fetch alert information." }
            })
     },
     
     // add current API
     currentApi: async (location) => {
        return await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`)
            .then(function (response) {
                console.log(response.data);
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return{ error: "Unable to fetch alert information." }
            })
     }
     // documentation https://www.weatherapi.com/docs/#intro-request
 }