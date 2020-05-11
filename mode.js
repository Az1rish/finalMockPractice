{/*Given a list of integers find the mode and the frequency of the mode. The mode in a list of numbers is the value that occurs the most often. If no number in the list is repeated, then there is no mode for the list.

- Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
- Output: `Mode = 3, Frequency of mode = 4`*/}

function mode(numbers) {
    let numArr = numbers.split(', ');
    let numObj = {};
    
    for (let i = 0; i < numArr.length; i++) {
        let digit = numArr[i];
        if (!numObj[digit]) {
            numObj[digit] = 1;
        } else if (numObj[digit]) {
            numObj[digit]++;
        }
    }
 
    let currentMax = 0;
    let currentMode;
    for (let [key, value] of Object.entries(numObj)) {
        if (value > currentMax) {
            currentMax = value;
            currentMode = key;
        }
    }
 
    return `Mode = ${currentMode}, Frequency of mode = ${currentMax}`;
}

console.log(mode(`1, 2, 3, 6, 10, 3, 5, 6, 3, 3`));