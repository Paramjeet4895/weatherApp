const request = require('request')

const forecast= ( latitude,longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/50cb484d4c23a5c5220135d4470c6ec1/'+latitude+','+longitude;
    request({ url, json: true }, (error, {body}) => {
        if (error) {
        callback('Unable to Connect', undefined)
      }
      else if (body.error) {
        callback('Unable to find location', undefined)
      }
      else {
        callback(undefined,body.daily.data[0].summary+'It is '+body.currently.temperature+' degrees out .There is '+body.currently.precipProbability+'% chance of rain.')
        
      }
    })
  }
   module.exports=forecast