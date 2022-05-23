function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function fillDays(array) {
      for (let i = 0; i < array.length; i += 1) {
          let li = document.createElement('li')
          li.innerText = array[i]
          li.classList.add('day')
          if (array[i] === 24 || array[i] === 25 || array[i] === 31) {
              li.classList.add('holiday')
          }
          if (array[i] === 4 || array[i] === 11 || array[i] === 18 || array[i] === 25) {
            li.classList.add('friday')
        }
          let ul = document.getElementById('days')
          ul.appendChild(li)
      }
  }
  fillDays(dezDaysList)

  function holidayButton (string) {
      let button = document.createElement('button')
      button.innerHTML = string
      button.id = 'btn-holiday'
      let buttonContainer = document.querySelector('.buttons-container')
      buttonContainer.appendChild(button)
  }
  holidayButton('Feriados')

  let button = document.querySelector('#btn-holiday')
  button.addEventListener('click',changeHolidaysColor)
  function changeHolidaysColor(event) {
      let holidays = document.querySelectorAll('.holiday')
      for (let i = 0; i < holidays.length; i += 1) {
          if (holidays[i].style.backgroundColor != 'yellow') {
          holidays[i].style.backgroundColor = 'yellow'
          } else {
            holidays[i].style.backgroundColor = 'rgb(238,238,238)'
          }
      }
  }

  function createFridayButton(string) {
      let fridayButton = document.createElement('button')
      fridayButton.innerHTML = string
      fridayButton.id = 'btn-friday'
      let buttonContainer = document.querySelector('.buttons-container')
      buttonContainer.appendChild(fridayButton)
  }

  createFridayButton('Sexta-Feira')

  let fridayButton = document.querySelector('#btn-friday')
  console.log(fridayButton.innerHTML)
  fridayButton.addEventListener('click',changeTextFromFridays)
  function changeTextFromFridays(event) {
      let fridays = document.querySelectorAll('.friday')
      for (let i = 0; i < fridays.length; i += 1) {
          fridays[i].innerHTML = 'Sexta-Feira'
      }
  }

  let day = document.querySelector('#days')
  day.addEventListener('mouseover',dayZoom)
  day.addEventListener('mouseout',dayZoomOut)
  function dayZoom(event) {
      event.target.style.fontSize = '35px'
  }
  function dayZoomOut(event) {
    event.target.style.fontSize = '20px'
}

function addTask(string) {
    let task = document.createElement('span')
    task.innerText = string
    let myTasks = document.querySelector('.my-tasks')
    myTasks.appendChild(task)
}

addTask('cozinhar')

function addLabel(cor) {
    let div = document.createElement('div')
    div.classList.add = 'task'
    div.style.backgroundColor = cor
    let div2 = document.querySelector('.my-tasks')
    div2.appendChild(div)
}
addLabel('red')




