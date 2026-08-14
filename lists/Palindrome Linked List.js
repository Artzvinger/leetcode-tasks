/**
 * Type: Linked List / Two Pointers / Easy
 * [234] Palindrome Linked List
 *
 * 📌 Условие: Дан односвязный список. Определите, является ли он палиндромом.
 *
 * 🔍 Маркеры: палиндром, связный список, проверка симметрии.
 * 📏 Тип: Два указателя + разворот второй половины.
 * 🧠 Идея: Находим середину списка через медленный и быстрый указатели.
 *          Разворачиваем вторую половину списка.
 *          Сравниваем первую половину с развернутой второй.
 *          Восстанавливаем список (опционально).
 *
 * ⏱ Сложность: O(n) по времени, O(1) по памяти.
 *
 * @param {ListNode} head - голова связного списка
 * @return {boolean} - true, если список является палиндромом
 */
var isPalindrome = function(head) {
    if (!head || !head.next) return true;

    // 1. Находим середину списка (slow - середина)
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Разворачиваем вторую половину
    let prev = null;
    let current = slow;
    let next;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    let left = head;
    let right = prev;

    while (right) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }

    return true;
};