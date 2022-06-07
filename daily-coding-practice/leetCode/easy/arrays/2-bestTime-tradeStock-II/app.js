/*
Best Time to Buy and Sell Stock II

Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:
Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
  Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

Example 2:
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
  Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
  engaging multiple transactions at the same time. You must sell before buying again.

Example 3:
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

Constraints:
1 <= prices.length <= 3 * 10 ^ 4
0 <= prices[i] <= 10 ^ 4
*/

/*
 * @param {number[]} prices
 * @return {number}
 */

/*
PSEUDOCODE - PLAN

Loop through the array.
If the next index is lower than the current index & you have stock, sell the stock.
  Calculate the profit & store it in the profit variable.
If the next index is higher than the current index, buy at the current index rate.
The index of the loop should compare to the previous index.
If the previous index is lower than the current, then add the difference to the max variable.
If the previous index is higher than the current, then don't add anything to the max variable.

Used this for the solution
https://javascript.plainenglish.io/algorithm-best-time-to-buy-and-sell-stock-bf5309195a4b

Should go back and write this from scratch later

*/

function maxProfit(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    console.log(prices);
    console.log(prices[i]);
    console.log(prices[i - 1]);
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
      console.log(maxProfit);
    }
  }
  return maxProfit;
}

// let array1 = [7, 1, 5, 3, 6, 4]
// console.log(maxProfit(array1));
let array2 = [1, 2, 3, 4, 5];
console.log(maxProfit(array2));
// let array3 = [7, 6, 4, 3, 1]
// console.log(maxProfit(array3));
// let array4 = [2, 1, 2, 0, 1]
// console.log(maxProfit(array4));
