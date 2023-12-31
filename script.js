// complete the given function
function ReverseString(str) {
  // Check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Not valid';
  }

  // Take empty array revArray
  const revArray = [];
  const length = str.length - 1;

  // Looping from the end
  for (let i = length; i >= 0; i--) {
    revArray.push(str[i]);
  }

  // Joining the array elements
  return revArray.join('');
}

function palindrome(str) {
  let temp = str;
  let rev = ReverseString(str);

  return temp === rev;
}

module.exports = palindrome;

const palindrome = require('./palindrome');

console.log(palindrome("race a car"));
