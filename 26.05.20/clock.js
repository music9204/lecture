//HTML 요소 가져옴
const clock = document.querySelector("h1#clock");
//숫자 받아서 2자리로 바꿈
const formatTime = (time) => time.toString().padStart(2, "0");
// 시간취득함수
function getClock() {
  // 현재 시간 정보
  const date = new Date(); //클래스 초기화
  // 시간, 분, 초 가져와서 2자리수로 맞춤
  const hours = formatTime(date.getHours());
  const minutes = formatTime(date.getMinutes());
  const seconds = formatTime(date.getSeconds());
  //시:분:초의 형식을 만듬
  const clockString = `${hours}:${minutes}:${seconds}`;
  //완성본을 h1에 표시
  clock.innerText = clockString;
}
// 즉시시전
getClock();
//1초마다 반복실행
setInterval(getClock, 1000);
