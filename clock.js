const clock = document.querySelector("h1#clock")

function getClock() {
  const date = new Date(); // 클래스 초기화
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const clockString = `${hours}:${minutes}:${seconds}`;

  clock.innerText = clockString;
}
function makeClock(time){
  return time.toString().padStart(2, "0");
}

getClock()
setInterval(getClock, 1000)