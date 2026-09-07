/**
 * Type: Array / Easy
 * [1920] Build Array from Permutation
 *
 * 📌 Условие: Дан массив nums, где nums[i] от 0 до n-1.
 *             Постройте массив ans[i] = nums[nums[i]].
 *
 * 🔍 Маркеры: перестановка, маппинг, O(1) память.
 * 📏 Тип: Массив.
 * 🧠 Идея: Создаем новый массив, заполняя его по формуле ans[i] = nums[nums[i]].
 *
 * ⏱ Сложность: O(n) по времени, O(n) по памяти.
 *
 * @param {number[]} nums - массив-перестановка
 * @return {number[]} - массив после применения перестановки
 */
var buildArray = function(nums) {
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }
    return ans;
};