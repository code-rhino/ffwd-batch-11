### Example 1:

**Input:**

```javascript
s = "abcbba"
```

**Solution Explanation:**

1. **Frequency Map Creation:**

   - Iterate through the string `s` to count the frequency of each character.
   - The frequency map will be:
     ```
     {
       'a': 2,
       'b': 3,
       'c': 1
     }
     ```

2. **Finding the Most Frequent Character:**

   - Iterate through the string again to determine which character has the highest frequency and appears first in the string.
   - The first character is 'a', with a frequency of 2.
   - The second character is 'b', with a frequency of 3 (which is higher than 'a').
   - The third character is 'c', with a frequency of 1 (which is less than 'b').
   - The remaining characters are 'b' and 'a', but we already have 'b' as the most frequent.

**Output:**

```javascript
console.log(mostFrequentChar("abcbba")); // "b"
```

**Explanation:** The character 'b' appears 3 times, which is more than any other character.

### Example 2:

**Input:**

```javascript
s = "aabbcc"
```

**Solution Explanation:**

1. **Frequency Map Creation:**

   - Iterate through the string `s` to count the frequency of each character.
   - The frequency map will be:
     ```
     {
       'a': 2,
       'b': 2,
       'c': 2
     }
     ```

2. **Finding the Most Frequent Character:**

   - Iterate through the string again to determine which character has the highest frequency and appears first in the string.
   - The first character is 'a', with a frequency of 2.
   - The second character is 'a', which has already been counted.
   - The third character is 'b', with a frequency of 2 (same as 'a').
   - The fourth character is 'b', which has already been counted.
   - The fifth character is 'c', with a frequency of 2 (same as 'a' and 'b').
   - The sixth character is 'c', which has already been counted.

**Output:**

```javascript
console.log(mostFrequentChar("aabbcc")); // "a"
```

**Explanation:** The characters 'a', 'b', and 'c' all appear 2 times, but 'a' appears first in the string.

### Example 3:

**Input:**

```javascript
s = "abcd"
```

**Solution Explanation:**

1. **Frequency Map Creation:**

   - Iterate through the string `s` to count the frequency of each character.
   - The frequency map will be:
     ```
     {
       'a': 1,
       'b': 1,
       'c': 1,
       'd': 1
     }
     ```

2. **Finding the Most Frequent Character:**

   - Iterate through the string again to determine which character has the highest frequency and appears first in the string.
   - The first character is 'a', with a frequency of 1.
   - The second character is 'b', with a frequency of 1 (same as 'a').
   - The third character is 'c', with a frequency of 1 (same as 'a' and 'b').
   - The fourth character is 'd', with a frequency of 1 (same as 'a', 'b', and 'c').

**Output:**

```javascript
console.log(mostFrequentChar("abcd")); // "a"
```

**Explanation:** All characters appear only once, so return the first character 'a'.

### Example 4:

**Input:**

```javascript
s = "aabbccc"
```

**Solution Explanation:**

1. **Frequency Map Creation:**

   - Iterate through the string `s` to count the frequency of each character.
   - The frequency map will be:
     ```
     {
       'a': 2,
       'b': 2,
       'c': 3
     }
     ```

2. **Finding the Most Frequent Character:**

   - Iterate through the string again to determine which character has the highest frequency and appears first in the string.
   - The first character is 'a', with a frequency of 2.
   - The second character is 'a', which has already been counted.
   - The third character is 'b', with a frequency of 2 (same as 'a').
   - The fourth character is 'b', which has already been counted.
   - The fifth character is 'c', with a frequency of 3 (which is higher than 'a' and 'b').

**Output:**

```javascript
console.log(mostFrequentChar("aabbccc")); // "c"
```

**Explanation:** The character 'c' appears 3 times, which is more than any other character.

### Summary

- **Example 1:** 'b' appears 3 times, which is more than any other character.
- **Example 2:** 'a', 'b', and 'c' all appear 2 times, but 'a' appears first.
- **Example 3:** All characters appear only once, so the first character 'a' is returned.
- **Example 4:** 'c' appears 3 times, which is more than any other character.

These examples and explanations demonstrate how the solution works and why it correctly identifies the most frequent character in different scenarios.