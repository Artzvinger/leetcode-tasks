function quickSort(arr, low= 0, high= arr.length - 1) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);

        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }

    return arr;
}
function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            swap(arr, i, j);
            i++;
        }
    }

    swap(arr, i, high);

    return i;
}

function swap(arr, j, i) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(quickSort([39,4,6,1,5,1,76,8,2,123,7,856,13,8]));
