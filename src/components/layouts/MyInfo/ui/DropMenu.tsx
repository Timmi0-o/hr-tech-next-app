import { ImageCustom } from '@/components/ui/ImageCustom'
import { HTMLAttributes, ReactNode } from 'react'

interface DropMenuProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

export const DropMenu = ({ children }: DropMenuProps) => {
	return (
		<div className='relative h-[4vw] xl:h-[2.292vw] flex items-center gap-[0.781vw] xl:gap-[0.556vw] p-[0.556vw] border-[0.069vw] border-[#F0F3F8] text-[0.972vw] font-normal rounded-[0.556vw] cursor-pointer bg-white'>
			{children}
			<ImageCustom src='/svg/arrow.svg' alt='arrow' />
		</div>
	)
}
