import { HTMLAttributes, ReactNode } from 'react'

interface PageItemProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

export const PageItem = ({ children }: PageItemProps) => {
	return (
		<div className='rounded-es-[1.111vw] rounded-ee-[1.111vw] bg-white pt-[2.639vw] px-[1.111vw]'>
			{children}
		</div>
	)
}
