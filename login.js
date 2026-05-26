const loginForm = document.querySelector("#loginForm");
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector("#greeting");
const mainContents = document.querySelector("#main");

const savedUsername = localStorage.getItem("username");

const GREETING_MSG = 'Good evening,';

const makeGreeting = () => {
  const now = new Date().getHours();
// 조기리턴
if(now < 12) return "Good Morning"
if(now < 18) return "Good Afternoon"

return "Good Evening"
}

// if(now < 12){
//   return 'Good Morning'
// } else if(now < 18){
//   return 'Good Afternoon'
// } else {
//   return 'Good Evening'
// }

// switch (now) {
//   case now < 12:
//     return 'Good Morning'
//     break;
//   case now < 18:
//     return 'Good Afternoon'
//     break;
//   default:
//     return 'Good Evening'
//     break;
// }

const GREETING_MSG = makeGreeting();

if(!savedUsername){
  loginForm.classList.remove('hidden');
  loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = loginInput.value;
  greeting.innerText = `${GREETING_MSG},` + username + '.';
  loginForm.classList.add('hidden')
  mainContents.classList.remove('hidden');
  localStorage.setItem("username", username)
})
} else {
  loginForm.classList.add('hidden');
  mainContents.classList.remove('hidden');
  greeting.innerText = `${GREETING_MSG}, ${savedUsername}.`;
}

// refactoring