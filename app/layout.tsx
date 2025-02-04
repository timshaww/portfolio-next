import type { Metadata } from 'next';
import './globals.css';
import Header from './_components/Header';
import Footer from './_components/Footer';

export const metadata: Metadata = {
	title: 'tims portfolio',
	description: 'a portfolio of timothy shaw',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<div className='flex flex-col min-h-screen justify-between'>
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
