import 'mocha'
import assert  from 'assert';
import FizzBuzz from '../src/fizzbuzz';

const testData = [
  { given: 1, expected: 1, desc: 'should return one if receive one' },
  { given: 3, expected: 'fizz', desc: 'should return fizz if receive three' },
  { given: 4, expected: 4, desc: 'should return the same number that receives' },
  { given: 9, expected: 'fizz', desc: 'should return fizz if receive any number divisible by three' },
  { given: 15, expected: 'fizzbuzz', desc: 'should return fizzbuzz if receive fifteen' },
  { given: 25, expected: 'buzz', desc: 'should return buzz if receive any number divisible by five' },
  { given: 30, expected: 'fizzbuzz', desc: 'should return buzz if receive any number divisible by fifteen' }
]

describe('FizzBuzz', () => {
  for (let i = 0; i < testData.length; i++) {
    const element = testData[i];

    it(element.desc, () => {
      const actual = FizzBuzz(element.given)
      assert.equal(actual, element.expected);
    });
  }

});
