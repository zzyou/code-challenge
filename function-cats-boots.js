/* cats & boots.

In interview, ask for example cases!
Use helper functions.

I input: num
O output: 
    - (A). num divisible by 5, or (B). it has 5 => boots
    - (C). num divisible by 7, or (D). it has 7 => cats
    - num % 5 or has 5, &&, % 7 or has 7 => boots & cats
    - else return num
C constraints: 
    - Time: O(1)
    - Auxiliary Space: O(1)
E edge cases:

Example cases:
2 => 2
17 => cats
70 => cats & boots
35 => cats & boots
*/

function catsBoots(num) {
    if ( ( num % 5 === 0 
        || /5/.test(num) )
        && ( num % 7 === 0 
        || num.toString().split('').includes('7') ) ) {
            return 'cats & boots';
        }

    else if ( num % 5 === 0 
        || /5/.test(num) ) {
            return 'boots';
        }
    
    else if ( num % 7 === 0 
        || num.toString().split('').includes('7') ) {
            return 'cats';
        }

    return num;
}


/* 
%5  w/5 %7  w/7
(A) (B) (C) (D) - for all 16 test cases, get the lowest positive number.
F    F   F   F => 1
F    T   F   T => 57
...
T    T   T   T => 175
use while loop, because you don't know where to end.
*/

function objCondition (num) {
    let obj = {};

    if ( num % 5 === 0 ) {
        obj.A = true;
    } else {
        obj.A = false;
    }

    if ( /5/.test(num) ) {
        obj.B = true;
    } else {
        obj.B = false;
    }

    if ( num % 7 === 0 ) {
        obj.C = true;
    } else {
        obj.C = false;
    }

    if ( /7/.test(num) ) {
        obj.D = true;
    } else {
        obj.D = false;
    }

    return obj;
}


function allCase() {
    let caseMin = {};
    let num = 1;

    while (true) {
        let obj = objCondition(num);

        if (Object.keys(caseMin).length === 16) {
            break;
        }

        if (obj.A && obj.B && obj.C && obj.D
            && (caseMin.TTTT === undefined) ) {
                caseMin.TTTT = num;
        }

        if (!obj.A && obj.B && obj.C && obj.D
            && (caseMin.FTTT === undefined) ) {
                caseMin.FTTT = num;
        }
        if (obj.A && !obj.B && obj.C && obj.D
            && (caseMin.TFTT === undefined) ) {
                caseMin.TFTT = num;
        }
        if (obj.A && obj.B && !obj.C && obj.D
            && (caseMin.TTFT === undefined) ) {
                caseMin.TTFT = num;
        }
        if (obj.A && obj.B && obj.C && !obj.D
            && (caseMin.TTTF === undefined) ) {
                caseMin.TTTF = num;
        }

        if (!obj.A && !obj.B && obj.C && obj.D
            && (caseMin.FFTT === undefined) ) {
                caseMin.FFTT = num;
        }
        if (!obj.A && obj.B && !obj.C && obj.D
            && (caseMin.FTFT === undefined) ) {
                caseMin.FTFT = num;
        }
        if (!obj.A && obj.B && obj.C && !obj.D
            && (caseMin.FTTF === undefined) ) {
                caseMin.FTTF = num;
        }
        if (obj.A && !obj.B && !obj.C && obj.D
            && (caseMin.TFFT === undefined) ) {
                caseMin.TFFT = num;
        }
        if (obj.A && !obj.B && obj.C && !obj.D
            && (caseMin.TFTF === undefined) ) {
                caseMin.TFTF = num;
        }
        if (obj.A && obj.B && !obj.C && !obj.D
            && (caseMin.TTFF === undefined) ) {
                caseMin.TTFF = num;
        }
               
        if (!obj.A && !obj.B && !obj.C && obj.D
            && (caseMin.FFFT === undefined) ) {
                caseMin.FFFT = num;
        }
        if (!obj.A && !obj.B && obj.C && !obj.D
            && (caseMin.FFTF === undefined) ) {
                caseMin.FFTF = num;
        }
        if (!obj.A && obj.B && !obj.C && !obj.D
            && (caseMin.FTFF === undefined) ) {
                caseMin.FTFF = num;
        }
        if (obj.A && !obj.B && !obj.C && !obj.D
            && (caseMin.TFFF === undefined) ) {
                caseMin.TFFF = num;
        }

        if (!obj.A && !obj.B && !obj.C && !obj.D 
            && (caseMin.FFFF === undefined) ) {
                caseMin.FFFF = num;
        }  

        num ++;
    }

    return caseMin;
};

allCase();

