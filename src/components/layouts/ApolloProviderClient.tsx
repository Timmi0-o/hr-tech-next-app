'use client'
import { client } from '@/lib/utils'
import { ApolloProvider } from '@apollo/client'
import { usePathname } from 'next/navigation'
import { HTMLAttributes, ReactNode } from 'react'
import { Header } from './Header'

interface ApolloProviderClientProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

export const ApolloProviderClient = ({
	children,
}: ApolloProviderClientProps) => {
	const path = usePathname()
	return (
		<ApolloProvider client={client}>
			{path.includes('auth') ? '' : <Header />}
			{children}
		</ApolloProvider>
	)
}
