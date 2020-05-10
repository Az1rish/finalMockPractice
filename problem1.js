// Given a document, implement an algorithm to count the number of word occurrences.

// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

function words(str) {
    let container = str.toLowerCase().split(' ');
    // trim all misc. characters off words
    for (let i = 0; i < container.length; i++) {
        let word = container[i];
        if (word.charCodeAt(0) < 97 || word.charCodeAt(0) > 122) {
            container[i] = word.substring(1);
        }
        if (word.charCodeAt(word.length - 1) > 122 || word.charCodeAt(word.length - 1) < 97) {
            container[i] = word.substring(0, word.length - 1);
        }
        if (word.charCodeAt(word.length - 2) > 122 || word.charCodeAt(word.length - 2) < 97) {
            container[i] = word.substring(0, word.length - 2);
        }
        
    }
    // console.log(container);
    // Now we have an array of each word in the string, lower case and we can compare and count
    let wordCount = {};
    for (let i = 0; i < container.length; i++) {
        let word = container[i];
        if (!wordCount[word]) {
            wordCount[word] = 1;
        } else {
            wordCount[word]++;
        }
    }
    // console.log(wordCount.toString(key, value));
    let newContainer = []
    for (let [key, value] of Object.entries(wordCount)) {
        newContainer.push(`${key} = ${value}`);
    }
    let newString = newContainer.join(', ');
    console.log(newString);
}

words(`"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`);