import Card from '../../components/Card';

export function Tutoring() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center mb-6">
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-6">Tutoring Services</h1>
        <p className="font-bold mb-6">
          I offer private math and computer science tutoring with flexible scheduling and
          personalized instruction.
        </p>
      </div>

      <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
        <Card title="Contact & Availability">
          <p className="mb-2">
            For availability and scheduling, please reach out to me at:&nbsp;
            <a
              href="mailto:tutoring@jolman.me"
              className="link"
            >
              tutoring@jolman.me
            </a>
            &nbsp;or&nbsp;
            <a
              href="tel:+13239170915"
              className="link"
            >
              call/text (323) 917-0915
            </a>.
            <br />
            Please provide grade level and name/author/edition of textbook if
            applicable.
          </p>
          <h2 className="card-title">Rates</h2>
          <p>
            <span className="font-semibold">$35</span> for sessions up to 1 hour
          </p>
          <p>
            <span className="font-semibold">$35/hour</span>{" "}
            for extended sessions
          </p>
        </Card>

        <Card title="Topics Offered">
          <h3 className="mb-3 text-lg">
            All K-12 mathematics topics including:
          </h3>
          <ul className="text-sm space-y-1 mb-1">
            <li>• Algebra & Geometry</li>
            <li>• Trigonometry</li>
            <li>• Pre-Calculus & Calculus</li>
            <li>• Test Preparation</li>
          </ul>
          <p className="text-sm italic mb-3">
            Advanced topics require advance notice for preparation.
          </p>

          <h3 className="mb-3 text-lg">
            Varied topics in Computer Science and coding:
          </h3>
          <ul className="text-sm space-y-1">
            <li>• Introductory & intermediate general programming</li>
            <li>• Linux, intro to system administration, and the command line</li>
            <li>• Back-end web programming</li>
            <li>• Programming for mathematics</li>
            <li>• Basic web design</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
