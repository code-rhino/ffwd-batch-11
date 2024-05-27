const intersection = (nums1, nums2) => {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let result = [];

    for (let num of set1) {
        if (set2.has(num)) {
            result.push(num);
        }
    }

    return result;
}

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]
console.log(intersection([1, 2, 3], [4, 5, 6])); // []
console.log(intersection([1, 2, 2, 3], [2, 3, 3, 4])); // [2, 3]