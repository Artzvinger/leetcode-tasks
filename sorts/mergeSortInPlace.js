function mergeSortInPlace(arr) {
    let buffer = new Array(arr.length);
    mergeSortHelper(arr, buffer, 0, arr.length - 1);
    return arr;
}

function mergeSortHelper(arr, buffer, left, right) {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);
    mergeSortHelper(arr, buffer, left, mid);
    mergeSortHelper(arr, buffer, mid+1, right);

    mergeInPlace(arr, buffer, left, mid, right);
}

function mergeInPlace(arr, buffer, left, mid, right) {
    for (let i = left; i <= right; i++) {

    }
    let result = [];
    let i= 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
}
console.log(mergeSortInPlace([1,2,3,4,5,6,7,8,9]));