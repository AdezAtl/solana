import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Welcome to SOLToken</h1>
          <p className="hero-subtitle">
            The next generation meme token on Solana blockchain. 
            Fast, secure, and community-driven.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <h3>$0.0001</h3>
              <p>Current Price</p>
            </div>
            <div className="stat">
              <h3>1B</h3>
              <p>Total Supply</p>
            </div>
            <div className="stat">
              <h3>50K+</h3>
              <p>Holders</p>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn primary">Buy Now</button>
            <button className="btn secondary">Read Whitepaper</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="token-graphic">
            🪙
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
