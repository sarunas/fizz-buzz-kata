const { fizzBuzz } = require('./index');
const fixtures = require('./fixtures');

describe('fizzBuzz', () => {
  test('should return original', () => {
    expect(fizzBuzz()).toEqual(fixtures.fizzBuzz);
  });

  describe('step 1', () => {
    test.skip('should work with range 1 to 20', () => {
      expect(fizzBuzz()).toEqual(fixtures.fizzBuzzFrom1to20);
    });

    test.skip('should work with range 15 to 50', () => {
      expect(fizzBuzz()).toEqual(fixtures.fizzBuzzFrom15to50);
    })
  });

  describe('step 2', () => {
    test.skip('should work with additional Foo rule', () => {
      expect(fizzBuzz()).toEqual(fixtures.fizzBuzzFoo);
    });

    test.skip('should work with additional Boo rule', () => {
      expect(fizzBuzz()).toEqual(fixtures.fizzBuzzBoo);
    });

    test.skip('should work with both additional Foo and Boo rules', () => {
      expect(fizzBuzz()).toEqual(fixtures.fizzBuzzFooBoo);
    });
  });

  describe('step 3', () => {
    test.skip('should work with Small rule', () => {
      expect(fizzBuzz()).toEqual(fixtures.smallFizzBuzz);
    });

    test.skip('should work with Big rule', () => {
      expect(fizzBuzz()).toEqual(fixtures.bigFizzBuzz);
    });
  });

  describe('step 4', () => {
    test.skip('should work as BuzzFizz', () => {
      expect(fizzBuzz()).toEqual(fixtures.buzzFizz);
    });

    test.skip('should work as BuzzSmallFizz', () => {
      expect(fizzBuzz()).toEqual(fixtures.buzzSmallFizz);
    });
  });

  describe('step 5', () => {
    test.skip('should work with rule FTW only', () => {
      expect(fizzBuzz()).toEqual(fixtures.ftw);
    });

    test.skip('should work with rule GG only', () => {
      expect(fizzBuzz()).toEqual(fixtures.gg);
    });
  });
});
