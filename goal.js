const goalForm = document.querySelector("#goalForm");
const goalInput = document.querySelector("#goalMessage");

const goalMessage = document.querySelector("#goalMessage");

const savedGoal = localStorage.getItem("goal")

const renderGoal = (goal) => {
// UI 표시제어
goalForm.classList.add("hidden");
goalMessage.classList.remove("hidden");
// 인풋 값 표시
goalMessage.querySelector("p").innerText = goal;
}
if(savedGoal){
renderGoal(savedGoal)
}

// 어떤 이벤트가 발화 -> onSubmit / handleSubmit
const handleSubmit = (e) => {
e.preventDefault();
const goal = goalInput.value;
// 인풋 값 저장
localStorage.setItem("goal", goalInput.value)

renderGoal(goal);
}

const handleClear = () => {
  localStorage.removeItem("goal");
  goalMessage.classList.add("hidden");
  goalForm.classList.remove("hidden");
}

const handleCheck = () => {
  const nice = document.querySelector("#nice").classList;
  const goalText = goalMessage.querySelector("p");
  goalMessage.querySelector("p").classList.toggle("line")


  if(goalText.classList.contains("line")){
    nice.classList.remove("hidden");
    setTimeout(() => {nice.classList.add("hidden")}, 3000);
  }
}

goalForm.addEventListener("submit", handleSubmit)
goalMessage.querySelector("button").addEventListener("click", handleClear)
goalMessage.querySelector("input").addEventListener("click", handleCheck)


// if (!savedGoal) {
//   goalInput.classList.remove("hidden");
//   goalForm.classList.remove("hidden");
//   todoList.classList.add("hidden");
//   clearButton.classList.add('hidden');
//   goalForm.addEventListener("submit", () => {
//     const goalValue = goalInput.value;
//     goalMessage.innerText = goalValue;
//     goalInput.classList.add("hidden");
//     goalForm.classList.add("hidden");
//     todoList.classList.remove("hidden");
//     clearButton.classList.remove('hidden');
//     localStorage.setItem("goal", goalValue);
//   });
// } 
// else {
//   goalInput.classList.add("hidden");
//   goalForm.classList.add("hidden");
//   todoList.classList.remove("hidden");
//   clearButton.classList.remove('hidden');
//   goalMessage.innerText = savedGoal;
// }