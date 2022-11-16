const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let itWork = false;

const createTimerAnimator = () => {
  return (seconds) => {
    timerEl.innerText = calculateTime(seconds);

    setInterval(() => {
      --seconds;
      timerEl.innerText = calculateTime(seconds);
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (el) => {
  let value = el.target.value;
  if((isNaN(parseInt(value)) || !isFinite(value)) && value != '') {
    alert("Введите целое число!");
    el.target.value = !isNaN(parseInt(value.replace(/[^\d]/g, ''))) ? parseInt(value.replace(/[^\d]/g, '')) : "";
  }

  if(value > 356400) {
    alert("Число слишком большое!");
    el.target.value = 356400;
  }
});

buttonEl.addEventListener('click', () => {
  if(!itWork) {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);

    inputEl.value = '';

    itWork = !itWork;
  } else {
    alert("Уже запущен один таймер!")
  }
});


function calculateTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor(seconds / 60) - hours * 60;
  let new_seconds = seconds % 60;
  let minutes_str = minutes < 10 ? "0" + minutes : minutes;
  let seconds_str = new_seconds < 10 ? "0" + new_seconds : new_seconds;

  return hours + ":" + minutes_str + ":" + seconds_str;
}