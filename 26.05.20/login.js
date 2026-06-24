//HTML 요소 가져옴
const loginForm = document.querySelector("#loginForm");
const loginInput = loginForm.querySelector("#loginInput");
const greeting = document.querySelector("#greeting");
const mainContents = document.querySelector("#mainContents");
//저장된 이름 있는지 확인
const savedUsername = localStorage.getItem("username");
//시간에 따라 인사말 결정
const makeGreeting = () => {
  const now = new Date().getHours();
  // 조기 리턴 방식
  if (now < 12) return "Good Morning";
  if (now < 18) return "Good Afternoon";
  return "Good Evening";
};
//인사말 만듬
const GREETING_MSG = makeGreeting();
//사용자 이름을 받아 메인으로 전환
const viewMain = (username) => {
  //인사말 설정
  greeting.innerText = `${GREETING_MSG}, ${username}.`;
  // 로그인 폼 숨김
  loginForm.classList.add("hidden");
  // 메인 컨텐츠 표시
  mainContents.classList.remove("hidden");
};
//저장된 이름이 없는 경우
if (!savedUsername) {
  //로그인 폼 표시
  loginForm.classList.remove("hidden");
  //로그인 폼 제출시
  loginForm.addEventListener("submit", (e) => {
    //새로고침 방지(기본 동작 실행 안됨)
    e.preventDefault();
    //사용자 이름 저장
    const username = loginInput.value;
    localStorage.setItem("username", username);
    //메인에 표시
    viewMain(username);
  });
  //저장된 이름이 있는 경우
} else {
  //바로 메인에 표시
  viewMain(savedUsername);
}