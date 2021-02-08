module.exports = function generateSchedule() {
  try {
    const date = new Date();

    const workDays = [1, 2, 3, 4, 5];
    const daysOfWeek = [7, 1, 2, 3, 4, 5, 6];
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const schedule = {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      dayWeek: daysOfWeek[date.getDay()],
      weekDay: week[date.getDay()],
      workDay: workDays[date.getDay()],
      workDays,
      daysOfWeek,
      week,
      time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    };

    return JSON.stringify(schedule);
  } catch (error) {
    return false;
  }
};
