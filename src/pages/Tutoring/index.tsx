export function Tutoring() {
  return (
    <>
      <div class="max-w-3xl mx-auto flex flex-col items-center justify-center">
        <div class="p-4 text-center">
          <h1 class="text-2xl font-bold mb-6">Math Tutoring</h1>
          <p class="font-bold mb-6">
            I offer private math tutoring with flexible scheduling and
            personalized instruction.
          </p>
        </div>

        <div class="w-full px-6">
          <div class="rounded-lg p-6 mb-6 border bg-base-200">
            <h2 class="text-xl font-bold mb-4">
              Contact & Availability
            </h2>
            <p class="mb-2">
              For availability and scheduling, please reach out to me at:&nbsp;
              <a
                href="mailto:tutoring@jolman.me"
                class="link"
              >
                tutoring@jolman.me
              </a>
              &nbsp;or&nbsp;
              <a
                href="tel:+13239170915"
                class="link"
              >
                call/text (323) 917-0915
              </a>.
              <br />
              Please provide grade level and name/author/edition of textbook if
              applicable.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="rounded-lg p-6 border shadow-sm bg-base-200">
              <h2 class="text-xl font-bold mb-4">Rates</h2>
              <p class="">
                <span class="font-semibold">$35</span> for sessions up to 1 hour
              </p>
              <p class="">
                <span class="font-semibold">$35/hour</span>{" "}
                for extended sessions
              </p>
            </div>

            <div class="rounded-lg p-6 border shadow-sm bg-base-200">
              <h2 class="text-xl font-bold mb-4">Topics Offered</h2>
              <p class="mb-3">
                All K-12 mathematics topics including:
              </p>
              <ul class="text-sm space-y-1">
                <li>• Algebra & Geometry</li>
                <li>• Trigonometry</li>
                <li>• Pre-Calculus & Calculus</li>
                <li>• Test Preparation</li>
              </ul>
              <p class="text-sm mt-3 italic">
                Advanced topics require advance notice for preparation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
