const mostFrequentChar = (s) => {
    let frequencyMap = {};  // Create a hash map to count character frequencies
    let maxFreq = 0;        // Variable to store the maximum frequency
    let maxChar = '';       // Variable to store the character with the maximum frequency

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

    return maxChar; // Return the character with the highest frequency
}

console.log(mostFrequentChar("abcbba")); // "b"
console.log(mostFrequentChar("aabbcc")); // "a"
console.log(mostFrequentChar("abcd")); // "a"
console.log(mostFrequentChar("aabbccc")); // "c"