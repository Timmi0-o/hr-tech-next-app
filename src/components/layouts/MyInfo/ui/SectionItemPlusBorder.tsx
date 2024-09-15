import { HTMLAttributes, ReactNode } from 'react'

interface SectionItemPlusBorderProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

export const SectionItemPlusBorder = ({
	children,
	...props
}: SectionItemPlusBorderProps) => {
	return (
		<div
			{...props}
			className='mb-[7.5vw] pb-[6.875vw] sm:mb-[1.667vw] sm:pb-[1.111vw] border-b-[0.069vw] border-b-[#7C96B1]'
		>
			{children}
		</div>
	)
}
