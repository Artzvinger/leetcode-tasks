function palindrome(str){
    str = str.replaceAll(" ", '');
    let i = 0;
    let j = str.length - 1;
    while (i < j){
        if (str[i].toLowerCase() !== str[j].toLowerCase()){
            return false;
        }
        i++;
        j--;
    }
    return true
}
console.log(palindrome(' asDd sA'));