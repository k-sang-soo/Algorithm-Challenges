const arr = ["INT", "INT", "BOOL", "SHORT", "LONG"];
/* const arr = ["INT", "SHORT", "FLOAT", "INT","BOOL"]; */
/* const arr = ["FLOAT", "SHORT", "BOOL", "BOOL", "BOOL", "INT"]; */
/* const arr = ["BOOL", "LONG", "SHORT", "LONG", "BOOL", "LONG", "BOOL", "LONG", "SHORT", "LONG", "LONG"]; */

//lengthrk 8이여야하고 그게 아니라면 다음꺼와 합쳐라
//하지만 다음꺼와 합칠 때도 8이 넘어가면 안된다
// 8이 넘어간다면 그만 합치고 패딩을 이용해서 처리

function solution(n) {
    const memories = changeType(n);
    const result = [];
    let totalMemory = 0;
    let next = null;
    let nextIdx = 0;
    let total = null;
    memories.forEach((memory, idx) => {
        console.log( 'type :' ,memory.type ,'길이 :',memory.bite, 'Next :', next, 'nextIdx :', nextIdx, 'idx :', idx);
        if(idx <= nextIdx && nextIdx !== 0) {
            //현재 idx보다 작거나 같으면 안된다.
            //합친 인덱스는 아무것도 하지 않고 넘김
            console.log('합친 인덱스는 아무것도 하지 않고 넘김', 'memory : ', memory, 'next :', next );
            next = null
            return;
        } else if(memory.bite.length === 8) {
            //8바이트면
            console.log('//8바이트면', memory.bite);
            result.push(memory.bite);
        } else if(memory.bite.length < 8) {
            //8바이트 보다 작으면
            console.log('//8바이트 보다 작으면', memory.bite);
            nextIdx = idx + 1;
            next = memories[nextIdx];
            total = next ? memory.bite + next.bite : memory.bite;
            //next 가 있어야하고
            //total length가 8 보다 크면 안됨
            //8보다 크기 전까지는 다음 요소들을 합쳐줘야함
            while (total.length < 8 && next) {
                nextIdx += 1;
                if(memories[nextIdx].bite.length + total.length > 8) {
                    nextIdx -= 1;
                    break;
                };
                total += memories[nextIdx].bite;
                console.log('반복 total', total, 'nextIdx', nextIdx);
            }
            console.log('반복 끝 ', total);

            if(total.length > 8 || !next) {
                //합쳤는데 8바이트 보다 크다면 or 다음 메모리가 없을 때
                console.log('합쳤는데 8바이트 보다 크다면 or 다음 메모리가 없을 때');
                next = null;
                nextIdx = 0;
                result.push(memory.bite += '.'.repeat(8 - memory.bite.length));
            } else if(total.length === 8) {
                // 합친 길이가 8로 맞아 떨어질 때
                console.log('합친 길이가 8로 맞아 떨어질 때');
                result.push(total);
            } else if(total.length < 8) {
                //합쳐도 8바이트 보다 작으면
                console.log('합쳐도 8바이트 보다 작으면');
                if(next.type === 'SHORT' || next.type === 'FLOAT') {
                    //BOOL을 제외한 8바이트보다 작은 타입들이 연속될 경우에는 사이에 패딩(.)을 붙여야 합니다.
                    console.log('BOOL을 제외한 8바이트보다 작은 타입들이 연속');
                    total = memory.bite + '.';
                    if(next.type === 'SHORT') {
                        //SHORT는 2배수
                        console.log('SHORT는 2배수');
                        while(total.length % 2 !== 0) {
                            total += '.';
                        }
                        total = total + next.bite + '.'.repeat(8 - (total.length + next.bite.length));
                        result.push(total);
                    } else if (next.type === 'FLOAT') {
                        // FLOAT는 4배수
                        console.log('FLOAT는 4배수');
                        while(total.length % 4 !== 0) {
                            total += '.';
                        }
                        total = total + next.bite + '.'.repeat(8 - (total.length + next.bite.length));
                        result.push(total);
                    }
                } else {
                    total += '.'.repeat(8 - total.length);
                    result.push(total);
                }
            }
        } else if(memory.bite.length > 8) {
            //8바이트 보다 크면
            console.log('8바이트 보다 크면', memory.bite);
            result.push(memory.bite.slice(0, 8));
            result.push(memory.bite.slice(8, memory.bite.length));
        }
    });

    Object.values(result).forEach(el => {
        totalMemory += el.length;
    });

    console.log('totalMemory', totalMemory);
    return totalMemory > 128 ?  'HALT' : result.join();
}

const changeType = (types) => types.map(type => {
    if(type === 'BOOL') {
        return {
            type: 'BOOL',
            bite: '#'
        };
    } else if(type === 'SHORT') {
        return {
            type: 'SHORT',
            bite: '##'
        };
    } else if(type === 'FLOAT') {
        return {
            type: 'FLOAT',
            bite: '####'
        };
    } else if(type === 'INT') {
        return {
            type: 'INT',
            bite: '########'
        };
    } else if(type === 'LONG') {
        return {
            type: 'LONG',
            bite: '################'
        };
    }
});

console.log(solution(arr));