document.addEventListener("DOMContentLoaded", () => {
  const birthday = new Date("Jun 01 2024 00:00:00");

  const weeksVal = document.querySelector(`.time-count_weeks .time-count_value`)
  const daysVal = document.querySelector(`.time-count_days .time-count_value`)
  const hoursVal = document.querySelector(`.time-count_hours .time-count_value`)
  const minutesVal = document.querySelector(`.time-count_minutes .time-count_value`)
  const secondsVal = document.querySelector(`.time-count_seconds .time-count_value`)

  const weeksText = document.querySelector(`.time-count_weeks .time-count_text`)
  const daysText = document.querySelector(`.time-count_days .time-count_text`)
  const hoursText = document.querySelector(`.time-count_hours .time-count_text`)
  const minutesText = document.querySelector(`.time-count_minutes .time-count_text`)
  const secondsText = document.querySelector(`.time-count_seconds .time-count_text`)


  function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }


  const timeCount = () => {
    let now = new Date()
    let leftUntil = birthday - now

    let weeks = Math.floor(leftUntil / 1000 / 60 / 60 / 24 / 7)
    let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24) % 7
    let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24
    let minutes = Math.floor(leftUntil / 1000 / 60) % 60
    let seconds = Math.floor(leftUntil / 1000) % 60

    // weeks
    if(weeks <= 9){
      weeksVal.innerText = "0" + weeks
    } else {
      weeksVal.innerText = weeks
    }
    
    // days 
    if(days <= 9){
      daysVal.innerText = "0" + days
    } else {
      daysVal.innerText = days
    }

    // hours
    if(hours <= 9){
      hoursVal.innerText = "0" + hours
    } else {
      hoursVal.innerText = hours
    }

    // minutes
    if(minutes <= 9){
      minutesVal.innerText = "0" + minutes
    } else {
      minutesVal.innerText = minutes
    }
    
    // seconds
    if(seconds <= 9){
      secondsVal.innerText = "0" + seconds
    } else {
      secondsVal.innerText = seconds
    }

    weeksText. textContent = declOfNum(days, ['week', 'weeks', 'weeks']);
    daysText.textContent = declOfNum(days, ['day', 'days', 'days']);
    hoursText.textContent = declOfNum(hours, ['hour', 'hours', 'hours']);
    minutesText.textContent = declOfNum(minutes, ['minute', 'minutes', 'minutes']);
    secondsText.textContent = declOfNum(seconds, ['second', 'seconds', 'seconds']);
  }
  timeCount()

  setInterval(timeCount, 1000)
});