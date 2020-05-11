// Given a string, write an algorithm to count the number of words in the string that are palindromes. The output must include a list of the palindromes and the number of palindromes.

//  - Input: `"Dad gave mom a Tesla as a racecar"`
//  - Output: `Dad, mom, racecar, 3 Palindromes`

function palindromeCounter(str) {
    let strArray = str.toLowerCase().split(' ');
   
    let palContainer = [];
    for (let i = 0; i < strArray.length; i++) {
        let word = strArray[i];
        if (word.length <= 2) {
            continue;
        }
        let mid = Math.floor(word.length / 2);
        let left = word.slice(0, mid);
        let right;
        if (word.length % 2 === 0) {
            right = word.slice(mid, word.length).split('').reverse().join('');
        } else {
            right = word.slice(mid + 1, word.length).split('').reverse().join('');
        }
        // console.log('left', left, 'right', right);
        if (left === right) {
            palContainer.push(word);
        }
    }
    // console.log('pals', palContainer);
    return palContainer.join(', ') + `, ${palContainer.length} Palindromes`;
}

console.log(palindromeCounter("Dad gave mom a Tesla as a racecar"));
