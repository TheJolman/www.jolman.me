import {
  hydrate,
  LocationProvider,
  Route,
  Router,
  prerender as ssr,
  lazy,
  ErrorBoundary,
} from "preact-iso";
import { useEffect } from "preact/hooks";
import { Navbar } from './components/Navbar'
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./providers/theme-provider";
import "./style.css";

const NotFound = lazy(() => import("./pages/_404"));
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Resume = lazy(() => import("./pages/Resume"));
const Tutoring = lazy(() => import("./pages/Tutoring"));

function ExternalRedirect({ to }) {
  useEffect(() => {
    window.location.href = to;
  })
  return (
    <p>Redirecting...</p>
  )
}

export function App() {
  return (
    <LocationProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <div className="flex min-h-screen flex-col text-base-content">
            <Navbar />
            <main className="flex grow">
              <Router>
                <Route path="/" component={Home} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/about" component={About} />
                <Route path="/resume" component={Resume} />
                <Route path="/tutoring" component={Tutoring} />
                <Route path="/blog" component={() => <ExternalRedirect to="https://jolman.leaflet.pub" />} />
                <Route default component={NotFound} />
              </Router>
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </ThemeProvider>
    </LocationProvider>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
