var hour, minute;

const toMinute = (hour, minute) => {
  return hour * 60 + minute;
};

const calculator = (timetoGetup, a) => {
  // ngu trong 3 chu ky
  if (timetoGetup - 284 >= 0) a.push(timetoGetup - 284);
  else {
    a.push(timetoGetup + 1440 - 284);
  }

  // ngu trong 4 chu ky
  if (timetoGetup - 374 >= 0) a.push(timetoGetup - 374);
  else {
    a.push(timetoGetup + 1440 - 374);
  }

  // ngu trong 5 chu ky
  if (timetoGetup - 464 >= 0) a.push(timetoGetup - 464);
  else {
    a.push(timetoGetup + 1440 - 464);
  }

  // ngu trong 6 chu ky
  if (timetoGetup - 554 >= 0) a.push(timetoGetup - 554);
  else {
    a.push(timetoGetup + 1440 - 554);
  }
};

var a = new Array(5);
var timetoGetup = toMinute(hour, minute);
calculator(timetoGetup, a);

const sleepCalculator = (timetoGetup, b) => {
  // ngu trong 3 chu ky
  if (timetoGetup + 284 <= 1440) a.push(timetoGetup + 284);
  else {
    a.push(timetoGetup + 284 - 1440);
  }

  // ngu trong 4 chu ky
  if (timetoGetup + 374 <= 1440) a.push(timetoGetup + 374);
  else {
    a.push(timetoGetup + 374 - 1440);
  }

  // ngu trong 5 chu ky
  if (timetoGetup + 464 <= 1440) a.push(timetoGetup + 464);
  else {
    a.push(timetoGetup + 464 - 1440);
  }

  // ngu trong 6 chu ky
  if (timetoGetup + 554 <= 1440) a.push(timetoGetup + 554);
  else {
    a.push(timetoGetup + 554 - 1440);
  }
};
var b = new Array(5);
var timeSleep = toMinute(hour, minute);
sleepCalculator(timetoGetup, b);

export default sleepCalculator;
