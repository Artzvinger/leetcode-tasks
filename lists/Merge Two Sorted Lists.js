/**
 * Type: Linked List / Two Pointers / Easy
 * [21] Merge Two Sorted Lists
 *
 * 📌 Условие: Объединить два отсортированных связных списка в один новый отсортированный список.
 *
 * 🔍 Маркеры: два списка, отсортированные, объединение, связный список.
 * 📏 Тип: Два указателя.
 * 🧠 Идея: Используем фиктивный узел (dummyHead). Сравниваем значения узлов,
 *          меньший добавляем в результат, двигаем указатель. В конце прикрепляем остатки.
 *
 * ⏱ Сложность: O(m + n) по времени, O(1) по памяти.
 *
 * @param {ListNode} l1 - голова первого отсортированного списка
 * @param {ListNode} l2 - голова второго отсортированного списка
 * @return {ListNode} - голова объединенного отсортированного списка
 */
function mergeTwoLists(l1, l2) {
    let dummyHead = new ListNode(-1);
    let current = dummyHead;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 !== null ? l1 : l2;
    return dummyHead.next;
}