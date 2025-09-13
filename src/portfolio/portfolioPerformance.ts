export interface PortfolioPerformance {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
}

export function calculatePortfolioPerformance(
  initialInvestment: number = 10000,
  currentValue: number = 12000
): PortfolioPerformance {
  
    // Correct calculations
  const profitOrLoss = currentValue - initialInvestment;
  const percentageChange = (profitOrLoss / initialInvestment) * 100;

  
  // Use ternary operator instead of if statements
  const performanceSummary = 
    percentageChange > 20 ? `The portfolio has gained significantly with a profit of $${profitOrLoss.toFixed(2)}.` :
    percentageChange < -20 ? `The portfolio has lost significantly with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.` :
    percentageChange > 0 ? `The portfolio has gained moderately with a profit of $${profitOrLoss.toFixed(2)}.` :
    percentageChange < 0 ? `The portfolio has lost moderately with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.` :
    `The portfolio has no change.`;

  return {
    initialInvestment,
    currentValue,
    profitOrLoss,
    percentageChange,
    performanceSummary,
  };
}