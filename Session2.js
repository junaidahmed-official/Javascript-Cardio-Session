// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

function longestWord(sen) {
    //create filtered array without any special characters, only words
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

    //sort word array by length
    const sorted = wordArr.sort((a,b) => b.length - a.length)

    //multiple longest words
    const longestWords = sorted.filter(word => 
        word.length === sorted[0].length )

    if(longestWords.length === 1){
        return longestWords[0]
    } else{
        return longestWords
    }
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {

    //init chunked arr
    const chunkedArray = []

    //set index
    let i = 0

    //loop while index is less the array length
    while(i < arr.length){
        chunkedArray.push(arr.slice(i, i + len))

        //to start from the index where last we sliced the array lastly
        i += len
    }

    return chunkedArray
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {

    // Sol 1
    // return arrays.reduce((a,b) => a.concat(b));

    // Sol 2
    // return [].concat.apply([], arrays);

    // spread operator (treats every index individually)
    // function add(a, b, c){
    //    return a + b + c;
    //}
    //const arr = [1, 2, 3]
    //console.log(add(..arr))

    // Sol 3
    return [].concat(...arrays);
}


// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
    console.log(formatStr(str1));
    console.log(formatStr(str2));
    return formatStr(str1) === formatStr(str2)
}

// Helper function
function formatStr(str) {
    return str
    .replace(/[^\w]/g, '') //remove any non alphabet
    .toLowerCase() //convert to lowercase
    .split('') //split every alphabet to array element
    .sort() //sort the array
    .join('') //join the sorted array
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
    let newStr = str.replace(/[a-z]/gi, (char) => {
        if(char === 'z' || char === 'Z'){
            return 'a'
        } else{
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });

    newStr = newStr.replace(/[a|e|i|o|u]/gi, (vowel) => vowel.toUpperCase());

    return newStr;
}

// Call Function
const output = letterChanges('hello there');

console.log(output);