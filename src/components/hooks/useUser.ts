'use client'
import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useUser = () => {
	const router = useRouter()
	useEffect(() => {
		if (typeof window !== 'undefined') {
			if (!localStorage.getItem('token')) {
				router.push('/auth')
			}
		}
	}, [router])

	const GET_USER = gql`
		query {
			myProfile {
				id
				name
				avatar
			}
		}
	`

	interface User {
		myProfile: {
			avatar: string
			name: string
		}
	}

	const { data } = useQuery<User>(GET_USER, {
		context: {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		},
	})

	return {
		user: data,
	}
}
