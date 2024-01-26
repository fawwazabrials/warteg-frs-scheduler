const Calendar = () => {
	return (
		<div className="bg-white py-4 px-8 rounded-md">
			<div className="flex flex-row flex-auto h-[600px]">
				<CalendarColumnLabel
					fill={[
						'06:00',
						'07.00',
						'08.00',
						'09.00',
						'10.00',
						'11.00',
						'12.00',
						'13.00',
						'14.00',
						'15.00',
						'16.00',
						'17.00',
						'18.00',
					]}
				/>
				<CalendarColumn label={'Senin'} />
				<CalendarColumn label={'Selasa'} />
				<CalendarColumn label={'Rabu'} />
				<CalendarColumn label={'Kamis'} />
				<CalendarColumn label={'Jumat'} />
			</div>
		</div>
	);
};

const CalendarColumn = ({
	label,
	fill,
}: {
	label: string;
	fill?: [
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string
	];
}) => {
	return (
		<div id={label} className="relative flex flex-col flex-auto min-h-[500px]">
			<div className="h-[50px] flex items-center justify-center">
				{/* LABEL */}
				<h3 className="text-center text-xs font-semibold">{label.toUpperCase()}</h3>
			</div>

			<div className="flex-1 flex flex-col">
				<div className="flex-1 border">{fill?.[0]}</div>
				<div className="flex-1 border">{fill?.[1]}</div>
				<div className="flex-1 border">{fill?.[2]}</div>
				<div className="flex-1 border">{fill?.[3]}</div>
				<div className="flex-1 border">{fill?.[4]}</div>
				<div className="flex-1 border">{fill?.[5]}</div>
				<div className="flex-1 border">{fill?.[6]}</div>
				<div className="flex-1 border">{fill?.[7]}</div>
				<div className="flex-1 border">{fill?.[8]}</div>
				<div className="flex-1 border">{fill?.[9]}</div>
				<div className="flex-1 border">{fill?.[10]}</div>
				<div className="flex-1 border">{fill?.[11]}</div>
				<div className="flex-1 border">{fill?.[12]}</div>
			</div>

			{/* Event example */}
			{/* top: 8.333%, every 1 hour width is added 7.142% => f(hour) = hour * 7.142% */}
			<div className="absolute w-[95%] border-[3px] border-emerald-500 bg-emerald-500/50 rounded-md top-[8.333%] h-[21.426%]">
				TEST
			</div>
		</div>
	);
};

const CalendarColumnLabel = ({
	fill,
}: {
	fill?: [
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string,
		string
	];
}) => {
	return (
		<div className="flex flex-col min-h-[500px] mr-4">
			<div className="h-[50px]"></div>

			<div className="flex-1 text-center text-xs relative bottom-[10px]">{fill?.[0]}</div>
			<div className="flex-1 text-center text-xs relative bottom-[10px]">{fill?.[1]}</div>
			<div className="flex-1 text-center text-xs relative bottom-[10px]">{fill?.[2]}</div>
			<div className="flex-1 text-center text-xs relative bottom-[10px]">{fill?.[3]}</div>
			<div className="flex-1 text-center text-xs relative bottom-[10px]">{fill?.[4]}</div>
			<div className="flex-1 text-center text-xs relative bottom-[10px]">{fill?.[5]}</div>
			<div className="flex-1 text-center text-xs relative bottom-[10px]">{fill?.[6]}</div>
			<div className="flex-1 text-center text-xs relative bottom-[10px]">{fill?.[7]}</div>
			<div className="flex-1 text-center text-xs relative bottom-[10px]">{fill?.[8]}</div>
			<div className="flex-1 text-center text-xs relative bottom-[10px]">{fill?.[9]}</div>
			<div className="flex-1 text-center text-xs relative bottom-[10px]">{fill?.[10]}</div>
			<div className="flex-1 text-center text-xs relative bottom-[10px]">{fill?.[11]}</div>
			<div className="flex-1 text-center text-xs relative bottom-[10px]">{fill?.[12]}</div>
		</div>
	);
};

export default Calendar;
