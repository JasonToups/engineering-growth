var prices = [1201,101,1198,299,298,400,100,500,1200,1,50]

function BestTradeAmount(prices){
//write an efficient algorithm that calculates the most amount of money you could make in any one transaction (one buy and one sell operation) given the prices and no short selling (must buy before you sell)
  
// we need to return 1100

let profit = 0;
  
  for (let i = 0; i < prices.length; i++) {
      // console.log(` ${prices[i]}`);
    for (let j = i + 1; j < prices.length; j++){
      // console.log(` ${prices[j]}`);
      // profit = prices[j] - prices[i]; 
      // console.log(profit)
      
      if ((prices[j] - prices[i]) > profit ){
        profit = (prices[j] - prices[i])
      } 
    }
  }
  console.log(profit)
  return profit    
}

BestTradeAmount(prices)


