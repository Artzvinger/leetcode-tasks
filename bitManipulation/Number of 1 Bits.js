/**
 * Type: Bit Manipulation / Easy
 * [191] Number of 1 Bits
 *
 * 📌 Условие: Дано целое число n (беззнаковое). Верните количество единичных битов
 *             в его двоичном представлении (также известное как вес Хэмминга).
 *
 * 🔍 Маркеры: количество единиц, биты, двоичное представление, вес Хэмминга.
 * 📏 Тип: Битовые операции.
 * 🧠 Идея: Преобразуем число в двоичную строку и считаем символы '1'.
 *          Или используем побитовый сдвиг: проверяем последний бит (n & 1),
 *          затем сдвигаем вправо (n >>= 1) и повторяем 32 раза.
 *
 * ⏱ Сложность: O(log n) или O(32) по времени, O(1) по памяти.
 *
 * @param {number} n - целое число
 * @return {number} - количество единичных битов
 */
function hemming(num){
    let count=0;
    let binaryNum = num.toString(2)
    for (let i = 0; i < binaryNum.length; i++){
        if  (binaryNum[i] == 1) count++;
    }
    return count;
}

function hemming2(n){
    let count=0;
    for (let i = 0; i < 32; i++){
        if  ((n & 1) === 1) count++;
        n >>= 1;
    }
    return count;
}

console.log(hemming(5))
console.log(hemming2(5))