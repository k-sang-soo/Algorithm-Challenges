function sumArray(arr) {
    if(arr.length === 1) {
        return arr[0];
    }
    return sumArray(arr.slice(0, -1)) + arr[arr.length - 1];
}

let arr = [1, 2, 3];
let sum = sumArray(arr);
console.log(sum);

/*
아래와 같은 순서 대로 진행 됨

1.
function sumArray([1, 2, 3]) {
    if(arr.length === 1) {
        return arr[0];
    }
    return sumArray([1, 2]) + 3;
}

2.
function sumArray([1, 2]) {
    if(arr.length === 1) {
        return arr[0];
    }
    return sumArray([1]) + 2;
}

3.
function sumArray([1]) {
    if(arr.length === 1) {
        return arr[0];
    }
    //스탑 함수 종료
}

4.
function sumArray(1) {
    if(arr.length === 1) {
        return arr[0];
    }
    return 1 + 2;
}

5.
function sumArray(3) {
    if(arr.length === 1) {
        return arr[0];
    }
    return 3 + 3;
}

6. sum = 6;
 */