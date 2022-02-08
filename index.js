function isPalindrome(word) {
  word_array =word.split("")
  let newWord = word_array.reverse().join("")
  if (newWord === word) {
    return (true)
  }
  else {
    return (false)
  }
}

/* 
  Add your pseudocode here
*/

/*
  The code breaks down each letter of the word into
  an array, reverses(flips) the array and then joins
  the letters of the reversed array and sees if the first
  word and fliped word matches.
  If yes, returns true if no returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
