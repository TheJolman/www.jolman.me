import asciiArt from '../../assets/computer.txt';
import { useState, useEffect } from 'preact/hooks';

const AsciiLoader = () => {
  const [art, setArt] = useState('');

  useEffect(() => {
    fetch(asciiArt)
      .then((response) => response.text())
      .then((data) => setArt(data))
      .catch((error) => console.error('Could not fetch ASCII art:', error));
  });

  return (
    <pre>
      <code>{art}</code>
    </pre>
  )
}

export function Home() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mockup-code mx-3 shadow-2xl">
          <pre data-prefix="❯"><span className="text-primary">nix run</span> github:thejolman/www.jolman.me#art</pre>
          <br />
          <div className="px-10">
            <AsciiLoader />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome to my site</h1>
          <p className="py-6">
            I'm <b>Josh Holman</b>, a software developer and tutor.
            <br />
            Also an Open-source contributor and recent grad from CSU, Fullerton.
            <br />
            Currently looking for work in back-end SWE and DevOps.
          </p>
        </div>
      </div>
    </div>
  );
}
