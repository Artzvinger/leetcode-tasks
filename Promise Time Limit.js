/**
 * Type: Promises / Concurrency / Medium
 * [2637] Promise Time Limit
 *
 * 📌 Условие: Создайте функцию timeLimit, которая принимает асинхронную функцию fn
 *             и время t в миллисекундах. Возвращает новую функцию, которая:
 *             - Если fn завершается за t мс → резолвится с результатом fn
 *             - Если fn выполняется дольше t мс → реджектится со строкой "Time Limit Exceeded"
 *
 * 🔍 Маркеры: таймаут, ограничение времени, Promise.race, гонка промисов.
 * 📏 Тип: Promise.race + setTimeout.
 * 🧠 Идея: Запускаем гонку через Promise.race между оригинальным промисом fn
 *          и промисом-таймером, который реджектится через t мс.
 *          Кто первый завершится — тот и определяет результат.
 *
 * ⏱ Сложность: O(1) по времени (зависит от fn), O(1) по памяти.
 *
 * @param {Function} fn - асинхронная функция
 * @param {number} t - время в миллисекундах
 * @return {Function} - функция с ограничением по времени
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        const originalPromise = fn(...args);
        
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded');
            }, t);
        });
        
        return Promise.race([originalPromise, timeoutPromise]);
    };
};
