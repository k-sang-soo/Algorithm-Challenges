const arr = ["INT", "INT", "BOOL", "SHORT", "LONG"];
//lengthrk 8이여야하고 그게 아니라면 다음꺼와 합쳐라
//하지만 다음꺼와 합칠 때도 8이 넘어가면 안된다
// 8이 넘어간다면 그만 합치고 패딩을 이용해서 처리

function solution(n) {
    const bites = changeType(n);
    const result = [];
    let next = null;
    bites.forEach((bite, idx) => {
        console.log( 'bite :' ,bite ,'길이 :',bite.length, 'Next :', next);
        if(next === bite) {
            return;
        }
        else if(bite.length === 8) {
            //8바이트면
            console.log('//8바이트면', bite);
            result.push(bite);
        } else if(bite.length < 8) {
            //8바이트 보다 작으면
            console.log('//8바이트 보다 작으면', bite);
            next = bites[idx + 1];
            let total = bite + next;
            if(total.length < 8) {
                //합쳐도 8바이트 보다 작으면
                total += '.'.repeat(8 - total.length);
                result.push(total);
            } else {
                //합쳤는데 8바이트 보다 크다면
                next = null;
                result.push(bite += '.'.repeat(8 - bite.length));
            }
        } else if(bite.length > 8) {
            //8바이트 보다 크면
            console.log('8바이트 보다 크면', bite);
            result.push(bite.slice(0, 8));
            result.push(bite.slice(8, bite.length));
        }
    });
    return result.join();
}

const changeType = (types) => types.map(type => {
    if(type === 'BOOL') {
        return type = '#';
    } else if(type === 'SHORT') {
        return type = '##';
    } else if(type === 'FLOAT') {
        return type = '####';
    } else if(type === 'INT') {
        return type = '########';
    } else if(type === 'LONG') {
        return type = '################';
    }
});

console.log(solution(arr));