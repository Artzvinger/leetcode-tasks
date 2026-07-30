/**
 * Type: Array / Hash Table / Easy
 * [Hack] Sales by Match (Sock Merchant)
 *
 * 📌 Условие: Дан массив чисел, где каждое число - цвет носка.
 *             Найдите количество пар носков одного цвета.
 *
 * 🔍 Маркеры: пары носков, одинаковые значения, количество пар, подсчет.
 * 📏 Тип: Хеш-таблица / Set.
 * 🧠 Идея: Подсчитываем количество каждого цвета. Количество пар = сумма floor(count / 2).
 *          Или используем Set: добавляем носок, если уже есть - удаляем и увеличиваем пары.
 *
 * ⏱ Сложность: O(n) по времени, O(n) по памяти.
 *
 * @param {number[]} socks - массив цветов носков
 * @return {number} - количество пар носков
 */
let socks = [2, 4, 3, 3, 1, 3, 2, 3, 1, 3, 1];

/**
 * Решение 1: сортировка + линейный проход
 * @param {*} socks
 * @returns
 */
function traderSocks(socks) {
	let sortedSocks = [...socks].sort((a, b) => a - b)
	let pairs = 0

	for (let i = 0; i < socks.length; i++) {
		if (sortedSocks[i] === sortedSocks[i + 1]) {
			pairs++
			i++
		}
	}

	return pairs
}
console.log(traderSocks(socks))

/**
 * Решение 2: объект - счетчик
 * @param {*} socks
 * @returns
 */
function traderSocks2(socks) {
	let pairs = 0
	const obj = {}

	for (const sock of socks) {
		obj[sock] = (obj[sock] || 0) + 1
	}

	for (const key in obj) {
		pairs += Math.floor(obj[key] / 2)
	}

	return pairs
}
console.log(traderSocks2(socks))

/**
 * Решение 3: объект - счетчик(через reduce)
 * @param {*} socks
 * @returns
 */
function traderSocks3(socks) {
    let obj = socks.reduce((acc, sock) => {
        acc[sock] = (acc[sock] || 0) + 1;
        return acc; 
    }, {});

    return Object.values(obj).reduce((acc, countSocks) => acc + Math.floor(countSocks / 2), 0);
}
console.log(traderSocks3(socks))

/**
 * Решение 4: Хеш-таблица (Map)
 * @param {*} socks
 * @returns
 */
function traderSocks4(socks) {
    const map = new Map();
    let pairs = 0;

    for (const sock of socks) {
        map.set(sock, (map.get(sock) || 0) + 1);
    }

    for (const countSocks of map.values()) {
        pairs += Math.floor(countSocks / 2);
    }

    return pairs;
}
console.log(traderSocks4(socks))

/**
 * Решение 5: Множество (Set)
 * @param {*} socks
 * @returns
 */
function traderSocks5(socks) {
    const unpaired = new Set();
    let pairs = 0;

    for (const sock of socks) {
        if (unpaired.has(sock)) {
            unpaired.delete(sock);
            pairs++;
        } else {
            unpaired.add(sock);
        }
    }

    return pairs;
}
console.log(traderSocks5(socks))

/**
 * Решение 6: Множество (Set)
 * @param {*} socks
 * @returns
 */
function traderSocks6(socks) {
    const unpaired = new Set();
    let pairs = 0;

    for (const sock of socks) {
        if (unpaired.has(sock)) {
            unpaired.delete(sock);
            pairs++;
        } else {
            unpaired.add(sock);
        }
    }

    return pairs;
}
console.log(traderSocks6(socks))