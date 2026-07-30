function hemming(num){
    let count=0;
    let binaryNum = num.toString(2)
    for (let i = 0; i < binaryNum.length; i++){
        if  (binaryNum[i] == 1) count++;
    }
    return count;
}

function hemming2(n){
    let count=0;
    for (let i = 0; i < 32; i++){
        if  ((n & 1) === 1) count++;
        n >>= 1;
    }
    return count;
}

console.log(hemming(5))
console.log(hemming2(5))