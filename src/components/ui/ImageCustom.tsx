import Image, { ImageProps } from 'next/image'

interface ImageCustomProps extends ImageProps {
	size?: string
	src: string
	alt: string
}

export const ImageCustom = ({ size, src, alt, ...props }: ImageCustomProps) => {
	return (
		<div
			className={`relative ${
				size ? size : 'size-[3vw] sm:size-[1.563vw] xl:size-[1.111vw]'
			} `}
		>
			<Image {...props} src={src} fill alt={alt ? alt : src} />
		</div>
	)
}
