import Calendar from '../components/Calendar';
import Header from '../components/Header';
import { useMatakuliah } from '../hooks/useMatakuliah';

const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
const timeblocks = [
	'6AM',
	'7AM',
	'8AM',
	'9AM',
	'10AM',
	'11AM',
	'12PM',
	'1PM',
	'2PM',
	'3PM',
	'4PM',
	'5PM',
	'6PM',
];

const Home = () => {
	// [agenda, setAgenda] = useState<IMatakuliah[]>([]);
	const { matakuliahData } = useMatakuliah();

	console.log(matakuliahData);

	return (
		<div className="min-h-screen px-8 py-4 bg-gradient-to-r from-amber-50 to-slate-100">
			<header className="mb-4">
				<Header />
			</header>
			<main>
				<div className="">
					<Calendar days={days} timeblocks={timeblocks} />
				</div>
			</main>
		</div>
	);
};

export default Home;
