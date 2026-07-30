/**
 * Type: Array / Sliding Window / Easy
 * [643] Maximum Average Subarray I
 *
 * 📌 Условие: Дан массив nums и число k. Найдите максимальное среднее значение
 *             подмассива длиной ровно k.
 *
 * 🔍 Маркеры: ровно k, подмассив, максимальное среднее/сумма.
 * 📏 Тип: Фиксированное окно.
 * 🧠 Идея: Сначала считаем сумму первых k элементов. Затем сдвигаем окно:
 *          вычитаем левый элемент, прибавляем новый правый. Обновляем максимум.
 *
 * ⏱ Сложность: O(n) по времени, O(1) по памяти.
 *
 * @param {number[]} nums - массив целых чисел
 * @param {number} k - длина подмассива
 * @return {number} - максимальное среднее значение
 */
function findMaxAverage(nums, k) {
    let sumAvMax = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let window = nums.slice(i, i + k)
        let sumAv = window.reduce((acc, val) => acc + val, 0) / k;
        if (sumAv >= sumAvMax) {
            sumAvMax = sumAv;
        }
    }
    return sumAvMax;
}

console.log(findMaxAverage([3,4,1,2,8,7,5,9], 3))


function findMaxAverage2(nums, k) {
    let curSumm = 0;

    for (let i = 0; i < k; i++) {
        curSumm += nums[i];
    }

    let maxSumm = curSumm;

    for (let j = k; j < nums.length; j++) {
        curSumm += nums[j]-nums[j-k];
        if (curSumm >= maxSumm) maxSumm = curSumm;
    }

    return maxSumm/k;
}

console.log(findMaxAverage2([3,4,1,2,8,7,5,9], 3))


