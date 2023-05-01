const nums1 = [1, 2];
const nums2 = [3, 4];

// const numConcat = nums1.concat(nums2, [5, 6], "FIM");
const numConcat2 = [...nums1, 'José', ...nums2, 'Aislan', ...[5,6]]; //spread operation
console.log(numConcat2);