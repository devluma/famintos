module.exports = function generateSchedule() {
  const date = new Date();
  const schedule = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
  };

  return JSON.stringify(schedule);
};
