/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return [];

    // Step 1: Sort intervals by starting time
    intervals.sort((a, b) => a[0] - b[0]);

    let merged = [];
    let current = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let next = intervals[i];

        // Step 2: Check if current interval overlaps with next
        if (next[0] <= current[1]) {
            // Merge them by extending the end
            current[1] = Math.max(current[1], next[1]);
        } else {
            // No overlap, push current to merged and move to next
            merged.push(current);
            current = next;
        }
    }

    // Push the last interval
    merged.push(current);

    return merged;
};
