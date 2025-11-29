import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>🚀 SOLToken</h2>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#howtobuy">How to Buy</a>
          <a href="#roadmap">Roadmap</a>
          <WalletMultiButton className="wallet-button" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
