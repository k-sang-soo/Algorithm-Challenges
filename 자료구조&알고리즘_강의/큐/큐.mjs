/*
enqueue - 데이터 삽입
dequeue - 데이터 제거
front - 맨 처음 들어간 데이터 참조
isEmpty - 비었는 지 확인
 */

import { DoublyLinkedList } from '../연결리스트/이중연결리스트.mjs';

class Queue {
    constructor() {
        this.list = new DoublyLinkedList();
    }

    enqueue(data) {
        this.list.insertAt(0, data);
    }

    dequeue() {
        try {
            return this.list.deleteLast();
        } catch (e) {
            return null;
        }
    }

    front() {
        return this.list.tail;
    }

    isEmpty() {
        return this.list.count === 0;
    }
}

export { Queue };
