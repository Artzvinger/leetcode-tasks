let arr = [3,4,1,2,8,7,5,9];
function bubbleSort(arr){
	for (let j = 1; j < arr.length; j++) {
		let swapped = false;

		for (let i = 0; i < arr.length - j; i++) {
			if (arr[i] > arr[i + 1]) {
				swap2(arr, i, j);
				swapped = true;
			}
		}

		if (swapped === false) break;
	}
	
	return arr;
}

function swap(arr, i,j){
	let temp = arr[i + 1];
	arr[i + 1] = arr[i];
	arr[i] = temp;
}
function swap2(arr, i, j) {
	[arr[i], arr[i + 1]] = [arr[i+1], arr[i]];
}

console.log(bubbleSort(arr));