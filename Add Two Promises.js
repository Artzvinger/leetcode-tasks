/**
 * Type: Promises / Async / Easy
 * [2723] Add Two Promises
 *
 * 📌 Условие: Даны два промиса, которые разрешаются числами.
 *             Верните новый промис, который разрешается суммой этих чисел.
 *
 * 🔍 Маркеры: промисы, сумма, асинхронность, Promise.all.
 * 📏 Тип: Promise.all + async/await.
 * 🧠 Идея: Используем Promise.all, чтобы дождаться обоих промисов параллельно,
 *          затем складываем результаты. Это самый быстрый и чистый способ.
 *
 * ⏱ Сложность: O(1) по времени, O(1) по памяти.
 *
 * @param {Promise} promise1 - промис, разрешающийся числом
 * @param {Promise} promise2 - промис, разрешающийся числом
 * @return {Promise<number>} - промис с суммой чисел
 */
var addTwoPromises = async function(promise1, promise2) {
    const [value1, value2] = await Promise.all([promise1, promise2]);
    return value1 + value2;
};
