module.exports = function generateSchedule(user = null) {
  const date = new Date();
  const schedule = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    user: {},
  };

  if (user) {
    schedule.user = {
      id: user.id,
      name: user.name,
    };
  }

  return JSON.stringify(schedule);
};
