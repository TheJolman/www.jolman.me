import asciiArt from '../../assets/cat_box.txt';
import { useState, useEffect } from 'preact/hooks';
import './style.css';

const AsciiLoader = () => {
  const [art, setArt] = useState('');

  useEffect(() => {
    fetch(asciiArt)
      .then((response) => response.text())
      .then((data) => setArt(data))
      .catch((error) => console.error('Could not fetch ASCII art:', error));
  });

  return (
    <pre><code>{art}</code></pre>
  )
}

export function Home() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row w-full px-4 lg:px-8">
        <div className="mockup-code shadow-2xl lg:w-auto overflow-x-auto">
          <pre data-prefix="❯"><span className="text-primary">nix run</span> github:thejolman/art</pre>
          <br />
          <div className="px-4 sm:px-10 overflow-x-auto">
            <AsciiLoader />
          </div>
          <pre data-prefix="❯" className="animate-blink"></pre>
        </div>
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Welcome to my site</h1>
          <p className="py-6 text-sm sm:text-base">
            I'm <b>Josh Holman</b>, a software developer and tutor.
            <br />
            I'm also an Open-source contributor and recent grad from CSU, Fullerton.
            <br />
            Currently looking for work in back-end SWE and DevOps.
          </p>
        </div>
      </div>
    </div>
  );
}
