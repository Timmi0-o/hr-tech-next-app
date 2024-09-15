import { HTMLAttributes, ReactNode } from 'react'

interface WorkInfoIte extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

export const WorkInfoIte = ({ children, ...props }: WorkInfoIte) => {
	return (
		<div
			{...props}
			className='flex items-center gap-[0.625vw] text-[3vw] sm:text-[2.188vw]'
		>
			{children}
		</div>
	)
}
