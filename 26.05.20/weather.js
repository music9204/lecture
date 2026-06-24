const weather = document.querySelector("#weather")

// API => 리퀘스트를 던지는 방법을 기록해놓은 것
const API_KEY ="7455df6b257f8ddc6557c2a9395e40c0"

const handleSuccess = (position) => {
  const lat = position.coords.latitude
  const lon = position.coords.longitude

  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  console.log(lat, lon)

  fetch(URL).then((response)=> {
    return response.json()
  }).then((data)=>{
    console.log(data.main.temp)
    weather.innerText = `${Math.round(data.main.temp)}℃`;
  })
}

const handleError = (error) => {
  console.log(error.code, error.message)
  if(error.code == 1){
    weather.innerText = "유저가 위치정보 취득을 거부했습니다."
  }
}
navigator.geolocation.getCurrentPosition(handleSuccess,handleError)