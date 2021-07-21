function quicksort(arr, angka=1) {
	const pivot = arr[0];
	const left = [];
	const right = [];
	let result = []

	if (arr.length <= 1) {
		return arr
	}

	for (let i = 1; i <= arr.length -1; i++) {
		if (arr[i] <= pivot){
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	const qsLeft = quicksort(left, angka+1);
	const qsRight = quicksort(right, angka+1);

	result = [...qsLeft, pivot, ...qsRight];

	return result;
}


const qs = quicksort([30, 10, 5, 40, 11, 20, 4, 6]);
console.log(qs);
