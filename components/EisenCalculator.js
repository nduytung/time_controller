import React from 'react';

let taskArr = [
  {
    taskName: 'Task 01',
    finish: '19-12-2021',
    time: 55,
    importantRate: 5,
    done: 1,
    pomodoroPeriod: 2,
    taskOnDate: [{date: '11-12/2021', pomCount: 2}],
  },
  {
    taskName: 'Task 02',
    finish: '22-12-2021',
    time: 45,
    importantRate: 2,
    done: 1,
    pomodoroPeriod: 2,
  },
  {
    taskName: 'Task 03',
    finish: '15-12-2021',
    time: 55,
    importantRate: 10,
    done: 1,
    pomodoroPeriod: 2,
  },
  {
    taskName: 'Task 04',
    finish: '17-12-2021',
    time: 27,
    importantRate: 7,
    done: 1,
    pomodoroPeriod: 2,
  },
];

let pomodoro = 25;

const EisenCalculator = () => {
  //phai xong task truoc deadline
  //phai xep duoc task theo uu tien
  //phai lam sao de them task moi vao cung khong anh huong
  //1 pomodoro thuc hien 1 viec

  //1. tinh tong thoi gian
  let totalTime = 0;
  taskArr.forEach(element => {
    totalTime += element.time;
  });

  //2. tinh so chu ki pomodoro can thiet
  const pomodoroCount = totalTime / pomodoro;

  //3. tinh thoi gian cuoi tuan
  var today = new Date();
  var endDate =
    today.getFullYear() + '-' + today.getMonth() + '-' + (today.getDate() + 7);

  //4. tinh so chu ki pomodoro cho moi task
};

export default EisenCalculator;
