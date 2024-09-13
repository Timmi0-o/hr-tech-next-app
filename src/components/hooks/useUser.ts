'use client'
import { gql, useQuery } from '@apollo/client'

export const useUser = () => {
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
