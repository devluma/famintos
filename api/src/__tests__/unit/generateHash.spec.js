const generateHash = require('../../utils/generateHash');

describe('Generate Unique ID', () => {
  it('Should generate an unique ID', () => {
    const id = generateHash('TESTE_HASH');

    expect(id).toHaveLength(20);
  });
});
