**Title: Find the Intersection of Two Arrays**

**Difficulty: Easy**

**Problem Statement:**

Given two arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

**Example 1:**

**Input:**

```javascript
nums1 = [1, 2, 2, 1];
nums2 = [2, 2];
```

**Solution Explanation:**

1. **Convert Arrays to Sets:**

   - Convert `nums1` to a set to eliminate duplicates:
     ```
     set1 = {1, 2}
     ```
   - Convert `nums2` to a set to eliminate duplicates:
     ```
     set2 = {2}
     ```

2. **Finding the Intersection:**

   - Iterate through `set1` and check if each element is in `set2`.
   - The first element is `1`, which is not in `set2`.
   - The second element is `2`, which is in `set2`, so add `2` to the result.

**Output:**

```javascript
console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
```

**Explanation:** The unique intersection of `nums1` and `nums2` is `[2]`.

### Example 2:

**Input:**

```javascript
nums1 = [4, 9, 5];
nums2 = [9, 4, 9, 8, 4];
```

**Solution Explanation:**

1. **Convert Arrays to Sets:**

   - Convert `nums1` to a set:
     ```
     set1 = {4, 9, 5}
     ```
   - Convert `nums2` to a set:
     ```
     set2 = {9, 4, 8}
     ```

2. **Finding the Intersection:**

   - Iterate through `set1` and check if each element is in `set2`.
   - The first element is `4`, which is in `set2`, so add `4` to the result.
   - The second element is `9`, which is in `set2`, so add `9` to the result.
   - The third element is `5`, which is not in `set2`.

**Output:**

```javascript
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
```

**Explanation:** The unique intersection of `nums1` and `nums2` is `[4, 9]`.

### Example 3:

**Input:**

```javascript
nums1 = [1, 2, 3];
nums2 = [4, 5, 6];
```

**Solution Explanation:**

1. **Convert Arrays to Sets:**

   - Convert `nums1` to a set:
     ```
     set1 = {1, 2, 3}
     ```
   - Convert `nums2` to a set:
     ```
     set2 = {4, 5, 6}
     ```

2. **Finding the Intersection:**

   - Iterate through `set1` and check if each element is in `set2`.
   - The first element is `1`, which is not in `set2`.
   - The second element is `2`, which is not in `set2`.
   - The third element is `3`, which is not in `set2`.

**Output:**

```javascript
console.log(intersection([1, 2, 3], [4, 5, 6])); // []
```

**Explanation:** There are no common elements between `nums1` and `nums2`, so the result is an empty array `[]`.

### Example 4:

**Input:**

```javascript
nums1 = [1, 2, 2, 3];
nums2 = [2, 3, 3, 4];
```

**Solution Explanation:**

1. **Convert Arrays to Sets:**

   - Convert `nums1` to a set:
     ```
     set1 = {1, 2, 3}
     ```
   - Convert `nums2` to a set:
     ```
     set2 = {2, 3, 4}
     ```

2. **Finding the Intersection:**

   - Iterate through `set1` and check if each element is in `set2`.
   - The first element is `1`, which is not in `set2`.
   - The second element is `2`, which is in `set2`, so add `2` to the result.
   - The third element is `3`, which is in `set2`, so add `3` to the result.

**Output:**

```javascript
console.log(intersection([1, 2, 2, 3], [2, 3, 3, 4])); // [2, 3]
```

**Explanation:** The unique intersection of `nums1` and `nums2` is `[2, 3]`.

### Summary

- **Example 1:** The unique intersection of `[1, 2, 2, 1]` and `[2, 2]` is `[2]`.
- **Example 2:** The unique intersection of `[4, 9, 5]` and `[9, 4, 9, 8, 4]` is `[4, 9]`.
- **Example 3:** There are no common elements between `[1, 2, 3]` and `[4, 5, 6]`, so the result is `[]`.
- **Example 4:** The unique intersection of `[1, 2, 2, 3]` and `[2, 3, 3, 4]` is `[2, 3]`.

