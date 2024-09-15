import Image from 'next/image'
import { HTMLAttributes, ReactNode } from 'react'

interface TextInfoProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	img: string
	alt?: string
	imgSize?: string
	gap?: string
	textSize?: string
}

export const TextPlusImg = ({
	children,
	img,
	alt,
	imgSize,
	gap,
	textSize,
	...props
}: TextInfoProps) => {
	return (
		<div
			{...props}
			className={
				`flex items-center w-fit ${gap ? gap : 'gap-[0.556vw]'} ${
					textSize ? textSize : 'text-[3vw] sm:text-[1.367vw] xl:text-[0.972vw]'
				} ` + props.className
			}
		>
			<div
				className={`relative ${
					imgSize
						? imgSize
						: 'size-[3vw] sm:size-[2vw] lg:size-[1.563vw] xl:size-[1.111vw]'
				}`}
			>
				<Image src={img} fill alt={alt ? alt : img} />
			</div>
			{children}
		</div>
	)
}
