import TimelineEvent from './_components/TimelineEvent';

const About = () => {
	return (
		<div className='flex flex-col items-center min-h-[calc(100vh-80px)] mt-[80px] px-4'>
			<div className='relative w-full max-w-3xl'>
				<video src='/pier sunset.mp4' autoPlay muted loop playsInline className='w-full rounded-md'></video>
				<div className='absolute inset-0 flex items-center justify-center'>
					<h1 className='text-6xl text-white font-bold'>about.</h1>
				</div>
			</div>
			<div className='md:flex-row flex flex-col w-full max-w-3xl mt-16 gap-2'>
				<div className='flex flex-col justify-between h-[256px]'>
					<div id='div1'></div>
					<div id='div2' className='flex flex-col'>
						<h1 className='font-semibold text-2xl'>nice to meet ya !</h1>
						<p className='text-gray-500 text-lg mt-3'>
							i'm from south florida and attend the university of miami. i currently work as an sdet intern at tradestation and am
							building a few other projects.
						</p>
					</div>
				</div>

				<div className='w-full flex justify-center'>
					<img src='/central park.jpg' alt='' className='rounded-md h-[256px]' />
				</div>
			</div>
			<div className='md:grid md:grid-cols-3 flex flex-col max-w-3xl w-full gap-5 mt-16 items-start'>
				<div className='flex flex-col'>
					<h2 className='text-gray-500 text-md'>WHAT I'M DOING: </h2>
					<p className='text-gray-500 text-md'>
						finishing up at umiami and matching startup founders with{' '}
						<a href='https://spark-founders.com/' className='underline'>
							spark founders
						</a>{' '}
						and{' '}
						<a href='https://bonsaiacg.com' className='underline'>
							bonsai
						</a>
					</p>
				</div>
				<div className='flex flex-col'>
					<h2 className='text-gray-500 text-md'>WHAT I LOVE: </h2>
					<p className='text-gray-500 text-md'>
						flowers & gardens, leather wallets, vlogs, music festivals, bonsai trees, traveling, walks
					</p>
				</div>
				<div className='flex flex-col'>
					<h2 className='text-gray-500 text-md'>WHAT I'M READING: </h2>
					<p className='text-gray-500 text-md'>
						zen and the art of motorcycle maintainence <br />- robert m. pirsig
					</p>
				</div>
			</div>
			<div className='w-full max-w-3xl mt-16'>
				<h1 className='text-2xl font-semibold mb-4'>my journey</h1>
				<div className='relative flex flex-col items-start '>
					{/* Vertical Line */}
					<div className='absolute left-[13px] md:left-[14px] top-3 h-full w-[1px] bg-gray-300'></div>
					<TimelineEvent
						tag='seventh grade'
						title='debate class'
						description='all students at my middle school took a required speech and debate class. it was the first time that i could explore any topic at any level. i thrived and fell in love with debate for the next ten years.'
					></TimelineEvent>
					<TimelineEvent
						tag='high school'
						title='got into foreign policy'
						description='as i continued to debate, i became more interested in international politics. i started to learn about the puzzles of diplomacy, taking many different perspectives and working toward a solution that satisfies all.'
					></TimelineEvent>
					<TimelineEvent
						tag='high school'
						title='starting to make things'
						description='after school and on the weekends, i liked working with my hands. my dad and i woodworked together, and i started to make my own things. i made a few wallets and gave them to friends and family.'
					></TimelineEvent>
					<TimelineEvent
						tag='college'
						title='international studies major'
						description='when i got to university, i dove head first into international relations. i took a graduate level class my first semester, joined an on-campus think tank, wrote a few unpublished papers, and was super involved with the model united nations club.'
					></TimelineEvent>
					<TimelineEvent
						tag='college'
						title='switch up'
						description="i realized that politics wasn't something that i wanted to make a career out of. i switched to cs due to the advice of all my friends, and found the same underlying interests from politics present &mdash; taking a desired outcome and finding a way to get there."
					></TimelineEvent>
					<TimelineEvent
						tag='now'
						title='destination: software engineering'
						description="i've found my passion: building software. so far, i've built a few projects, worked for a few startups, interned at tradestation five times, and now i am looking forward to the future."
					></TimelineEvent>
				</div>
			</div>
		</div>
	);
};

export default About;
