import React from 'react';

const Tokenomics = () => {
  const tokenomics = [
    { label: 'Liquidity', value: 40, color: '#ff6b6b' },
    { label: 'Team', value: 15, color: '#4ecdc4' },
    { label: 'Marketing', value: 10, color: '#45b7d1' },
    { label: 'Community Rewards', value: 20, color: '#96ceb4' },
    { label: 'Ecosystem', value: 15, color: '#feca57' }
  ];

  return (
    <section id="tokenomics" className="tokenomics">
      <div className="container">
        <h2>Tokenomics</h2>
        <div className="tokenomics-content">
          <div className="chart">
            <div className="pie-chart">
              {tokenomics.map((item, index) => (
                <div
                  key={item.label}
                  className="pie-segment"
                  style={{
                    backgroundColor: item.color,
                    transform: `rotate(${tokenomics.slice(0, index).reduce((acc, curr) => acc + (curr.value * 3.6), 0)}deg)`,
                    clipPath: `conic-gradient(transparent 0%, transparent ${item.value * 3.6}deg, ${item.color} ${item.value * 3.6}deg)`
                  }}
                />
              ))}
            </div>
          </div>
          <div className="tokenomics-info">
            <div className="token-details">
              <h3>Token Details</h3>
              <ul>
                <li><strong>Name:</strong> SOLToken</li>
                <li><strong>Symbol:</strong> SOLT</li>
                <li><strong>Total Supply:</strong> 1,000,000,000</li>
                <li><strong>Decimals:</strong> 9</li>
                <li><strong>Blockchain:</strong> Solana</li>
              </ul>
            </div>
            <div className="distribution">
              <h3>Distribution</h3>
              {tokenomics.map(item => (
                <div key={item.label} className="distribution-item">
                  <div className="color-indicator" style={{ backgroundColor: item.color }}></div>
                  <span>{item.label}: {item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
