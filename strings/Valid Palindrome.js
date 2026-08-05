/**
 * Type: String / Two Pointers / Easy
 * [125] Valid Palindrome
 *
 * 📌 Условие: Дана строка s. Проверьте, является ли она палиндромом.
 *             Учитывайте только буквенно-цифровые символы и игнорируйте регистр.
 *
 * 🔍 Маркеры: палиндром, игнорировать пробелы и регистр, только буквы и цифры.
 * 📏 Тип: Два указателя (Two Pointers).
 * 🧠 Идея: Удаляем пробелы, ставим указатели в начало и конец строки.
 *          Сравниваем символы в нижнем регистре. Если не совпадают - false.
 *
 * ⏱ Сложность: O(n) по времени, O(n) по памяти (из-за replaceAll).
 *
 * @param {string} str - входная строка
 * @return {boolean} - true, если строка является палиндромом
 */
function validPalindrome(str){
    str = str.replace(/[^a-zA-Z0-9]/g, '');
    let i = 0;
    let j = str.length - 1;
    while (i < j){
        if (str[i].toLowerCase() !== str[j].toLowerCase()){
            return false;
        }
        i++;
        j--;
    }
    return true;
}