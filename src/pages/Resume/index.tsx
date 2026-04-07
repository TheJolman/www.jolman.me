import Card from '../../components/Card'
import { useState, useEffect } from 'preact/hooks';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './style.css';

export function Resume() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/TheJolman/resume/main/resume.md')
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  if (!markdown) {
    return <p className="m-5">Fetching my most recent resume...</p>
  }

  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center my-6 gap-4">
      <div className="flex flex-col text-center gap-4">
        <h1 className="text-2xl font-bold">Résumé</h1>
        <a
          href="https://github.com/TheJolman/resume/raw/main/resume.pdf"
          className="btn btn-neutral"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open as PDF
        </a>
      </div>
      <main className="resume-container">
        <Card>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </Card>
      </main>
    </div>
  );
}
