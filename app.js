const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// const url = 'https://api.darksky.net/forecast/50cb484d4c23a5c5220135d4470c6ec1/37.8267,-122.4233'
// // const url = 'https://api.darksky.net/forecast/50cb484d4c23a5c5220135d4470c6ec1/37.8267'

// request({ url: url}, (error, response) => {
//   const data = JSON.parse(response.body)
//   if (error) {
//     console.log('Unable to connect')
//   }
//   else if(data.error){
//     console.log('Unable to find location')
//   }
//   else {
//     //console.log(response)
//     //console.log(data)
//     //console.log(data.currently)
//     //console.log(data.currently.temperature)
//     console.log(`${data.daily.data[0].summary} It is ${data.currently.temperature} degrees out .There is ${data.currently.precipProbability}% chance of rain.`)

//   }

// })




// ///Geocoding /// user address--> api conversion to lat/long --> another api for getting weather

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/starbucks.json?bbox=-77.083056,38.908611,-76.997778,38.959167&access_token=pk.eyJ1IjoicGFyYW00ODk1IiwiYSI6ImNrMXFicjF6bzB5anAzb29pbHV1cHVkenoifQ.LDOU0dBsmKlOFKnkvsh6aA';
// //const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12wdf.json?bbox=-77.083056,38.908611,-76.997778,38.959167&access_token=pk.eyJ1IjoicGFyYW00ODk1IiwiYSI6ImNrMXFicjF6bzB5anAzb29pbHV1cHVkenoifQ.LDOU0dBsmKlOFKnkvsh6aA';
// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect')
//   }
//   else if (response.body.features.length === 0) {
//     console.log('Unable to find location')
//   }
//   else {
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log(latitude, longitude)
//   }
// })


///////////////////////////////////////////////
/////////////CALLS TO UTILS FILES /////////////
///////////////////////////////////////////////

// geocode('Philadelphia',(error, data) => {
//   console.log('Error', error)
//   console.log('Data', data)
// })

/////////CALBACK CHAINING///////////////
// geocode('Philadelphia New York', (error, data) => {
//   console.log('Error', error)
//   console.log('Data', data)
//   forecast(data.latitude, data.longitude, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })
// })
const address=process.argv[2]
if(!address){
console.log('Please provide address')
}else{
  geocode(address,(error, {latitude,longitude,location}) => {
    if(error){
      return console.log('Error', error)
    }
    else{
    forecast(latitude, longitude, (error, fcdata) => {
      if(error){
        return console.log('Error', error)
      }
      else{
      console.log(location)
      console.log(fcdata)
    }})
  }
  })
}


// forecast(-75.7088 ,44.1545,(error,data) =>{
//   console.log('Error', error)
//   console.log('Data', data)
// })
// forecast('-75.7088 ',44.1545,(error,data) =>{
//   console.log('Error', error)
//   console.log('Data', data)
// })

