const generateSchedule = require('../../utils/generateSchedule');

describe('Generate a Schedule of Dates', () => {
  it('Should be generate an object with date fields', () => {
    const scheduleString = generateSchedule('STRING');
    const scheduleJson = generateSchedule('JSON');

    // expect(scheduleJson).toEqual({
    //   year: 2021,
    //   month: 2,
    //   day: 8,
    //   dayWeek: 1,
    //   weekDay: expect.toString(),
    //   workDay: 1,
    //   workDays: [1, 2, 3, 4, 5],
    //   daysOfWeek: [1, 2, 3, 4, 5, 6, 7],
    //   week: [7, 1, 2, 3, 4, 5, 6],
    //   time: expect.toString(),
    //   lastDays: expect.toString(),
    // });

    // console.log(scheduleJson);

    expect(scheduleJson).toMatchObject({
      year: expect.toNumber().toLength(4),
      month: 2,
      day: 8,
      dayWeek: 1,
    });

    expect.stringContaining(scheduleString);
  });
});
