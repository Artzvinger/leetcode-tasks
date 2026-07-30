// function isPalindrome(str) {
//     let cleaned1 = str.toLowerCase();
//     let cleaned2 = cleaned1.split(' ').join('');
//     let fin = cleaned2.split('').reverse().join('');
//     return cleaned2 === fin ? true : false;

// }

// console.log(isPalindrome('racecar')) // true
// console.log(isPalindrome('hello')) // false
// console.log(isPalindrome('A man a plan a canal Panama')) // true (должно игнорировать пробелы и регистр)


function isChar(char) {
    let code = char.charCodeAt(0) 
    return code === 32 ? false : true
}

function isPalindrome(str) {
    let left = 0;
    let right = str.length-1;
    while (left < right){
        while (left < right && isChar(str[left]) === false) left++;
        while (left < right && isChar(str[right]) === false) right--;
            if (str[left].toLowerCase() !== str[right].toLowerCase()){
                return false;
            }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('raccar')) // true
console.log(isPalindrome('hello')) // false
console.log(isPalindrome('A man a plan a canal Panama')) // true (должно игнорировать пробелы и регистр)