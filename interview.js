
// palindrome 
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    // const str = "1madam"
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(cleanStr)
    // Reverse the string
    // madam   = madam
    const reversedStr = cleanStr.split('').reverse().join('');
    console.log(reversedStr)
    
    // Check if the original and reversed strings are the same
    return cleanStr === reversedStr;
}
// Test the function
const testString = "A man, a plan, a canal, Panama!!";
console.log(isPalindrome(testString));

// anagram
// asdfg  = gsdfa
function isAnagram(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if the lengths of the strings are the same
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }
    
    // Sort the characters in both strings and compare them
    const sortedStr1 = cleanStr1.split('').sort().join('');
    // gsdfa  after sored it's gonna look like adfgs 
    const sortedStr2 = cleanStr2.split('').sort().join('');
    console.log(sortedStr1)
    
    // Check if the sorted strings are equal
    return sortedStr1 === sortedStr2;
}

// Test the function
const testString1 = "listen";
// eilnst
const testString2 = "silent";
// eilnst
console.log(isAnagram(testString1, testString2));

//recursion function
let num = 1;
function show23 () {
    if (num < 3) {
        console.log('Hello Antor')
        num++;
        show23();   
    } 
}

show23()

//How to find duplicate characters in string
function findDuplicateCharacters(str) {
    let charMap = {};
    let duplicates = [];

    // will loop through each character of string
    // abcdd
    for (let char of str) {
        // Ignore spaces
        if (char !== ' ') {
            // Convert character to lowercase to treat 'A' and 'a' as the same character
            char = char.toLowerCase();

            if (charMap[char]) {
                if (!duplicates.includes(char)) {
                    duplicates.push(char);
                }
            } else {
                charMap[char] = 1;
            }
        }
    }

    return duplicates;
}

// Test the function
const testDupString = "Hello, Worldd!";
console.log(findDuplicateCharacters(testDupString));

//reverse string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example
const originalString = "!dlroW ,olleH";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"
console.log(reversedString); // Output: "!dlroW ,olleH"