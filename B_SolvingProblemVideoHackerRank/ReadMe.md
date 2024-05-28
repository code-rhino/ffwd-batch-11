
* [Link to HackerRank Problem](https://www.hackerrank.com/challenges/icecream-parlor/problem?isFullScreen=false)
* [Video](https://vimeo.com/951122737/f6249c4b73?share=copy)

Here are step-by-step instructions for solving the "Ice Cream Parlor" problem on HackerRank:

1. **Understand the Problem**:
   - You have a list of ice cream prices and an amount of money `m`.
   - You need to find two distinct flavors whose prices add up to `m`.
   - You will return the 1-based indices of these two prices.

2. **Choose the Right Programming Language**:
   - Ensure you are coding in the correct language for the problem. In this case, we will use JavaScript.

3. **Set Up the Environment**:
   - Locate the area in the provided code where you need to write your solution. Typically, there will be comments indicating where to insert your code.

4. **Initialize a Hash Map**:
   - Create a new map to keep track of the ice cream prices and their corresponding indices.
     ```javascript
     let map = new Map();
     ```

5. **Iterate Through the List of Prices**:
   - Loop through the array of prices. For each price, calculate the complement (i.e., `m - current price`).
     ```javascript
     for (let i = 0; i < arr.length; i++) {
         let complement = m - arr[i];
     ```

6. **Check for Complement in the Hash Map**:
   - If the complement is already in the map, you have found the two prices that add up to `m`. Return their 1-based indices.
     ```javascript
     if (map.has(complement)) {
         return [map.get(complement) + 1, i + 1];
     }
     ```

7. **Update the Hash Map**:
   - If the complement is not in the map, add the current price and its index to the map.
     ```javascript
     map.set(arr[i], i);
     ```

8. **Return Indices**:
   - If you find the complement during the loop, you will return the indices immediately. If the loop completes without finding such a pair, it means no such pair exists (though the problem guarantees there will be one).

9. **Complete Function**:
   - Implement the complete function based on the above logic.
     ```javascript
     function icecreamParlor(m, arr) {
         let map = new Map();
         for (let i = 0; i < arr.length; i++) {
             let complement = m - arr[i];
             if (map.has(complement)) {
                 return [map.get(complement) + 1, i + 1];
             }
             map.set(arr[i], i);
         }
         return [];
     }
     ```

10. **Test Your Code**:
    - Run the code with different test cases to ensure it works correctly.

11. **Submit Your Code**:
    - Once you are confident your solution is correct and passes all test cases, submit it.


Follow these steps to solve the problem effectively. Happy coding!