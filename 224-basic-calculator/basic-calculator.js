/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [];
    let num = 0;
    let result = 0;   // Current accumulated result
    let sign = 1;     // Current sign (+1 or -1)

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (!isNaN(ch) && ch !== " ") {
            // Build the current number (could be multiple digits)
            num = num * 10 + (ch - '0');
        } else if (ch === '+') {
            result += sign * num;
            num = 0;
            sign = 1;
        } else if (ch === '-') {
            result += sign * num;
            num = 0;
            sign = -1;
        } else if (ch === '(') {
            // Push current result and sign onto stack
            stack.push(result);
            stack.push(sign);
            // Reset for inner expression
            result = 0;
            sign = 1;
        } else if (ch === ')') {
            result += sign * num;
            num = 0;
            // Pop sign and previous result
            result *= stack.pop();  // stack.pop() is the sign
            result += stack.pop();  // stack.pop() is the previous result
        }
    }

    // Add last number if any
    if (num !== 0) {
        result += sign * num;
    }

    return result;
};
