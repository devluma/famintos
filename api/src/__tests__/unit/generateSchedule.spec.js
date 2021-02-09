const generateSchedule = require('../../utils/generateSchedule');

describe('Generate a Schedule of Dates', () => {
  it('Should be generate an object with date fields', () => {
    const scheduleString = generateSchedule('STRING');
    const scheduleJson = generateSchedule('JSON');

    expect(scheduleJson).toMatchObject({
      year: expect.toNumber().toLength(4),
      month: 2,
      day: 8,
      dayWeek: 1,
    });

    expect.stringContaining(scheduleString);
  });
});
