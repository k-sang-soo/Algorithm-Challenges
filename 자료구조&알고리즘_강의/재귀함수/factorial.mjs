function factorial(number) {
    if(number === 1 || number === 0) {
        return 1;
    }
    return number * factorial(number - 1);
}

console.log(factorial(3));

/*

1.
function factorial(3) {
    if(3 === 1 || 3 === 0) {
        return 1;

    }
    return 3 * factorial(2); // 첫번째 호출에서 3에 factorial(2)의 결과를 곱한 결과를 반환해야 하므로 대기
}

2.
function factorial(2) {
    if(2 === 1 || 2 === 0) {
        return 1;
    }
    return 2 * factorial(1); // 두번째 호출에서 2에 factorial(1)의 결과를 곱한 결과를 반환해야 하므로 대기
}

3.
function factorial(1) {
    if(1 === 1 || 1 === 0) {
        return 1; // 세번째 호출에서 1을 반환하며 함수 종료
    }
}

4.
세번째 호출이 종료되면 두번째 호출로 돌아가서, 그 곳에서 factorial(1)이 1이라는 것을 알게 되므로
2 * 1을 계산하여 2를 반환하며 두번째 호출이 종료됩니다.

5.
두번째 호출이 종료되면 첫번째 호출로 돌아가서, 그 곳에서 factorial(2)가 2라는 것을 알게 되므로
3 * 2를 계산하여 6을 반환하며 첫번째 호출이 종료됩니다.

6. result = 6;
따라서, factorial(3)의 결과는 6입니다.

 */