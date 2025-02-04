import clsx from 'clsx';

interface WorkExperienceProps {
	logo: string;
	logoClassName: string;
	name: string;
	description: string;
	role: string;
	explaination: string;
	children: React.ReactNode;
	last?: boolean;
}

const WorkExperience = ({ logo, logoClassName, children, description, explaination, name, role, last = false }: WorkExperienceProps) => {
	return (
		<div
			className={clsx(
				'px-4 md:px-0 flex flex-col items-center justify-center max-w-3xl',
				last ? 'min-h-[calc(100vh-80px)]' : 'min-h-[calc(100vh)]'
			)}
		>
			<div className='px-4 md:px-0 flex flex-row'>
				<div className='flex flex-col'>
					<div className='flex flex-row space-x-2'>
						<div className={clsx('size-7 rounded p-1', logoClassName)}>
							<img src={logo} alt='' className='' />
						</div>
						<h1 className='text-xl text-gray-600'>{name}</h1>
					</div>
					<div className='md:grid md:grid-cols-2 md:gap-4 flex flex-col'>
						<div className='flex flex-col space-y-1 mt-1 mb-2'>
							<h1 className='font-semibold text-2xl '>{description}</h1>
							<h2 className=''>{role}</h2>
						</div>
						<div className='mb-2 md:mb-0'>
							<p className='text-lg text-gray-600 space-x-0.5'>{explaination}</p>
						</div>
					</div>
				</div>
			</div>
			{children}
		</div>
	);
};

export default WorkExperience;
