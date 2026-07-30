/**
 * Type: Array / Two Pointers / Sliding Window / Medium
 * [209] Minimum Size Subarray Sum
 *
 * 📌 Условие: Дан массив положительных целых чисел nums и число target.
 *             Найдите минимальную длину подмассива, сумма которого ≥ target.
 *             Если такого подмассива нет, верните 0.
 *
 * 🔍 Маркеры: минимальная длина, подмассив, сумма ≥ target, положительные числа.
 * 📏 Тип: Переменное окно (динамическое).
 * 🧠 Идея: Расширяем окно вправо, накапливая сумму. Как только сумма ≥ target,
 *          сужаем окно слева, обновляя минимальную длину. Повторяем до конца массива.
 *
 * ⏱ Сложность: O(n) по времени, O(1) по памяти.
 *
 * @param {number} target - целевая сумма
 * @param {number[]} nums - массив положительных целых чисел
 * @return {number} - минимальная длина подмассива или 0
 */
var minSubArrayLen = function(target, nums) {
    let minLength = Infinity;
    let currentSum = 0;
    let left = 0;
    for (let right = 0; right < nums.length; right++){
        currentSum += nums[right];
        while (currentSum >= target) {
            minLength = Math.min(minLength, right - left + 1)
            currentSum -= nums[left];
            left++;
        }
    }
    if (minLength === Infinity)
        return 0;
    else
        return minLength;
};