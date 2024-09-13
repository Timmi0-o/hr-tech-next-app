import Image from 'next/image'
import { HTMLAttributes, ReactNode } from 'react'

interface TextInfoProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	img: string
	alt?: string
	imgSize?: string
	gap?: string
}

export const Text = ({
	children,
	img,
	alt,
	imgSize,
	gap,
	...props
}: TextInfoProps) => {
	return (
		<div
			{...props}
			className={
				`flex items-center ${gap ? gap : 'gap-[0.556vw]'} text-[0.972vw] ` +
				props.className
			}
		>
			<div className={`relative ${imgSize ? imgSize : 'size-[1.111vw]'}`}>
				<Image src={img} fill alt={alt ? alt : img} />
			</div>
			{children}
		</div>
	)
}
