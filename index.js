const currentTime = dayjs();

document.querySelector('.js-current-time')
  .innerHTML = currentTime.format();