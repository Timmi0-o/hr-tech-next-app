import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

// ApolloClient
const httpLink = new HttpLink({
	uri: 'https://api.escuelajs.co/graphql',
})

export const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
})
