/*
push - 데이터 삽입
pop - 데이터 제거
peek - 데이터 참조
isEmpty - 비었는 지 체크
 */

import { LinkedList } from "../연결리스트/연결리스트.mjs";

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(data) {
        this.list.insertAt(0, data);
    }

    pop() {
        try {
            return this.list.deleteAt(0);
        } catch (e) {
            return null;
        }
    }

    peek() {
        return this.list.getNodeAt(0);
    }

    isEmpty() {
        return (this.list.count === 0);
    }

    printAllStack() {
        this.list.printAll();
    }
}

export { Stack };