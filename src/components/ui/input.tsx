'use client'
import * as React from 'react'

import { cn } from '@/lib/utils'
import Image from 'next/image'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	placeholder?: string
	img?: string
	sizeImg?: string
	alt?: string
	containerClassName?: string
	disabled?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{ className, disabled, containerClassName, sizeImg, type, ...props },
		ref
	) => {
		const [focusStyle, setFocusStyle] = React.useState('')
		return (
			<div
				tabIndex={0}
				onFocus={() => setFocusStyle('border-[0.069vw] border-black')}
				onBlur={() => setFocusStyle('')}
				className={cn(
					`flex gap-[1.667vw] items-center h-[5vw] sm:h-[2.778vw] w-full rounded-[0.833vw] border-[0.069vw] border-input bg-background px-[0.833vw] py-[0.556vw] ring-offset-background file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground ${focusStyle} ${
						disabled ? 'cursor-not-allowed select-none  opacity-50' : ''
					}`,
					containerClassName
				)}
			>
				{props.img && (
					<div
						className={`relative ${
							sizeImg ? sizeImg : 'size-[4vw] sm:size-[1.67vw]'
						}`}
					>
						<Image src={props.img} fill alt={props.alt ? props.alt : ''} />
					</div>
				)}
				<input
					disabled={disabled ? disabled : false}
					{...props}
					placeholder={props.placeholder}
					type={type}
					className={cn(
						'flex size-full outline-none text-[2.5vw] sm:text-[0.972vw] ',
						className
					)}
					ref={ref}
				/>
			</div>
		)
	}
)
Input.displayName = 'Input'

export { Input }
