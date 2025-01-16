import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';

let numA, numB, result;

Given('I have two numbers {int} and {int}', function (a, b) {
  numA = a;
  numB = b;
});

When('I add them together', function () {
  result = numA + numB;
});

When('I subtract one from the other', function () {
  result = numA - numB;
});

Then('I should get the result {int}', function (expectedResult) {
  assert.equal(result, expectedResult);
});
