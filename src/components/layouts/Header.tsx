'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useUser } from '../hooks/useUser'
import { Input } from '../ui/input'

export const Header = () => {
	const { user: profile } = useUser()
	const [navigateIsActive, setNavigateIsActive] = useState<number>(
		Number(localStorage.getItem('headerNavigateNum')) || 0
	)
	const [actionButtonIsActive, setActionButtonIsActive] = useState<
		null | number
	>(null)

	const actionButtons = [
		{ img: '/svg/setting.svg' },
		{ img: '/svg/support.svg' },
		{ img: profile?.myProfile.avatar },
	]

	return (
		<div className='flex items-center justify-center gap-[4.142vw] h-[5.972vw] px-[1.667vw] pt-[2.222vw]'>
			{/* TITLE  */}
			<Link onClick={() => setNavigateIsActive(0)} href={'/'}>
				<h1 className='text-[1.389vw] font-semibold'>HarmonyHR</h1>
			</Link>
			{/* NAVIGATION  */}
			<div className='flex'>
				{menuLinks.map((nav, i) => (
					<Link href={nav.link} key={i}>
						<div
							onClick={() => {
								setNavigateIsActive(i)
								localStorage.setItem('headerNavigateNum', i.toString())
							}}
							className={`flex items-center justify-center h-[3.75vw] px-[1.111vw] rounded-ss-[0.556vw] rounded-se-[0.556vw] transition-colors duration-300 ${
								navigateIsActive === i ? 'bg-primaryBlue' : ''
							}`}
						>
							<p>{nav.title}</p>
						</div>
					</Link>
				))}
			</div>
			{/* SEARCH */}
			<Input
				img='/svg/search.svg'
				sizeImg='size-[1.667vw]'
				placeholder='Search'
				containerClassName='w-[27.431vw] border-[0.069vw] border-black'
			/>
			{/* ACTION BUTTONS  */}
			<div
				className={`flex items-center relative gap-[1.667vw] duration-300 ${
					profile ? '' : ' invisible opacity-0'
				}`}
			>
				{actionButtons.map((action, i) => (
					<div
						onClick={() =>
							setActionButtonIsActive((prev) => (prev === i ? null : i))
						}
						key={i}
					>
						<div
							className={`relative ${
								i + 1 === actionButtons.length
									? 'size-[2.639vw]'
									: 'size-[1.667vw]'
							}`}
						>
							{action.img ? (
								<Image className='rounded-full' src={action.img} fill alt='' />
							) : (
								<div className='size-[2.639vw] bg-[#dbdbdb] rounded-full'></div>
							)}
						</div>

						<div
							className={`flex items-center justify-center absolute z-20 top-[2.778vw] left-[-3.556vw] w-[16.833vw] h-[24.722vw] bg-[#aaa] rounded-[0.833vw] duration-300 ${
								actionButtonIsActive === i
									? ''
									: 'invisible opacity-0 mt-[1.389vw]'
							}`}
						>
							{i}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
const menuLinks = [
	{ title: 'Home', link: '/' },
	{ title: 'My Info', link: '/my-info' },
	{ title: 'People', link: '/people' },
	{ title: 'Hiring', link: '/hiring' },
	{ title: 'Reports', link: '/reports' },
	{ title: 'Files', link: '/files' },
]
