function quickSortFuntional(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(arr.length / 2)];
    let left = arr.filter((el) => el < pivot);
    let middle = arr.filter((el) => el === pivot);
    let right = arr.filter((el) => el > pivot);

    return [...quickSortFuntional(left), ...middle, ...quickSortFuntional(right)];
}

console.log(quickSortFuntional([3,4,6,1,5,1,76,8,2,123,7,856,13,8]));