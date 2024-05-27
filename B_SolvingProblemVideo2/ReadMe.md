**Title: Find the Intersection of Two Arrays**

**Difficulty: Easy**

**Problem Statement:**

Given two arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

**Example 1:**

```
Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
Output: [2]
```

**Example 2:**

```
Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
Output: [9, 4]
```

**Constraints:**

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

### Solution Steps:

1. **Comprehend the Problem:**
   - **Input:** Two arrays `nums1` and `nums2`.
   - **Output:** An array containing the unique intersection of `nums1` and `nums2`.
   - **Constraints:** Each element in the output must be unique, and the order of elements in the output does not matter.

2. **Identify the Nature of the Solution Required:**
   - The problem requires finding common elements between two arrays and ensuring that each element appears only once in the result.

3. **Brainstorm Possible Solutions:**
   - Use a set to keep track of unique elements.
   - Iterate through one array and add its elements to a set.
   - Iterate through the second array and check if each element is in the set. If it is, add it to the result set.

4. **Select and Implement a Solution:**
   - Use two sets to keep track of elements from each array and find their intersection.

**Solution:**

```javascript
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let result = [];

    for (let num of set1) {
        if (set2.has(num)) {
            result.push(num);
        }
    }

    return result;
};
```

5. **Test Your Solution:**
   - Test with various inputs to ensure the solution works correctly.

```javascript
console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]
console.log(intersection([1, 2, 3], [4, 5, 6])); // []
console.log(intersection([1, 2, 2, 3], [2, 3, 3, 4])); // [2, 3]
```

6. **Analyze Solution's Performance:**
   - **Time Complexity:** O(m + n), where `m` is the length of `nums1` and `n` is the length of `nums2`. We iterate through both arrays once.
   - **Space Complexity:** O(m + n), as we store elements from both arrays in sets.

7. **Optimize Your Solution:**
   - This solution is already optimized for both time and space complexity given the problem constraints.
   - Consider edge cases such as arrays with no common elements or arrays with multiple common elements but require uniqueness.

### Detailed Example:

**Input:**

```javascript
nums1 = [1, 2, 2, 1];
nums2 = [2, 2];
```

**Solution Explanation:**

1. **Frequency Map Creation:**

   - Convert `nums1` to a set: `{1, 2}`.
   - Convert `nums2` to a set: `{2}`.

2. **Finding the Intersection:**

   - Iterate through the set `{1, 2}`:
     - Check if `2` is in `{2}`: Yes, add `2` to the result.
     - Check if `1` is in `{2}`: No, do not add `1`.

**Output:**

```javascript
console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
```

**Explanation:** The unique intersection of `nums1` and `nums2` is `[2]`.

