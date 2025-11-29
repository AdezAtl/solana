import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SOLToken</h3>
            <p>The future of meme tokens on Solana</p>
          </div>
          <div className="footer-section">
            <h4>Links</h4>
            <a href="#about">About</a>
            <a href="#tokenomics">Tokenomics</a>
            <a href="#roadmap">Roadmap</a>
          </div>
          <div className="footer-section">
            <h4>Community</h4>
            <a href="#">Twitter</a>
            <a href="#">Telegram</a>
            <a href="#">Discord</a>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <a href="#">Whitepaper</a>
            <a href="#">Audit</a>
            <a href="#">GitHub</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 SOLToken. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
