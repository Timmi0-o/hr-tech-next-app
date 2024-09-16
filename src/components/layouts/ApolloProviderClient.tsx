'use client'
import { client } from '@/lib/utils'
import { ApolloProvider } from '@apollo/client'
import { usePathname } from 'next/navigation'
import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { Header } from './Header'

interface ApolloProviderClientProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

export const ApolloProviderClient = ({
	children,
}: ApolloProviderClientProps) => {
	const path = usePathname()

	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setIsClient(true)
		}
	}, [])

	return (
		isClient && (
			<ApolloProvider client={client}>
				{path.includes('auth') ? '' : <Header />}
				{children}
			</ApolloProvider>
		)
	)
}
