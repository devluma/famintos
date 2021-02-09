module.exports = function generateSchedule(typeReturn = 'STRING') {
  try {
    const date = new Date();
    const workDays = [1, 2, 3, 4, 5];
    const daysOfWeek = [7, 1, 2, 3, 4, 5, 6];
    const weeksName = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const monthsName = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const schedule = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      monthsName: monthsName[date.getMonth()],
      day: date.getDate(),
      dayWeek: daysOfWeek[date.getDay()],
      weekDay: weeksName[date.getDay()],
      workDay: workDays[date.getDay()],
      workDays,
      daysOfWeek,
      weeksName,
      lastDays: date.setDate(date.getDate() - daysOfWeek.length),
      time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    };

    const dataReturn = JSON.stringify(schedule);

    return typeReturn === 'JSON' ? schedule : dataReturn;
  } catch (err) {
    return err.message;
  }
};
