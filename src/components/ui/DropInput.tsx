import { InputHTMLAttributes } from 'react'
import { ImageCustom } from './ImageCustom'

interface DropInputProps extends InputHTMLAttributes<HTMLInputElement> {
	noCloseButton?: boolean
}

export const DropInput = ({ noCloseButton, ...props }: DropInputProps) => {
	return (
		<div
			tabIndex={0}
			className={
				'flex items-center pl-[1vw] sm:l-[0.556vw] h-[8vw] sm:h-[3.606vw] xl:h-[2.292vw] border-[0.098vw] xl:border-[0.069vw] border-[#F0F3F8] text-[1.111vw] font-normal rounded-[0.8vw] sm:rounded-[0.556vw] bg-white ' +
				props.className
			}
		>
			<input
				{...props}
				className='size-full outline-none text-[2.2vw] sm:text-[1.367vw] xl:text-[1.111vw] placeholder:text-black bg-transparent'
			/>
			<div className='flex gap-[1vw] sm:gap-[0.556vw] items-center h-[3.606vw] xl:h-[2.222vw]'>
				{!noCloseButton && (
					<ImageCustom
						className='cursor-pointer'
						src='/svg/close-button.svg'
						alt='close-button'
					/>
				)}

				<div className='flex items-center justify-center w-[5vw] sm:w-[2.2vw] xl:w-[1.667vw] bg-[#DAE6F2] h-[8vw] sm:h-full rounded-se-[0.8vw] sm:rounded-se-[0.278vw] rounded-ee-[0.8vw] sm:rounded-ee-[0.278vw] cursor-pointer'>
					<ImageCustom src='/svg/arrow.svg' alt='arrow' />
				</div>
			</div>
		</div>
	)
}
;``
