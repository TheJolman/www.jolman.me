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
    return <p>Fetching my most recent resume...</p>
  }

  return (
    <div class="max-w-3xl mx-auto flex flex-col items-center mb-6">
      <div className="flex justify-center my-4">
        <a
          href="https://github.com/TheJolman/resume/raw/main/resume.pdf"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download PDF
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
