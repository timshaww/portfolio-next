import React from 'react';

interface TimelineEvent {
	tag: string;
	title: string;
	description: string;
	children?: React.ReactNode;
}

const TimelineEvent = ({ tag, title, description, children }: TimelineEvent) => {
	return (
		<div className='relative flex flex-col items-start w-full'>
			{/* Vertical Line */}

			<div className='relative w-full flex items-start space-x-6 mb-4'>
				{/* Dot */}
				<div className='w-8 h-8 flex items-center justify-center'>
					<div className='w-2 h-2 bg-gray-300 rounded-full shadow-lg'></div>
				</div>

				{/* Event Card */}
				<div className='bg-white p-4 w-full border-gray-300 border-[1px] rounded-xl space-y-2'>
					<span className='text-gray-500 text-sm bg-gray-200 px-2 py-1 rounded-md'>{tag}</span>
					<h3 className='text-xl font-semibold'>{title}</h3>
					<p className='text-gray-500'>{description}</p>
					<div className='w-full'>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default TimelineEvent;
