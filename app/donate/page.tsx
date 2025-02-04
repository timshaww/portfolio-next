'use client';

import { useEffect, useState } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export const meta: Metadata = {
	title: 'Click & I donate $1',
	description: 'Each time someone visits this page, I donate $1 to the American Foundation for Suicide Prevention.',
};

const Donate = () => {
	const [count, setCount] = useState<number | null>(null);

	useEffect(() => {
		// Fetch the visit count
		fetch('/api/visit')
			.then(() => fetch('/api/count'))
			.then((res) => res.json())
			.then((data) => {
				setCount(data.count - 1);
			})
			.catch((err) => console.error('Error fetching count', err));
	}, []);

	useEffect(() => {
		const interval = setTimeout(() => {
			setCount((prev) => (prev ? prev + 1 : null));
		}, 1000);

		return () => clearTimeout(interval);
	}, []);

	// Function to animate the count

	return (
		<div className='flex flex-col items-center justify-center min-h-[calc(100vh-150px)] mt-20 px-4'>
			<div className='w-full max-w-3xl flex flex-col items-center justify-center mt-28 mb-28'>
				<p className='text-2xl font-semibold '>amount donated this month:</p>
				<div className='h-16'>
					{count !== null ? (
						<div className='flex flex-row '>
							<p className='font-bold text-6xl'>$</p>
							<AnimatePresence mode='wait'>
								<motion.span
									key={count}
									initial={{ rotateX: 0, y: 0, opacity: 1 }}
									animate={{ rotateX: 0, y: 0, opacity: 1 }}
									exit={{ rotateX: 60, y: 20, opacity: 0 }}
									transition={{ duration: 0.2, ease: 'easeInOut' }}
									className='text-6xl font-bold '
								>
									{count}
								</motion.span>
							</AnimatePresence>
						</div>
					) : (
						<p>Loading...</p>
					)}
				</div>
				<p className='text-gray-500 mt-12 text-center'>each time someone visits this page, i&apos;ll donate $1.</p>
				<p className='text-gray-500 text-center'>max one dollar per person per month.</p>
			</div>
			<div className='mt-12 w-full max-w-3xl flex flex-col items-center'>
				<h2 className='font-semibold text-lg'>
					i&apos;m donating to the{' '}
					<a href='https://afsp.org' className='underline'>
						american foundation for suicide prevention
					</a>
					.
				</h2>
				<p className='my-4'>in 2024, i lost two people very close to me.</p>
				<p>
					<span className='font-semibold'>vlad zhuravskyy</span>, my best friend, june 30th.
				</p>
				<p>
					<span className='font-semibold'>ian shaw</span>, my dad, november 11th.
				</p>
			</div>
			<div className='flex flex-col md:grid md:grid-cols-2 mt-4 md:gap-4 max-w-3xl items-center '>
				<div className='mt-4 md:mt-0 w-60'>
					<Image src='/vlad.png' alt='Vlad' className='size-60 rounded' width={240} height={240} />
					<p className='w-full text-right text-gray-300 font-mono text-sm'>VLAD WORKING OUT WITH ME</p>
				</div>
				<div className='mt-4 md:mt-0 w-60'>
					<Image src='/dad.png' alt='Dad' className='size-60 rounded' width={240} height={240} />
					<p className='w-full text-right text-gray-300 font-mono text-sm'>DAD AT OUR FAVE RESTAURANT</p>
				</div>
			</div>
		</div>
	);
};

export default Donate;
