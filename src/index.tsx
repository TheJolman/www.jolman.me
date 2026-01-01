import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';
import { ThemeProvider } from './providers/theme-provider';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home/index';
import { Portfolio } from './pages/Portfolio/index';
import { About } from './pages/About';
import { Resume } from './pages/Resume';
import { Tutoring } from './pages/Tutoring';
import { NotFound } from './pages/_404';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<ThemeProvider>
				<div className="flex flex-col min-h-screen">
					<Navbar />
					<main className="grow">
						<Router>
							<Route path="/" component={Home} />
							<Route path="/portfolio" component={Portfolio} />
							<Route path="/about" component={About} />
							<Route path="/resume" component={Resume} />
							<Route path="/tutoring" component={Tutoring} />
							<Route default component={NotFound} />
						</Router>
					</main>
					<Footer />
				</div>
			</ThemeProvider>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
