import Card from "../../components/Card";

export default function Tutoring() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center my-8 gap-4">
      <div className="flex flex-col text-center gap-4">
        <h1 className="page-heading text-2xl font-bold text-primary">
          Tutoring Services
        </h1>
      </div>

      <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
        <Card title="Contact & Availability">
          <p className="mb-2">
            For availability and scheduling, please reach out to me at&nbsp;
            <a
              href="mailto:tutoring@jolman.me"
              className="link link-hover font-semibold"
            >
              tutoring@jolman.me
            </a>
            &nbsp;or&nbsp;
            <a
              href="tel:+13239170915"
              className="link link-hover font-semibold"
            >
              (323) 917-0915
            </a>
            .
            <br />
            Please provide grade level and name/author/edition of textbook if
            applicable.
          </p>
          <h3 className="text-lg font-semibold text-primary">Rates</h3>
          Please contact me for my current hourly rate.
          <em className="text-warning">Travel expenses may apply</em>
        </Card>

        <Card title="Topics Offered">
          <h3 className="text-lg font-semibold text-primary">
            Computer science and coding:
          </h3>
          <ul className="text-sm space-y-1">
            <li>• Introductory & intermediate general programming</li>
            <li>
              • Linux, intro to system administration, and the command line
            </li>
            <li>• Back-end web programming</li>
            <li>• Programming for mathematics</li>
            <li>• Basic web design</li>
          </ul>

          <h3 className="text-lg font-semibold text-primary">
            K-12 mathematics:
          </h3>
          <ul className="text-sm space-y-1 mb-1">
            <li>• Algebra & Geometry</li>
            <li>• Trigonometry</li>
            <li>• Pre-Calculus & Calculus</li>
          </ul>
          <p className="text-sm italic mb-3 text-warning">
            Advanced topics require advance notice for preparation
          </p>

        </Card>
      </div>
    </div>
  );
}
