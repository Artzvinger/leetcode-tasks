/**
 * Type: Linked List / Math / Medium
 * [2] Add Two Numbers
 *
 * 📌 Условие: Даны два непустых связных списка, представляющих два целых числа.
 *             Цифры хранятся в обратном порядке, и каждый узел содержит одну цифру.
 *             Сложите два числа и верните сумму в виде связного списка.
 *
 * 🔍 Маркеры: связный список, обратный порядок, сложение цифр, перенос (carry).
 * 📏 Тип: Связный список с переносом.
 * 🧠 Идея: Идем по обоим спискам одновременно, складывая цифры и перенос.
 *          Создаем новый список с результатом. В конце проверяем остаток переноса.
 *
 * ⏱ Сложность: O(max(m, n)) по времени, O(max(m, n)) по памяти.
 *
 * @param {ListNode} l1 - первый связный список (цифры в обратном порядке)
 * @param {ListNode} l2 - второй связный список (цифры в обратном порядке)
 * @return {ListNode} - сумма в виде связного списка
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        sum = sum % 10;

        current.next = new ListNode(sum);
        current = current.next;
    }
    return dummy.next;
};