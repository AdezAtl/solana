import React from 'react';

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Launch & Community Building",
      items: [
        "Token Launch on Solana",
        "Community Airdrop",
        "First 1000 Holders",
        "DEX Listings"
      ]
    },
    {
      phase: "Phase 2",
      title: "Ecosystem Growth",
      items: [
        "NFT Collection Launch",
        "Staking Platform",
        "CEX Listings",
        "Partnership Announcements"
      ]
    },
    {
      phase: "Phase 3",
      title: "Utility & Expansion",
      items: [
        "Mobile App Development",
        "Cross-chain Integration",
        "DAO Implementation",
        "Ecosystem Fund"
      ]
    }
  ];

  return (
    <section id="roadmap" className="roadmap">
      <div className="container">
        <h2>Roadmap</h2>
        <div className="timeline">
          {phases.map(phase => (
            <div key={phase.phase} className="phase">
              <div className="phase-header">
                <h3>{phase.phase}</h3>
                <h4>{phase.title}</h4>
              </div>
              <ul className="phase-items">
                {phase.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
