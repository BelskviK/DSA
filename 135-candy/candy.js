/**
 * @param {number[]} rs
 * @return {number}
 */
var candy = function(rs) {
    const n = rs.length;
    const cs = Array(n).fill(1);
 
    for (let i = 1; i < n; i++) {
        if (rs[i] > rs[i - 1]) {
            cs[i] = cs[i - 1] + 1;
        }
    } 
    for (let i = n - 2; i >= 0; i--) {
        if (rs[i] > rs[i + 1]) {
            cs[i] = Math.max(cs[i], cs[i + 1] + 1);
        }
    } 
    return cs.reduce((sum, c) => sum + c, 0);
};
