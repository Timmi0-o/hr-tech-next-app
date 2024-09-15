import { HTMLAttributes, ReactNode } from 'react'
import { ImageCustom } from './ImageCustom'

interface DropMenuProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	noBg?: boolean
}

export const DropMenu = ({ children, noBg, ...props }: DropMenuProps) => {
	return (
		<div
			{...props}
			className={`relative h-[8vw] sm:h-[4vw] xl:h-[2.292vw] flex items-center gap-[1.2vw] sm:gap-[0.781vw] xl:gap-[0.556vw] p-[1.2vw] sm:p-[0.556vw] border-[0.069vw] border-[#F0F3F8] text-[1.367vw] xl:text-[0.972vw] font-normal  rounded-[1.2vw] sm:rounded-[0.556vw] cursor-pointer ${
				!noBg ? 'bg-white' : ''
			} `}
		>
			{children}
			<ImageCustom src='/svg/arrow.svg' alt='arrow' />
		</div>
	)
}
