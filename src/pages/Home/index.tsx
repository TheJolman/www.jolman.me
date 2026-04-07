import asciiArt from '../../assets/cat_box.txt';
import Card from '../../components/Card';
import { signal } from '@preact/signals';
import './style.css';

const artSignal = signal('');

fetch(asciiArt)
  .then((response) => response.text())
  .then((data) => {
    artSignal.value = data;
  })
  .catch((error) => console.error('Could not fetch homepage art:', error));

export function Home() {
  return (
    <div className="hero grow">
      <div className="hero-content flex-col lg:flex-row w-full px-4 lg:px-8 gap-10">
        <div className="mockup-code shadow-xl lg:w-auto overflow-x-auto">
          <pre data-prefix="❯"><span className="text-primary">nix run</span> github:thejolman/art</pre>
          <br />
          <div className="px-4 sm:px-10 overflow-x-auto">
            <pre><code>{artSignal}</code></pre>
          </div>
          <pre data-prefix="❯" className="animate-blink"></pre>
        </div>
        <div className="flex flex-col gap-4 text-center max-w-xl">
          <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl font-bold text-shadow-lg">
            Welcome to my site.
          </h1>
          <Card>
            <p>
              I'm <b>Josh Holman</b>, a open-source developer and coding tutor.
              <br />
              I recently graduated from CSU, Fullerton and am looking for work in back-end development,
              system administration, and DevOps.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
