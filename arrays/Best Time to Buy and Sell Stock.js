/**
 * Type: Array / Dynamic Programming (Kadane's Algorithm) / Easy
 * [121] Best Time to Buy and Sell Stock
 *
 * 📌 Условие: Дан массив цен на акции, где prices[i] — цена в i-й день.
 *             Найдите максимальную прибыль от одной покупки и одной продажи
 *             (сначала покупка, потом продажа). Если прибыль невозможна, верните 0[citation:2][citation:7].
 *
 * 🔍 Маркеры: максимизация прибыли, одна транзакция, купить до продажи.
 * 📏 Тип: Жадный алгоритм / Один проход.
 * 🧠 Идея: Отслеживаем минимальную цену для покупки (minPrice) и
 *          максимальную прибыль (maxProfit) за один проход.
 *          Для каждой цены вычисляем потенциальную прибыль как price - minPrice
 *          и обновляем максимум[citation:2][citation:4].
 *
 * ⏱ Сложность: O(n) по времени, O(1) по памяти[citation:2][citation:8].
 *
 * @param {number[]} prices - массив цен на акции
 * @return {number} - максимальная прибыль или 0
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            let profit = prices[i] - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    
    return maxProfit;
};
