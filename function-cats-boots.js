/* cats & boots.

Ask for example cases!
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

        if (Object.keys(caseMin).length >= 16) {
            break;
        }

        if (obj.A && obj.B && obj.C && obj.D && !caseMin.TTTT ) {
            caseMin.TTTT = num;
        }

        if (!obj.A && obj.B && obj.C && obj.D && !caseMin.FTTT ) {
            caseMin.FTTT = num;
        }
        if (obj.A && !obj.B && obj.C && obj.D && !caseMin.TFTT ) {
            caseMin.TFTT = num;
        }
        if (obj.A && obj.B && !obj.C && obj.D && !caseMin.TTFT ) {
            caseMin.TTFT = num;
        }
        if (obj.A && obj.B && obj.C && !obj.D && !caseMin.TTTF ) {
            caseMin.TTTF = num;
        }

        if (!obj.A && !obj.B && obj.C && obj.D && !caseMin.FFTT ) {
            caseMin.FFTT = num;
        }
        if (!obj.A && obj.B && !obj.C && obj.D && !caseMin.FTFT ) {
            caseMin.FTFT = num;
        }
        if (!obj.A && obj.B && obj.C && !obj.D && !caseMin.FTTF ) {
            caseMin.FTTF = num;
        }
        if (obj.A && !obj.B && !obj.C && obj.D && !caseMin.TFFT ) {
            caseMin.TFFT = num;
        }
        if (obj.A && !obj.B && obj.C && !obj.D && !caseMin.TFTF ) {
            caseMin.TFTF = num;
        }
        if (obj.A && obj.B && !obj.C && !obj.D && !caseMin.TTFF ) {
            caseMin.TTFF = num;
        }
               
        if (!obj.A && !obj.B && !obj.C && obj.D && !caseMin.FFFT ) {
            caseMin.FFFT = num;
        }
        if (!obj.A && !obj.B && obj.C && !obj.D && !caseMin.FFTF ) {
            caseMin.FFTF = num;
        }
        if (!obj.A && obj.B && !obj.C && !obj.D && !caseMin.FTFF ) {
            caseMin.FTFF = num;
        }
        if (obj.A && !obj.B && !obj.C && !obj.D && !caseMin.TFFF ) {
            caseMin.TFFF = num;
        }

        if (!obj.A && !obj.B && !obj.C && !obj.D && !caseMin.FFFF ) {
            caseMin.FFFF = num;
        }  

        num ++;
    }

    return caseMin;
}

allCase();


// Another method doesn't use helper function:
function allCase() {
    let caseMin = {};
    let num = 1;

    while (true) {
        if (Object.keys(caseMin).length >= 16) {
            break;
        }

        if ( (num % 5 === 0) && (/5/.test(num)) && (num % 7 === 0) && (/7/.test(num)) && !caseMin.TTTT ) {
            caseMin.TTTT = num;
        }

        if ( (num % 5 !== 0) && (/5/.test(num)) && (num % 7 === 0) && (/7/.test(num)) && !caseMin.FTTT ) {
            caseMin.FTTT = num;
        }
        if ( (num % 5 === 0) && !(/5/.test(num)) && (num % 7 === 0) && (/7/.test(num)) && !caseMin.TFTT ) {
            caseMin.TFTT = num;
        }
        if ( (num % 5 === 0) && (/5/.test(num)) && (num % 7 !== 0) && (/7/.test(num)) && !caseMin.TTFT ) {
            caseMin.TTFT = num;
        }
        if ( (num % 5 === 0) && (/5/.test(num)) && (num % 7 === 0) && !(/7/.test(num)) && !caseMin.TTTF ) {
            caseMin.TTTF = num;
        }

        if ( (num % 5 !== 0) && !(/5/.test(num)) && (num % 7 === 0) && (/7/.test(num)) && !caseMin.FFTT ) {
            caseMin.FFTT = num;
        }
        if ( (num % 5 !== 0) && (/5/.test(num)) && (num % 7 !== 0) && (/7/.test(num)) && !caseMin.FTFT ) {
            caseMin.FTFT = num;
        }
        if ( (num % 5 !== 0) && (/5/.test(num)) && (num % 7 === 0) && !(/7/.test(num)) && !caseMin.FTTF ) {
            caseMin.FTTF = num;
        }
        if ( (num % 5 === 0) && !(/5/.test(num)) && (num % 7 !== 0) && (/7/.test(num)) && !caseMin.TFFT ) {
            caseMin.TFFT = num;
        }
        if ( (num % 5 === 0) && !(/5/.test(num)) && (num % 7 === 0) && !(/7/.test(num)) && !caseMin.TFTF ) {
            caseMin.TFTF = num;
        }
        if ( (num % 5 === 0) && (/5/.test(num)) && (num % 7 !== 0) && !(/7/.test(num)) && !caseMin.TTFF ) {
            caseMin.TTFF = num;
        }
               
        if ( (num % 5 !== 0) && !(/5/.test(num)) && (num % 7 !== 0) && (/7/.test(num)) && !caseMin.FFFT ) {
            caseMin.FFFT = num;
        }
        if ( (num % 5 !== 0) && !(/5/.test(num)) && (num % 7 === 0) && !(/7/.test(num)) && !caseMin.FFTF ) {
            caseMin.FFTF = num;
        }
        if ( (num % 5 !== 0) && (/5/.test(num)) && (num % 7 !== 0) && !(/7/.test(num)) && !caseMin.FTFF ) {
            caseMin.FTFF = num;
        }
        if ( (num % 5 === 0) && !(/5/.test(num)) && (num % 7 !== 0) && !(/7/.test(num)) && !caseMin.TFFF ) {
            caseMin.TFFF = num;
        }

        if ( (num % 5 !== 0) && !(/5/.test(num)) && (num % 7 !== 0) && !(/7/.test(num)) && !caseMin.FFFF ) {
            caseMin.FFFF = num;
        }  

        num ++;
    }

    return caseMin;
}

allCase();

/* { FFFF: 1,
  TTFF: 5,
  FFTT: 7,
  TFFF: 10,
  FFTF: 14,
  FFFT: 17,
  TTTF: 35,
  FTFF: 51,
  FTTF: 56,
  FTFT: 57,
  TFTT: 70,
  TTFT: 75,
  TFTF: 140,
  TFFT: 170,
  TTTT: 175,
  FTTT: 357 } */
