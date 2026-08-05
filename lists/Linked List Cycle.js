/**
 * Type: Linked List / Two Pointers (Floyd's Cycle Detection) / Easy
 * [141] Linked List Cycle
 *
 * 📌 Условие: Определите, есть ли в связном списке цикл (кольцо).
 *
 * 🔍 Маркеры: цикл, кольцо, зацикленный список, Floyd's algorithm.
 * 📏 Тип: Два указателя (медленный и быстрый).
 * 🧠 Идея: Используем алгоритм Флойда ("черепаха и заяц").
 *          Медленный указатель двигается на 1 шаг, быстрый на 2 шага.
 *          Если они встретятся - цикл есть. Если быстрый доходит до null - цикла нет.
 *
 * ⏱ Сложность: O(n) по времени, O(1) по памяти.
 *
 * @param {ListNode} head - голова связного списка
 * @return {boolean} - true, если цикл есть; false, если нет
 */
function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }
    return false;
}