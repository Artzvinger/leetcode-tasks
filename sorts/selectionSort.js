let arr = [3, 4, 1, 2, 8, 7, 5, 9]
let arr2 = [3, 4, 1, 2, 8, 7, 5, 9]

function selectionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let min = i
		for (let j = i; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				swap(arr, min, j)
			}
		}
	}
}

function swap(arr, j, i) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

selectionSort(arr)
console.log(arr)
