//Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

function usdcny(usd) {
    const conversionRate = 6.75;
  const cnyAmount = (usd * conversionRate).toFixed(2);
  return `${cnyAmount} Chinese Yuan`;
}