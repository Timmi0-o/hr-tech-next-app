import { HTMLAttributes, ReactNode } from 'react'

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

export const Section = ({ children, ...props }: SectionProps) => {
	return (
		<div
			{...props}
			className={`px-[0.977vw] xl:px-[4.931vw] ` + props.className}
		>
			{children}
		</div>
	)
}
