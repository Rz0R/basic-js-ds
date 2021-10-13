const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(list, k) {

  if (list.value === k) {
    list = list.next;
  }

  let currentNode = list;
  let nextNode = currentNode.next;

  while (nextNode) {
    if (nextNode.value === k) {
      currentNode.next = nextNode.next;
    }
    currentNode = currentNode.next;
    nextNode = currentNode.next;
  }

  return list;
}

module.exports = removeKFromList;