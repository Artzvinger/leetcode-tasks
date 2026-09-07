/**
 * Type: Promises / Async / Easy
 * [2621] Sleep
 *
 * 📌 Условие: Напишите асинхронную функцию sleep, которая принимает
 *             положительное целое число millis и "засыпает" на это количество
 *             миллисекунд. Функция должна возвращать промис, который разрешается
 *             (resolve) после указанной задержки [citation:2][citation:11].
 *
 * 🔍 Маркеры: задержка, сон, таймер, асинхронность, setTimeout.
 * 📏 Тип: Promise + setTimeout.
 * 🧠 Идея: Создаем новый промис, который разрешается через setTimeout
 *          после истечения заданного времени. Это классический паттерн
 *          для создания sleep-функции в JavaScript [citation:5][citation:9].
 *
 * ⏱ Сложность: O(1) по времени, O(1) по памяти.
 *
 * @param {number} millis - время в миллисекундах
 * @return {Promise} - промис, который разрешается через millis мс
 */
async function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis));
}
