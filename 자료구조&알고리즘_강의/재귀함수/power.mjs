//지수함수 밑을 x로, 지수를 n으로 정의
function power(x, n) {
    //수학에서 지수가 0이면 1로 처리
    if(n === 0) return 1;
    return power(x, n -1) * x;
}

console.log(power(2, 5));

/*

1.
function power(2, 5) {
    if(5 === 0) return 1;
    return power(2, 5 - 1) * 2;
}

2.
function power(2, 4) {
    if(4 === 0) return 1;
    return power(2, 4 - 1) * 2;
}

3.
function power(2, 3) {
    if(3 === 0) return 1;
    return power(2, 3 - 1) * 2;
}

4.
function power(2, 2) {
    if(2 === 0) return 1;
    return power(2, 2 - 1) * 2;
}

5.
function power(2, 1) {
    if(1 === 0) return 1;
    return power(2, 1 - 1) * 2;
}

6.
function power(2, 0) {
    if(0 === 0) return 1;
}
//함수 종료

7.
6에서 1을 return 해줬으므로
5번에 함수를 다시 호출해서 1 * 2 를 실행하고 종료 후 4번 함수 호출

8.
5번에 함수 리턴 값인 2를 가지고 옴
2 * 2를 실행하고 종료 후 3번 함수 호출

9.
4번에 함수 리턴 값인 4를 가지고 옴
4 * 2를 실행하고 종료 후 2번 함수 호출

10.
3번에 함수 리턴 값인 8를 가지고 옴
8 * 2를 실행하고 종료 후 1번 함수 호출

11.
2번 함수 리턴 값인 16을 가지고 옴
16 * 2를 실행하고 종료

12.
최종적으로 리턴 값 32을 가지게 됨.
더 이상 실행 할 함수가 없으므로 스택에서 빠져나옴

 */