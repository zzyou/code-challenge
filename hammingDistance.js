/* The Hamming distance between two integers is 
the number of positions at which the corresponding bits are different.
Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:
Input: x = 1, y = 4
Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different. 

input: 93, 73
output: 7
*/

var hammingDistance = function(x, y) {
    let x2 = (x).toString(2);
    let y2 = (y).toString(2);
    let xLen = x2.length;
    let yLen = y2.length;
    let xN = '';
    let yN = '';
    let count = 0;
    if (xLen < yLen) {
        for (let i = 0; i < yLen; i++) {
            if (i < yLen - xLen) {
                xN += '0';
            } else {
                xN += x2[i - yLen + xLen];
            }
            if (xN[i] !== y2[i]) {
                count ++;
            }
        }
    }
    else {
        for (let i = 0; i < xLen; i++) {
            if (i < xLen - yLen) {
                yN += '0';
            } else {
                yN += y2[i - xLen + yLen];
            }
            if (x2[i] !== yN[i]) {
                count ++;
            }
        }
    }
    return count; 
};
