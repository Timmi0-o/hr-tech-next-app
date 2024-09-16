'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useUser } from '../hooks/useUser'
import { Button } from '../ui/button'
import { ImageCustom } from '../ui/ImageCustom'
import { Input } from '../ui/input'

export const Header = () => {
	const router = useRouter()
	const { user: profile } = useUser()
	const [navigateIsActive, setNavigateIsActive] = useState<number>(
		(window ? Number(localStorage.getItem('headerNavigateNum')) : 1) || 1
	)
	const [navigateMobile, setNavigateMobile] = useState(false)
	const [actionButtonIsActive, setActionButtonIsActive] = useState<
		null | number
	>(null)

	const actionButtons = [
		{ img: '/svg/setting.svg', component: <div></div> },
		{ img: '/svg/support.svg', component: <div></div> },
		{ img: profile?.myProfile.avatar, component: <div className=''></div> },
	]

	return (
		<div className='flex items-center sm:items-start justify-center gap-[4.142vw] h-[14vw] sm:h-[5.972vw] px-[1.667vw] pt-[2.222vw]'>
			<div className='flex flex-row-reverse items-center gap-[5vw]'>
				{/* TITLE  */}
				<Link onClick={() => setNavigateIsActive(0)} href={'/'}>
					<h1 className='text-[4vw] sm:text-[1.389vw] font-semibold'>
						HarmonyHR
					</h1>
				</Link>
				{/* NAVIGATION MOBILE  */}
				<div className='relative sm:hidden z-20'>
					<ImageCustom
						onClick={() => setNavigateMobile((prev) => !prev)}
						size='size-[5vw]'
						className='block sm:hidden'
						src='/svg/humburger.svg'
						alt='humburger'
					/>
					<div
						className={`absolute top-[9.5vw] flex flex-col gap-[3.125vw] duration-300 ease-in-out w-[31.25vw] bg-[#eee] border-[0.313vw] border-black rounded-[2.5vw] p-[1.563vw] ${
							navigateMobile ? '' : ' invisible opacity-0 mt-[6.25vw]'
						}`}
					>
						{menuLinks.map((nav, i) => (
							<Link href={nav.link} key={i}>
								<div
									onClick={() => {
										setNavigateIsActive(i)
										window &&
											localStorage.setItem('headerNavigateNum', i.toString())
										setNavigateMobile(false)
									}}
									className={`flex items-center justify-center h-[3.75vw] px-[1.111vw] rounded-ss-[0.556vw] rounded-se-[0.556vw] transition-colors duration-300 ${
										navigateIsActive === i
											? 'bg-[#dadada] rounded-[2.75vw]'
											: ''
									}`}
								>
									<p className='text-[3.25vw] my-[1.563vw]'>{nav.title}</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
			{/* NAVIGATION  PC & LAPTOP & IAD */}
			<div className='hidden sm:flex'>
				{menuLinks.map((nav, i) => (
					<Link href={nav.link} key={i}>
						<div
							onClick={() => {
								setNavigateIsActive(i)
								window &&
									localStorage.setItem('headerNavigateNum', i.toString())
							}}
							className={`flex items-center justify-center h-[3.75vw] px-[1.111vw] rounded-ss-[0.556vw] rounded-se-[0.556vw] transition-colors duration-300 ${
								navigateIsActive === i ? 'bg-primaryBlue' : ''
							}`}
						>
							<p className='text-[1.25vw]'>{nav.title}</p>
						</div>
					</Link>
				))}
			</div>

			{/* SEARCH */}
			<Input
				img='/svg/search.svg'
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
								i === 0 || i === 1 ? 'hidden sm:block' : ''
							} ${
								i + 1 === actionButtons.length
									? 'size-[8vw] sm:size-[2.639vw] active:opacity-50'
									: 'size-[4vw] sm:size-[1.667vw]'
							}`}
						>
							{action.img ? (
								<Image className='rounded-full' src={action.img} fill alt='' />
							) : (
								<div className='size-[2.639vw] bg-[#dbdbdb] rounded-full'></div>
							)}
						</div>
						<div
							className={`flex flex-col sm:flex-row items-center justify-center absolute z-20 top-[9vw] sm:top-[2.778vw] left-[-3.556vw] w-[25vw] sm:w-[16.833vw] bg-[#f3f3f3] rounded-[0.833vw] duration-300 px-[1.389vw] py-[2.083vw] ${
								actionButtonIsActive === i
									? ''
									: 'invisible opacity-0 mt-[1.389vw]'
							}`}
						>
							<Button
								onClick={() => {
									router.push('/auth')
									window && localStorage.removeItem('token')
									window && localStorage.removeItem('headerNavigateNum')
								}}
								className='w-full'
							>
								Log Out
							</Button>
							<div className='sm:hidden flex flex-col gap-[2vw] w-full mt-[2vw]'>
								<Button
									onClick={() => {
										router.push('/auth')
										window && localStorage.removeItem('token')
										window && localStorage.removeItem('headerNavigateNum')
									}}
									className='w-full'
								>
									Settings
								</Button>
								<Button
									onClick={() => {
										router.push('/auth')
										window && localStorage.removeItem('token')
										window && localStorage.removeItem('headerNavigateNum')
									}}
									className='w-full'
								>
									Support
								</Button>
							</div>
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
