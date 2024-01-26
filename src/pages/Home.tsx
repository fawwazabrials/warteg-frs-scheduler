import Calendar from '../components/Calendar';
import Header from '../components/Header';

function Home() {
	return (
		<div className="min-h-screen px-8 py-4 bg-gradient-to-r from-amber-50 to-slate-100">
			<header className="mb-4">
				<Header />
			</header>
			<main>
				<div className="w-[900px]">
					<Calendar />
				</div>
			</main>
		</div>
	);
}

export default Home;
