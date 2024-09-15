import { ReactNode } from 'react'

export const SideBarItem = ({
	children,
	gapMini,
}: {
	children: ReactNode
	gapMini?: boolean
}) => {
	return (
		<div
			className={`flex flex-col ${
				gapMini ? 'gap-[0.556vw]' : 'gap-[1.111vw]'
			}  p-[1.667vw] bg-[#FCFCFE] rounded-[1.111vw] text-[1.172vw] xl:text-[0.972vw]`}
		>
			{children}
		</div>
	)
}
