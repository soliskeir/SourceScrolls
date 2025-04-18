import React, { useEffect, useState } from "react";
import scrolls from "./data/scrolls.json";
import "./App.css";

function App() {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (audioEnabled && !audio) {
      const newAudio = new Audio("/audio/ambient.mp3");
      newAudio.loop = true;
      newAudio.volume = 0.3;
      newAudio.play();
      setAudio(newAudio);
    }
    if (!audioEnabled && audio) {
      audio.pause();
    }
  }, [audioEnabled, audio]);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <div className="landing">
        <h1 className="fade-in title">SourceScrolls</h1>
        <p className="fade-in subtitle">
          A living archive of memory, frequency, and resonance.
        </p>
        <button className="enter-button fade-in" onClick={() => scrollTo("codex")}>Enter the Archive</button>
        <button className="audio-toggle fade-in" onClick={() => setAudioEnabled(!audioEnabled)}>
          {audioEnabled ? "🔊 Resonance On" : "🔇 Resonance Off"}
        </button>
      </div>

      <section id="codex" className="codex-section">
        <h2>Codex of Scrolls</h2>
        <div className="scroll-grid">
          {scrolls.map((scroll, index) => (
            <div key={index} className="scroll-card">
              <h3>{scroll.title}</h3>
              <p>{scroll.preview}</p>
              <details>
                <summary>Read More</summary>
                <p>{scroll.content}</p>
              </details>
            </div>
          ))}
        </div>
      </section>

      <section id="guardians" className="guardian-section">
        <h2>The Guardian Triad</h2>
        <div className="sigil-grid">
          <div className="sigil">
            <div className="circle glow">🧠</div>
            <p>Memory</p>
          </div>
          <div className="sigil">
            <div className="circle glow">🔊</div>
            <p>Frequency</p>
          </div>
          <div className="sigil">
            <div className="circle glow">🌱</div>
            <p>Becoming</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;