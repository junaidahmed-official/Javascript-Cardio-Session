//CHALLENGE 1: REVERSE A STRING
//Return a string in reverese
// ex. reverseString('hello') === 'olleh'

function reverseString(str){
    /*
    const strArr = str.split('');   //splitting the str and store it in arr
    strArr.reverse(); //reverese the arr elements
    return strArr.join(''); //join the arr elements
    */
    
    ///////////////////////////////////////////////////

    //return str.split('').reverse().join('');

    /*
    let revString = '';
    for (let i = str.length - 1; i >= 0; i--){
        revString = revString + str[i]
    }
    return revString;
    */

    ///////////////////////////////////////////////////

    /*
    let revString = '';
    for (let i = 0; i <= str.length - 1; i++){
        revString = str[i] + revString
    }
    return revString;
    */

    ///////////////////////////////////////////////////
    
    /*
    let revString = '';
    for (let char of str){
        revString = char + revString
    }
    return revString;
    */

    ///////////////////////////////////////////////////

    /*
    let revString = '';
    str.split('').forEach(element => revString = element + revString );
    return revString;
    */

    ///////////////////////////////////////////////////

    /*
    let revString = '';
    str.split('').forEach(function(char){
        revString = char + revString;
    })
    return revString;
    */

    ///////////////////////////////////////////////////

    /*
    return str.split('').reduce(function(revString, char) {
        return char + revString;
    }, '');
    */

    ///////////////////////////////////////////////////

    //return str.split('').reduce((revString, char) => char + revString, '');

}


//CHALLENGE 2: VALIDATE A PALINDROME
//Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') === 'false'

function isPalindrome(str){
    const revString = str.split('').reverse().join('');
    
    return revString === str;
}


//CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int){
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString) * Math.sign(int); //mulitplying with the sign of orignal int to accomodate -ve int
}


//CHALLENGE 4: CAPATALIZE LETTERS
// Return a string with the first letter of every word capatilized
// ex. capatilizeLetters('i love javascript') === 'I Love Javascript'

function capatilizeLetters(str){
    /*
    const strArr = str.toLowerCase().split(' ');

    for(let i = 0; i < strArr.length; i++){
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    }

    return strArr.join(' ');
    */

    ////////////////////////////////////////////////////////

    /*
    return str
    .toLowerCase()
    .split(' ')
    .map(function(word){
        return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ')
    */

    ///////////////////////////////////////////////////////

    return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}


//CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str){
    const charMap = {}
    let maxCount = 0;
    let maxChar = '';

    /*
    str.split('').forEach(function(char){
        if(charMap[char])
            charMap[char]++
        else
            charMap[char] = 1
    })
    */

    str.split('').forEach(char => 
        charMap[char] ? charMap[char]++ : charMap[char] = 1)

    for(let char in charMap)
    {
        if(charMap[char] > maxCount)
        {
            maxCount = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}


// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 30.
// For multiples of 3, instead of the number, print "Fizz", for
// multiples of 5 print "Buzz". For numbers which are multiples of both
// 3 and 5, print "FizzBuzz".

function fizzBuzz(){
    for(let i = 1; i <= 30; i++){
        let output = ''

        if( i % 5 === 0 && i % 3 === 0 ){
            output += "FizzBuzz";
        }else if ( (i % 5 && i % 3) === 0 ){
            output += "Fizz";
        }else if(i % 5 === 0){
            output += "Buzz";
        }

        console.log(output || i);
    }
}

console.log(fizzBuzz());
























