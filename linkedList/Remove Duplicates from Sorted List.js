/**
 * Type: Linked List / Easy
 * [83] Remove Duplicates from Sorted List
 *
 * 📌 Условие: Дан отсортированный связный список. Удалите все дубликаты,
 *             чтобы каждый элемент встречался только один раз.
 *
 * 🔍 Маркеры: отсортированный список, удалить дубликаты, связный список.
 * 📏 Тип: Связный список.
 * 🧠 Идея: Проходим по списку. Если текущий узел имеет то же значение,
 *          что и следующий, пропускаем следующий узел.
 *
 * ⏱ Сложность: O(n) по времени, O(1) по памяти.
 *
 * @param {ListNode} head - голова связного списка
 * @return {ListNode} - голова списка без дубликатов
 */
var deleteDuplicates = function(head) {
    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};