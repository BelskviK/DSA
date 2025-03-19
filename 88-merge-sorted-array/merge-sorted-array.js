var merge = function (nums1, m, nums2, n) {
  let i = m - 1;  
  let j = n - 1; 
  let k = m + n - 1;  

  // Merge from the end to avoid overwriting elements in nums1
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]; // Place larger element at end
      i--;
    } else {
      nums1[k] = nums2[j]; // Place larger element at end
      j--;
    }
    k--;
  }

  // If nums2 still has remaining elements, copy them (nums1 is already in place)
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};
