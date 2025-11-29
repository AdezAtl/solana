import React from 'react';

const HowToBuy = () => {
  const steps = [
    {
      step: 1,
      title: "Create a Wallet",
      description: "Download Phantom or Solflare wallet and create your Solana wallet"
    },
    {
      step: 2,
      title: "Get SOL",
      description: "Purchase SOL from exchanges like Coinbase, Binance, or FTX"
    },
    {
      step: 3,
      title: "Connect to DEX",
      description: "Go to Raydium or Orca and connect your wallet"
    },
    {
      step: 4,
      title: "Swap for SOLT",
      description: "Swap your SOL for SOLToken using our contract address"
    }
  ];

  return (
    <section id="howtobuy" className="how-to-buy">
      <div className="container">
        <h2>How to Buy SOLToken</h2>
        <div className="steps">
          {steps.map(step => (
            <div key={step.step} className="step-card">
              <div className="step-number">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <div className="contract-address">
          <h4>Contract Address:</h4>
          <code>So11111111111111111111111111111111111111112</code>
          <button className="btn-copy">Copy</button>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
