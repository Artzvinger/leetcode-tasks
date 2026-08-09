/**
 * Type: Linked List / Two Pointers / Easy
 * [206] Reverse Linked List
 *
 * 📌 Условие: Дан связный список. Разверните его (измените связи между узлами).
 *
 * 🔍 Маркеры: развернуть, обратный порядок, изменить ссылки next.
 * 📏 Тип: Итеративный (три указателя).
 * 🧠 Идея: Проходим по списку, меняя направление ссылок next на предыдущий узел.
 *          Используем три указателя: current (текущий), prev (предыдущий), next (следующий).
 *
 * ⏱ Сложность: O(n) по времени, O(1) по памяти.
 *
 * @param {ListNode} head - голова связного списка
 * @return {ListNode} - голова развернутого списка
 */
let reverseList = function(head) {
    let current = head;
    let prev = null;
    let next;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};
