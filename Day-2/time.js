function displayTimeRounded(hours_deg, minutes_deg, seconds_deg) {
  let hours = document.querySelector(".hand-hour");
  let minutes = document.querySelector(".hand-minute");
  let seconds = document.querySelector(".hand-second");

  seconds.style.transform = `rotate(${seconds_deg}deg)`;
  minutes.style.transform = `rotate(${minutes_deg}deg)`;
  hours.style.transform = `rotate(${hours_deg}deg)`;
}

function checkTimeToDisplay(time) {
  let n_hours = time.hours > 12 ? time.hours - 12 : time.minutes;
  let dtime = time.hours < 12 ? "AM" : "PM";
  let new_time_format = {
    hours: `${n_hours}`,
    minutes: `${time.minutes}`,
    seconds: `${time.seconds}`,
    daytime: dtime,
  };

  if (time.hours < 10) {
    new_time_format.hours = `0${time.hours}`;
    if (time.minutes < 10) {
      new_time_format.minutes = `0${time.minutes}`;
    }
    if (time.seconds < 10) {
      new_time_format.seconds = `0${time.seconds}`;
    }
  }
  DisplayTimeSquare(new_time_format);
}

function DisplayTimeSquare(time) {
  let clock_square_time = document.querySelector("p");
  clock_square_time.innerHTML = `${time.hours} : ${time.minutes} : ${time.seconds} ${time.daytime}`;
}

function setTime() {
  let date = new Date();
  let time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
  //   console.log(time);
  checkTimeToDisplay(time);

  let seconds_deg = (time.seconds / 60) * 360 + 90;
  let minutes_deg = (time.minutes / 60) * 360 + 90;
  let hours_deg = (time.hours / 12) * 360 + 90;
  displayTimeRounded(hours_deg, minutes_deg, seconds_deg);
}

setInterval(setTime, 1000);
