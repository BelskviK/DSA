
var findMedianSortedArrays = function(nums1, nums2) {
   if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]; // Asegurar que nums1 sea el más corto
    }

    let x = nums1.length, y = nums2.length;
    let low = 0, high = x;

    while (low <= high) {
        let partitionX = Math.floor((low + high) / 2);
        let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        let maxX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        let minX = (partitionX === x) ? Infinity : nums1[partitionX];

        let maxY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        let minY = (partitionY === y) ? Infinity : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            if ((x + y) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }

};