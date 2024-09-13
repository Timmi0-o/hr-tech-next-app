'use client'
import { client } from '@/lib/utils'
import { ApolloProvider } from '@apollo/client'
import { HTMLAttributes, ReactNode } from 'react'

interface ApolloProviderClientProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

export const ApolloProviderClient = ({
	children,
}: ApolloProviderClientProps) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}
