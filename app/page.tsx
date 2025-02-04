import WorkExperience from './_components/WorkExperience';
import Image from 'next/image';

const Home = () => {
	return (
		<div className='flex flex-col items-center justify-center mx-auto'>
			<div className='flex items-center jusifty-center min-h-[calc(100vh)]'>
				<div className='m-5 p-4 rounded-lg '>
					<h1 className='flex text-3xl font-bold mb-8 ml-5'>hey, i'm tim shaw.</h1>
					<div className='relative'>
						<Image src='/polaroid.png' alt='' className='rounded w-96 ' width={384} height={417} />
						<Image
							src='/arrow.png'
							alt=''
							className='absolute -bottom-16 md:-bottom-32 -right-6 md:-right-36 size-20 md:size-44 -rotate-12'
							width={80}
							height={80}
						/>
					</div>
				</div>
			</div>
			<WorkExperience
				logo='/zotana logo.png'
				logoClassName='border border-gray-100'
				name='zotana'
				description='building my own integrated productivity tool'
				role='one man show, 2024-now'
				explaination='i founded zotana - system that integrates all my tools in a way that works for me. i am currently working on the first version.'
			>
				<div className='group md:p-12 p-4 md:mx-0 mx-4 rounded-xl bg-red-50 flex items-center justify-center'>
					<img src='/zotana full.png' alt='' className='group-hover:scale-105 duration-500' />
				</div>
			</WorkExperience>
			<WorkExperience
				logo='/tradestation logo.png'
				logoClassName='border border-gray-100'
				name='tradestation technologies'
				description='automated testing on a legacy platform, 0 to 1'
				role='sdet intern, 2023-now'
				explaination="i solo'd the automated ui testing on a crm system from 2007, and helped with other day-to-day stuff."
			>
				<div className='group md:p-12 p-4 md:mx-0 mx-4 rounded-xl bg-blue-50 flex items-center justify-center'>
					<img src='/tradestation full.png' alt='' className='group-hover:scale-105 duration-500' />
				</div>
				<div className='w-full text-right'>
					<p className='text-gray-300 font-mono'>COULDNT SHOW REAL DATA, NDA</p>
				</div>
			</WorkExperience>
			<WorkExperience
				logo='/neuron logo.png'
				logoClassName='bg-blue-900 p-0.5'
				name='neuron theraputics'
				description='helping stroke patients with cognative therapy'
				role='founding engineer, 2022-2024'
				explaination='i delivered 5 projects: cloud deployment, a user dashboard, internal data analytics, an intake assessment, and 15 games.'
			>
				<div className='md:p-12 p-4 hover:p-2 md:hover:p-8 duration-500 md:mx-0 mx-4 rounded-xl bg-[#e4fae4] flex items-center justify-center'>
					<video src='/neuron clip.mp4' className='md:rounded-3xl rounded' autoPlay muted loop playsInline />
				</div>
			</WorkExperience>
			<WorkExperience
				logo='/mymun logo.svg'
				logoClassName='border border-gray-100 p-0'
				name='mymun'
				description='ranking model united nations conferences'
				role='frontend engineer, 2023'
				explaination='i cold called and pitched myself to the mymun team. then i designed and coded the frontend of a conference ranking system.'
				last
			>
				<div className='group md:p-12 p-4 md:mx-0 mx-4 rounded-xl bg-yellow-50 flex items-center justify-center'>
					<img src='/mymun full.png' alt='' className='group-hover:scale-105 duration-500' />
				</div>
			</WorkExperience>
		</div>
	);
};

export default Home;
