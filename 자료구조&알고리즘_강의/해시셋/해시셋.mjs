import { HashTable } from "../해시테이블/해시테이블.mjs";

class HashSet {
    constructor(props) {
        this.hashTable = new HashTable();
    }

    add(data) {
        if(this.hashTable.get(data) === null) {
            //value는 꼭 -1이 아니어도 상관없음
            this.hashTable.set(data, -1);
        }
    }

    isContain(data) {
        return this.hashTable.get(data) !== null;
    }

    remove(data) {
        this.hashTable.remove(data);
    }

    clear() {
        for(let i = 0; i < this.hashTable.arr.length; i++) {
            this.hashTable.arr[i].clear();
        }
    }

    isEmpty() {
        let empty = true;
        for(let i = 0; i < this.hashTable.arr.length; i++) {
            if(this.hashTable.arr[i].count > 0) {
                empty = false;
                break;
            }
        }

        return empty;
    }

    printAll() {
        for(let i = 0; i < this.hashTable.arr.length; i++) {
            let currentNode = this.hashTable.arr[i].head;
            while(currentNode !== null) {
                console.log(currentNode.data.key);
                currentNode = currentNode.next;
            }
        }
    }
}

export { HashSet };