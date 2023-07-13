/***
 *
 * @param count 움직일 갯수
 * @param from 어디서 부터 이동할껀지
 * @param to 어디로 이동할껀지
 * @param temp 경유할 위치
 */
function hanoi(count, from, to, temp) {
  //옮길 원반이 없으면 종료
  if (count === 0) return;
  hanoi(count - 1, from, temp, to);
  console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, temp, to, from);
}

hanoi(3, 'A', 'C', 'B');

/*

1.
function hanoi(3, A, C, B) {
  if (3 === 0) return;
  hanoi(3 - 1, A, C, B);
  console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, temp, to, from);
}

if문이 거짓이기 때문에 넘어가고
hanoi(3 - 1, A, C, B); 호출

2.
function hanoi(2, A, C, B) {
  if (2 === 0) return;
  hanoi(2 - 1, A, C, B);
  console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, temp, to, from);
}

if문이 거짓이기 때문에 넘어가고
hanoi(2 - 1, A, C, B); 호출

3.
function hanoi(1, A, C, B) {
  if (1 === 0) return;
  hanoi(1 - 1, from, temp, to);
  console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, temp, to, from);
}

if문이 거짓이기 때문에 넘어가고
hanoi(1 - 1, A, C, B); 호출

4.
function hanoi(0, A, C, B) {
  if (0 === 0) return;
  //함수 호출 종료
  hanoi(0 - 1, from, temp, to);
  console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, temp, to, from);
}

5.
function hanoi(1, A, C, B) {
  if (1 === 0) return;
  hanoi(1 - 1, from, temp, to);
  console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, temp, to, from);
}

 */
