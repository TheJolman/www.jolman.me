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
    <pre className="font-mono leading-5">
      {art}
    </pre>
  )
}

export function Home() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row text-center">
        <div className="bg-base-200 text-primary p-4 rounded-2xl shadow-2xl">
          <AsciiLoader />
        </div>
        <div>
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            I'm <b>Josh Holman</b>, a software developer and tutor.
            <br />
            I'm an open-source contributor and recent graduate from CSU, Fullerton.
            <br />
            Currently looking for work in back-end SWE and DevOps.
          </p>
        </div>
      </div>
    </div>
  );
}
