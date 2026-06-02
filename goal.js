//HTML 요소 가져옴
const goalForm = document.querySelector("#goalForm");
const goalInput = document.querySelector("#goalInput");
const goalMessage = document.querySelector("#goalMessage");
const savedGoal = localStorage.getItem("goal");
const goalText = goalMessage.querySelector("p");
const nice = document.querySelector("#nice");

//Button 정의
const clearButton = goalMessage.querySelector("#clearButton");
const editButton = goalMessage.querySelector("#editButton");
const newButton = goalMessage.querySelector("#newButton");
const checkbox = goalMessage.querySelector("#goalCheck");

//골(인풋) 표시 & 골 폼 숨김
const renderGoal = (goal) => {
  //입력 폼 숨김
  goalForm.classList.add("hidden"); // UI 표시제어
  //골 메세지 표시
  goalMessage.classList.remove("hidden");
  //골 값 표시
  goalText.innerText = goal;
};

//골 값 제출시 실행
const handleSubmit = (e) => {
  //새로고침 방지(기본 동작 실행 안됨)
  e.preventDefault();
  //골 값 저장
  localStorage.setItem("goal", goalInput.value);
  //화면에 표시
  renderGoal(goalInput.value);
};

// document.addEventListener("click", (e) => {
//   if (!goalForm.classList.contains("hidden") && !goalForm.contains
if (savedGoal) renderGoal(savedGoal);

const handleClear = () => {
  //저장값 삭제, 골 메세지 숨김, 입력 폼 보임
  localStorage.removeItem("goal");
  goalMessage.classList.add("hidden");
  goalForm.classList.remove("hidden");
  //입력값 초기화
  goalInput.value = "";
  goalText.innerText = "";
  goalText.classList.remove("line");
  //3. 체크박스 & 버튼 초기화
  checkbox.checked = false;
  editButton.classList.remove("hidden");
  newButton.classList.add("hidden");
};

const handleCheck = () => {
  //1. 체크박스 체크시
  if (checkbox.checked) {
    //취소선 표시, edit 숨김, new 표시
    goalText.classList.add("line");
    editButton.classList.add("hidden");
    newButton.classList.remove("hidden");
    //Nice메세지 표시, 3초 뒤 숨김
    nice.classList.remove("hidden");
    setTimeout(() => {
      nice.classList.add("hidden");
    }, 3000);
    //체크박스 해제시
  } else {
    // 취소선 제거, edit 표시, new 숨김
    goalText.classList.remove("line");
    editButton.classList.remove("hidden");
    newButton.classList.add("hidden");
  }
};

const handleEdit = () => {
  // 현재 저장된 골을 가져옴
  goalInput.value = localStorage.getItem("goal");
  // 입력 폼 숨김
  goalMessage.classList.add("hidden");
  // 입력 폼 표시
  goalForm.classList.remove("hidden");
};

//new 클릭 시 초기화
const handleNew = () => {
  handleClear();
};
//이벤트 리스너 연결
goalForm.addEventListener("submit", handleSubmit);
clearButton.addEventListener("click", handleClear);
checkbox.addEventListener("click", handleCheck);
editButton.addEventListener("click", handleEdit);
newButton.addEventListener("click", handleNew);