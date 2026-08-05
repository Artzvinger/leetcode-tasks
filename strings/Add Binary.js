/**
 * Type: Math / String / Bit Manipulation / Easy
 * [67] Add Binary
 *
 * 📌 Условие: Даны две бинарные строки a и b. Верните их сумму в виде бинарной строки.
 *
 * 🔍 Маркеры: бинарные строки, сложение, перенос (carry).
 * 📏 Тип: Два указателя (с конца к началу).
 * 🧠 Идея: Идем с конца строк, складываем биты + перенос. Текущий бит = sum % 2,
 *          новый перенос = Math.floor(sum / 2). Результат собираем справа налево.
 *
 * ⏱ Сложность: O(max(n, m)) по времени, O(max(n, m)) по памяти.
 *
 * @param {string} a - первая бинарная строка
 * @param {string} b - вторая бинарная строка
 * @return {string} - сумма в виде бинарной строки
 */
function addBinary(aStr, bStr) {
    let finStr = "";
    let i = aStr.length - 1;
    let j = bStr.length - 1;
    let ost = 0;

    while (i>=0 || j >= 0 || ost > 0){
        let bitA = aStr[i] ? Number(aStr[i]) : 0;
        let bitB = bStr[i] ? Number(bStr[i]) : 0;

        let sum = bitA + bitB + ost;
        if(sum === 0){
            finStr += sum;
        }
        if(sum === 1){
  
        }
        if(sum === 2){

        }
        if(sum === 3) {
            finStr += 1;
		}
        i--;
        j--;
    }

    return finStr;
}

console.log(addBinary("1011", "1011"))

// // Улучшенная версия
// function addBinary2(a: string, b: string): string {
//     let i = a.length - 1;
//     let j = b.length - 1;

//     let res = '';
//     let carry = 0;

//     while(i >= 0 || j >= 0 || carry > 0) {
//         let bitA = a[i] ? Number(a[i]) : 0;
//         let bitB = b[j] ? Number(b[j]) : 0;

//         let sum = bitA + bitB + carry;

//         res = (sum % 2) + res;       // текущий бит
//         carry = Math.floor(sum / 2); // перенос

//         i--; j--;
//     }

//     return res;
// }