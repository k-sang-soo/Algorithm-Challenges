function myFunction(number) {
    if(number > 3) return;
    console.log(number);
    return myFunction(number + 1);
}

myFunction(1);

/*

1.
function myFunction(1) {
    if(1 > 3) return;
    console.log(1); // 여기서 1을 출력하게 됩니다.
    return myFunction(1 + 1); // myFunction(2)를 호출합니다.
}

2.
function myFunction(2) {
    if(2 > 3) return;
    console.log(2); // 여기서 2를 출력하게 됩니다.
    return myFunction(2 + 1); // myFunction(3)를 호출합니다.
}

3.
function myFunction(3) {
    if(3 > 3) return;
    console.log(3); // 여기서 3을 출력하게 됩니다.
    return myFunction(3 + 1); // myFunction(4)를 호출합니다.
}

4.
function myFunction(4) {
    if(4 > 3) return; // 이 조건이 참이므로 여기서 함수를 종료하며, 아무것도 출력하지 않습니다.
}

 */