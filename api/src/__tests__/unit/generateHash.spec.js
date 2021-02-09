const generateHash = require('../../utils/generateHash');

describe('Generate a Hash MD5', () => {
  it('Should be generate an Hash MD5', () => {
    const hash = generateHash('TESTE_HASH');

    expect(hash.toString().length).toBe(44);
    expect(hash).toEqual('Id+zevWJOptbC7IS2YWzQY8tr9fVRJ/DLV/P1YmsfKU=');
  });
});
