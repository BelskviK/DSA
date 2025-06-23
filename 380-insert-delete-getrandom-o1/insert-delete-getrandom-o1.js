var RandomizedSet = function() {
    this.map = new Map(); // val -> index
    this.arr = [];        // stores the values
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false;
    
    this.arr.push(val);
    this.map.set(val, this.arr.length - 1);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false;

    const idx = this.map.get(val);
    const lastElement = this.arr[this.arr.length - 1];

    // Swap the element with the last one
    this.arr[idx] = lastElement;
    this.map.set(lastElement, idx);

    // Remove last element
    this.arr.pop();
    this.map.delete(val);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randIndex = Math.floor(Math.random() * this.arr.length);
    return this.arr[randIndex];
};
