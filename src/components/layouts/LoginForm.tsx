'use client'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			access_token
			refresh_token
		}
	}
`
// john@mail.com
// changeme

export function LoginForm() {
	const router = useRouter()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [login, { data, error }] = useMutation(LOGIN)

	if (error) {
		console.log('error', error)
	} else {
		console.log('data', data)
	}

	useEffect(() => {
		if (data?.login?.access_token) {
			localStorage.setItem('token', data.login.access_token)
			router.push('/')
		}
	}, [data, router])

	useEffect(() => {
		if (window && localStorage) {
			const token = localStorage.getItem('token')
			if (token) {
				router.push('/')
			}
		}
	}, [router])

	return (
		<Card className='w-full max-w-sm'>
			<CardHeader>
				<CardTitle className='text-2xl'>Login</CardTitle>
				<CardDescription>
					Enter your email below to login to your account.
				</CardDescription>
			</CardHeader>
			<CardContent className='grid gap-4'>
				<div className='grid gap-2'>
					<Label htmlFor='email'>Email</Label>
					<Input
						value={email}
						onChange={(e: any) => setEmail(e.target.value)}
						id='email'
						type='email'
						placeholder='m@example.com'
						required
					/>
				</div>
				<div className='grid gap-2'>
					<Label htmlFor='password'>Password</Label>
					<Input
						value={password}
						onChange={(e: any) => setPassword(e.target.value)}
						id='password'
						type='password'
						required
					/>
				</div>
			</CardContent>
			<CardFooter>
				<Button
					onClick={() => login({ variables: { email, password } })}
					className='w-full'
				>
					Sign in
				</Button>
			</CardFooter>
		</Card>
	)
}
