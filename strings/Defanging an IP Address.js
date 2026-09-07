/**
 * Type: String / Easy
 * [1108] Defanging an IP Address
 *
 * 📌 Условие: Дана строка IP-адреса. Замените каждую точку '.' на "[.]".
 *
 * 🔍 Маркеры: IP-адрес, заменить точки, defang.
 * 📏 Тип: Строки (replace).
 * 🧠 Идея: Используем replaceAll или split + join для замены '.' на "[.]".
 *
 * ⏱ Сложность: O(n) по времени, O(n) по памяти.
 *
 * @param {string} address - IP-адрес
 * @return {string} - дефанговый IP-адрес
 */
var defangIPaddr = function(address) {
    return address.split('.').join('[.]');
};