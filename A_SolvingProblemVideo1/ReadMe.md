**Title: Most Repeated Character**

**Difficulty: Easy**

**Problem Statement:**

Given a string `s`, find the character that appears the most frequently in the string. If there are multiple characters with the same maximum frequency, return the one that appears first in the string.

**Example 1:**

```
Input: s = "abcbba"
Output: "b"
Explanation: The character 'b' appears 3 times, which is more than any other character.
```

**Example 2:**

```
Input: s = "aabbcc"
Output: "a"
Explanation: The characters 'a', 'b', and 'c' all appear 2 times, but 'a' appears first in the string.
```

**Example 3:**

```
Input: s = "abcd"
Output: "a"
Explanation: All characters appear only once, so return the first character.
```

**Constraints:**

- `1 <= s.length <= 10^5`
- `s` consists of printable ASCII characters.

### Solution Steps:

1. **Comprehend the Problem:**
   - You need to find the character that appears the most frequently in the given string `s`.
   - If multiple characters have the same frequency, return the one that appears first in the string.

2. **Identify the Nature of the Solution Required:**
   - Use a hash map (object) to count the frequency of each character.
   - Traverse the string again to find the character with the highest frequency that appears first.

3. **Brainstorm Possible Solutions:**
   - Use a single pass to build the frequency map.
   - Use a second pass to determine the most frequent character that appears first.

4. **Select and Implement a Solution:**
   - Implement the solution using a hash map for counting and a loop for finding the result.

**Solution:**

```javascript
var mostFrequentChar = function(s) {
    let frequencyMap = {};
    let maxFreq = 0;
    let maxChar = '';

    // Build frequency map
    for (let char of s) {
        if (frequencyMap[char] == null) {
            frequencyMap[char] = 0;
        }
        frequencyMap[char]++;
    }

    // Find the most frequent character that appears first
    for (let char of s) {
        if (frequencyMap[char] > maxFreq) {
            maxFreq = frequencyMap[char];
            maxChar = char;
        }
    }

    return maxChar;
};
```

5. **Test Your Solution:**
   - Test with various inputs to ensure the solution works correctly.

```javascript
console.log(mostFrequentChar("abcbba")); // "b"
console.log(mostFrequentChar("aabbcc")); // "a"
console.log(mostFrequentChar("abcd")); // "a"
console.log(mostFrequentChar("aabbccc")); // "c"
```

6. **Analyze Solution's Performance:**
   - The time complexity is O(n) because we iterate through the string twice.
   - The space complexity is O(1) (considering the hash map will have at most 256 entries for ASCII characters).

7. **Optimize Your Solution:**
   - This solution is already efficient for both time and space complexity given the problem constraints.

