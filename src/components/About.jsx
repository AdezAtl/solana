import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About SOLToken</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              SOLToken is a community-driven meme token built on the Solana blockchain. 
              We're creating more than just a token - we're building a movement that 
              combines fun with real utility.
            </p>
            <div className="features">
              <div className="feature">
                <h4>⚡ Lightning Fast</h4>
                <p>Solana's high throughput ensures fast and cheap transactions</p>
              </div>
              <div className="feature">
                <h4>🔒 Secure</h4>
                <p>Built on Solana's battle-tested blockchain technology</p>
              </div>
              <div className="feature">
                <h4>🌍 Community First</h4>
                <p>Governed and driven by our amazing community</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="code-snippet">
              <pre>{`contract SOLToken {\n  string name = "SOLToken";\n  string symbol = "SOLT";\n  uint256 totalSupply = 1000000000;\n}`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
