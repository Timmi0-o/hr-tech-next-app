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
			className='mb-[1.667vw] pb-[1.111vw] border-b-[0.069vw] border-b-[#F0F3F8]'
		>
			{children}
		</div>
	)
}
