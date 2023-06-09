class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    head = null;

    constructor() {
        this.head = null;
        this.count = 0;
    }

    //모든 데이터 출력
    printAll() {
        let currentNode = this.head;
        let text = "[";

        while(currentNode != null) {
            console.log(currentNode);
            text += currentNode.data;
            currentNode = currentNode.next;

            if(currentNode != null) {
                text += ", ";
            }
        }
        text += "]";
        console.log(text);
    }

    //모든 데이터 제거
    clear() {
        this.head = null;
        this.count = 0;
    }

    //인덱스 삽입
    insertAt(index, data) {
        if (index > this.count || index < 0) {
            throw new Error('범위를 넘어갔습니다.');
        }
        let newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let currentNode = this.head;

            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        this.count++;
    }

    //인덱스 마지막 삽입
    insertLast(data) {
        this.insertAt(this.count, data);
    }

    //인덱스 제거
    deleteAt(index) {
        if (index > this.count || index < 0) {
            throw new Error('제거할 범위가 없습니다.');
        }

        let currentNode = this.head;

        if(index === 0) {
            let deleteNode = currentNode;
            this.head = this.head.next;
            this.count--;
            return deleteNode;
        } else {
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            let deleteNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            this.count--;
            return deleteNode;
        }
    }

    //마지막 인덱스 제거
    deleteLast() {
        return this.deleteAt(this.count - 1);
    }

    //특정 인덱스 불러오기
    getNodeAt(index) {
        if (index > this.count || index < 0) {
            throw new Error('제거할 범위가 없습니다.');
        }

        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }
}

export { Node, LinkedList };