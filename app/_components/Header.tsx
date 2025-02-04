import NavBar from './NavBar';
import Link from 'next/link';

export function Header() {
	return (
		<div className='fixed w-full backdrop-blur h-[70px] z-[200]'>
			<div className='flex justify-between items-center max-w-6xl mx-auto px-4 h-full'>
				<div className='flex flex-row items-center'>
					<div className='flex items-center'>
						<Link href='/'>
							{/* <Logo /> */}
							<div className='font-extrabold text-xl'>timshaw</div>
						</Link>
					</div>
				</div>
				<div className='flex items-center'>
					<NavBar />
				</div>
			</div>
		</div>
	);
}

export default Header;
