import Card from '../../components/Card'
import { signal } from '@preact/signals';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './style.css';

const markdownSignal = signal('')
fetch('https://raw.githubusercontent.com/TheJolman/resume/main/resume.md')
  .then((response) => response.text())
  .then((text) => {
    markdownSignal.value = text;
  })
  .catch((error) => console.error('Failed to fetch resume source:' + error));

export function Resume() {
  if (!markdownSignal) {
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
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownSignal.value}</ReactMarkdown>
        </Card>
      </main>
    </div>
  );
}
