import { ApolloProviderClient } from '@/components/layouts/ApolloProviderClient'
import { Header } from '@/components/layouts/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'HR Tech',
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ApolloProviderClient>
					<Header />
					{children}
				</ApolloProviderClient>
			</body>
		</html>
	)
}
