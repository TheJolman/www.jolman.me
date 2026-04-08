export function Footer() {
	return (
		<footer className="footer footer-center footer-vertical p-4 bg-base-300">
			<aside>
				<p>
					Copyright @ {new Date().getFullYear()} - All rights reserved by Josh
					Holman
				</p>
				<a
					href="https://github.com/thejolman/www.jolman.me"
					className="link link-hover"
					target="_blank"
					rel="noopener noreferrer"
				>
					Source Code
				</a>
			</aside>
		</footer>
	);
}
