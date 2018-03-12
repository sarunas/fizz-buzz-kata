const { fizzBuzz } = require('./index');
const fixtures = require('./fixtures');

describe('fizzBuzz', () => {
  test('should return original ', () => {
    expect(fizzBuzz()).toEqual(fixtures.fizzBuzz);
  });

  test.skip('step 1: should return custom range', () => {
    expect(fizzBuzz()).toEqual(fixtures.fizzBuzzWithRange1to20);
    expect(fizzBuzz()).toEqual(fixtures.fizzBuzzWithRange15to50);
  });

  test.skip('step 2: should return with more rules', () => {
    expect(fizzBuzz()).toEqual(fixtures.fizzBuzzWithFooRule);
    expect(fizzBuzz()).toEqual(fixtures.fizzBuzzWithBooRule);
    expect(fizzBuzz()).toEqual(fixtures.fizzBuzzWithFooAndBooRule);
  });

  test.skip('step 3: should return with event more rules', () => {
    expect(fizzBuzz()).toEqual(fixtures.fizzBuzzWithLessThanRule);
    expect(fizzBuzz()).toEqual(fixtures.fizzBuzzWithMoreThanRule);
  });

  test.skip('step 4: should be possible to change rules ordering', () => {
    expect(fizzBuzz()).toEqual(fixtures.fizzBuzzWithChangedOrderBuzzFizz);
    expect(fizzBuzz()).toEqual(fixtures.fizzBuzzWithChangedOrderBuzzSmallFizz);
  });

  test.skip('step 5: should return with complex rule only', () => {
    expect(fizzBuzz()).toEqual(fixtures.fizzBuzzWithComplexRule3And5);
    expect(fizzBuzz()).toEqual(fixtures.fizzBuzzWithComplexRule3Or5);
  });
});
