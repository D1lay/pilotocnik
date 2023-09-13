const creationDateObj = {
  year: 2023,
  month: 2,
  day: 29,
  hours: 0,
  minutes: 3,
  seconds: 0
};

const creationDate = new Date(
  creationDateObj.year,
  creationDateObj.month,
  creationDateObj.day,
  creationDateObj.hours,
  creationDateObj.minutes,
  creationDateObj.seconds
);

const timeLeft = document.querySelector('#timeLeft');

setInterval(() => {

  const now = new Date();
  const diffInMS = now - creationDate;
  const diffAsDate = new Date(diffInMS);

  const [
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  ] = diffAsDate
      .toISOString()
      .split('T')
      .map(timePart => 
        timePart
          .split(/-|:|\./)
          .map(str => +str)
      )
      .flat();
  monthsLeft.textContent= `${months} месяцев `;
  daysLeft.textContent = `${days - 1} дней `;
  HoursLeft.textContent = `${hours} час`;
  MinsLeft.textContent = `${minutes} минут`;
  SecLeft.textContent = `${seconds} секунд`;

}, 1000);
