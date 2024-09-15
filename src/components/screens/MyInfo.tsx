'use client'
import { useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useUser } from '../hooks/useUser'
import { TimeOff } from '../layouts/MyInfo/TimeOff'
import { SideBarItem } from '../layouts/MyInfo/ui/SideBarItem'
import { Section } from '../layouts/Section'
import { DropMenu } from '../ui/DropMenu'
import { ImageCustom } from '../ui/ImageCustom'
import { TextPlusImg } from '../ui/TextPlusImg'

export const MyInfo = () => {
	const { user } = useUser()
	const [isDirectReportsPeoplesFull, setIsDirectReportsPeoplesFull] =
		useState(false)

	const [isMoreInfoLinks, setIsMoreInfoLinks] = useState(false)

	const [infoNavigateIsActive, setInfoNavigateIsActive] = useState<number>(
		Number(localStorage.getItem('myInfoNavigate')) | 0
	)
	return (
		<div className='relative bg-white sm:bg-[#F0F3F8] min-h-[87.9vh] pt-[1.389vw] pb-[4.167vw]'>
			<div className='absolute top-0 left-0 w-full h-[49.063vw] sm:h-[13.9vw] xl:h-[12.778vw] bg-primaryBlue'></div>

			<div className='relative z-10'>
				<Section className='flex justify-center flex-row gap-[1.736vw]'>
					{/* SIDEBAR  */}
					<div className='hidden flex-col sm:flex items-center w-fit xl:w-[15.625vw]'>
						<ImageCustom
							src={user?.myProfile.avatar || ''}
							alt='user'
							size='size-[10.417vw]'
							className={`relative duration-200 ease-in-out translate-y-[0.972vw] rounded-full ${
								user ? '' : 'invisible opacity-0 ml-[-0.694vw]'
							}`}
						/>
						{/* SECTIONS  */}
						<div className='flex flex-col gap-[1.111vw]'>
							<SideBarItem>
								{/* PHONE  */}
								<div className='flex items-center gap-[0.556vw]'>
									<ImageCustom src={'/svg/phone.svg'} alt='phone' />
									<a
										href='tel:07911654321'
										className='text-[0.972vw] font-medium'
									>
										07911 654321
									</a>
								</div>
								{/* EMAIL  */}
								<div className='flex items-center gap-[0.556vw]'>
									<ImageCustom src={'/svg/email.svg'} alt='email' />
									<a
										href='mailto:avd.yana@videorollnet.com'
										className='text-[0.972vw] font-medium'
									>
										avd.yana@videorollnet.com
									</a>
								</div>
								{/* SOCIAL LINKS  */}
								<div className='flex gap-[0.972vw]'>
									<ImageCustom src={'/svg/linked-in.svg'} alt='linked-in' />
									<ImageCustom src={'/svg/facebook.svg'} alt='facebook' />
									<ImageCustom src={'/svg/x.svg'} alt='x' />
								</div>
							</SideBarItem>
							<SideBarItem>
								<h2>Hire data</h2>
								<div className='flex flex-col gap-[0.556vw]'>
									<p>Sep. 3,2020</p>
									<p>3y - 9m - 20d</p>
								</div>
							</SideBarItem>
							<SideBarItem gapMini>
								<TextPlusImg img='/svg/number-my-info.svg'>5</TextPlusImg>
								<TextPlusImg img='/svg/full-time.svg'>Full-Time</TextPlusImg>
								<TextPlusImg img='/svg/operations.svg'>Operations</TextPlusImg>
								<TextPlusImg img='/svg/location.svg'>Europe</TextPlusImg>
								<TextPlusImg img='/svg/city.svg'>London, UK</TextPlusImg>
							</SideBarItem>
							<SideBarItem gapMini>
								<h2>Direct Reports</h2>
								<div
									className={`flex flex-col duration-1000 overflow-hidden gap-[0.556vw]`}
								>
									{(isDirectReportsPeoplesFull
										? directReportsPeoples
										: directReportsPeoples.slice(0, 4)
									).map((people, i) => (
										<TextPlusImg img='/svg/avatar.svg' key={i}>
											{people}
										</TextPlusImg>
									))}
									<TextPlusImg
										onClick={() =>
											setIsDirectReportsPeoplesFull(!isDirectReportsPeoplesFull)
										}
										img='/svg/teams.svg'
										className='cursor-pointer'
									>
										{isDirectReportsPeoplesFull
											? 'role up'
											: `${directReportsPeoples.length - 4} More...`}
									</TextPlusImg>
								</div>
							</SideBarItem>
						</div>
					</div>
					{/* CONTENT  */}
					<div className='w-[85vw] sm:w-[72.708vw] mt-[3vw] sm:mt-[1vw]'>
						<header className='flex items-center justify-between mb-[2.261vw]'>
							{/* AVATAR ONLY MOBILE  */}
							<div className='block sm:hidden size-[18.75vw] mr-[6.875vw]'>
								<ImageCustom
									className=' rounded-full'
									size='size-[18.75vw]'
									src={user?.myProfile?.avatar || ''}
									alt='avatar'
								/>
							</div>
							{/* NAME & (TREE DOTS ONLY MOBILE)  */}
							<div className='flex justify-between items-center'>
								<h1 className='text-[6.25vw] sm:text-[3vw] lg:text-[1.944vw] font-semibold'>
									Alexandra Kuibyshevskaya
								</h1>
								<ImageCustom
									className='block sm:hidden'
									size='size-[5vw]'
									src='/svg/three-dots.svg'
									alt='dots'
								/>
							</div>
							<div className='hidden sm:flex gap-[1.111vw]'>
								<DropMenu>
									<p>Request a Change</p>
								</DropMenu>
								<DropMenu>
									<ImageCustom src={'/svg/setting.svg'} alt='setting' />
								</DropMenu>
							</div>
						</header>
						<main className='w-full'>
							{/* TITLES PC/LAPTOP/IPAD */}
							<div className='hidden sm:flex gap-[1.111vw]'>
								{infoLinks.slice(0, 9).map((link, i) => (
									<div
										key={i}
										onClick={() => {
											setInfoNavigateIsActive(i)
											localStorage.setItem('myInfoNavigate', i.toString())
										}}
										className={`flex items-center h-[3.194vw] rounded-ss-[0.556vw] rounded-se-[0.556vw] transition-colors duration-300 px-[1.111vw] cursor-pointer ${
											infoNavigateIsActive === i ? 'bg-white' : ''
										}`}
									>
										<p className='text-[1.074vw] xl:text-[0.972vw]'>
											{link.title}
										</p>
									</div>
								))}
								<div className='relative'>
									<TextPlusImg
										onClick={() => setIsMoreInfoLinks(!isMoreInfoLinks)}
										className='flex-row-reverse items-center cursor-pointer h-[3.194vw]'
										img='/svg/arrow-bold.svg'
										imgSize='size-[1vw] xl:size-[1.111vw]'
										textSize='text-[1.074vw] xl:text-[0.972vw]'
									>
										More
									</TextPlusImg>
									<div
										className={`absolute flex flex-col items-center border w-[10vw] bg-[#DAE6F2] rounded-es-[0.556vw] rounded-ee-[0.556vw] gap-[0.694vw] duration-200 ease-in-out ${
											isMoreInfoLinks ? '' : 'invisible opacity-0'
										}`}
									>
										{infoLinks.slice(9).map((link, i) => (
											<p
												onClick={() => {
													setInfoNavigateIsActive(9 + i)
													setIsMoreInfoLinks(false)
												}}
												className='text-[0.972vw] font-medium cursor-pointer py-[0.347vw] border-b-[0.069vw] border-b-[#F0F3F8] w-full text-center'
												key={i}
											>
												{link.title}
											</p>
										))}
									</div>
								</div>
							</div>
							{/* TITLES MOBILE*/}
							<div className='block sm:hidden mt-[11.5vw]'>
								<Swiper slidesPerView={3.1} spaceBetween={10}>
									<div className='flex'>
										{infoLinks.map((link, i) => (
											<SwiperSlide key={i}>
												<div
													onClick={() => {
														setInfoNavigateIsActive(i)
														localStorage.setItem('myInfoNavigate', i.toString())
													}}
													className={`flex items-center h-[15.313vw] rounded-ss-[2.5vw] rounded-se-[2.5vw] transition-colors duration-300 px-[1.111vw] cursor-pointer ${
														infoNavigateIsActive === i ? 'bg-white' : ''
													}`}
												>
													<p className='text-[4.375vw]'>{link.title}</p>
												</div>
											</SwiperSlide>
										))}
									</div>
								</Swiper>
							</div>
							{/* CONTENTS  */}
							{infoLinks.map((link, i) => (
								<div
									key={i}
									className={`mt-[1.875vw] sm:mt-0 duration-500 ease-in-out ${
										infoNavigateIsActive === i
											? ''
											: 'opacity-0 hidden ml-[2.389vw]'
									}`}
								>
									{link.content}
								</div>
							))}
						</main>
					</div>
				</Section>
			</div>
		</div>
	)
}

const directReportsPeoples = [
	'Shane',
	'Nathan',
	'Mitchell',
	'Philip',
	'Max',
	'Alex',
	'Kate',
	'Jack',
]

const infoLinks = [
	{
		title: 'Personal',
		content: (
			<div className='rounded-es-[1.111vw] rounded-ee-[1.111vw] w-full h-[30vh] bg-white'>
				1
			</div>
		),
	},
	{
		title: 'Job',
		content: (
			<div className='rounded-es-[1.111vw] rounded-ee-[1.111vw] w-full h-[30vh] bg-white'>
				2{' '}
			</div>
		),
	},
	{
		title: 'Time Off',
		content: <TimeOff />,
	},
	{
		title: 'Emergency',
		content: (
			<div className='rounded-es-[1.111vw] rounded-ee-[1.111vw] w-full h-[30vh] bg-white'>
				4
			</div>
		),
	},
	{
		title: 'Documents',
		content: (
			<div className='rounded-es-[1.111vw] rounded-ee-[1.111vw] w-full h-[30vh] bg-white'>
				5
			</div>
		),
	},
	{
		title: 'Notes',
		content: (
			<div className='rounded-es-[1.111vw] rounded-ee-[1.111vw] w-full h-[30vh] bg-white'>
				6
			</div>
		),
	},
	{
		title: 'Benefits',
		content: (
			<div className='rounded-es-[1.111vw] rounded-ee-[1.111vw] w-full h-[30vh] bg-white'>
				7
			</div>
		),
	},
	{
		title: 'Training',
		content: (
			<div className='rounded-es-[1.111vw] rounded-ee-[1.111vw] w-full h-[30vh] bg-white'>
				8
			</div>
		),
	},
	{
		title: 'Assets',
		content: (
			<div className='rounded-es-[1.111vw] rounded-ee-[1.111vw] w-full h-[30vh] bg-white'>
				9
			</div>
		),
	},
	{
		title: 'More 1',
		content: (
			<div className='rounded-es-[1.111vw] rounded-ee-[1.111vw] w-full h-[30vh] bg-white'>
				10
			</div>
		),
	},
	{
		title: 'More 2',
		content: (
			<div className='rounded-es-[1.111vw] rounded-ee-[1.111vw] w-full h-[30vh] bg-white'>
				11
			</div>
		),
	},
	{
		title: 'More 3',
		content: (
			<div className='rounded-es-[1.111vw] rounded-ee-[1.111vw] w-full h-[30vh] bg-white'>
				12
			</div>
		),
	},
	{
		title: 'More 4',
		content: (
			<div className='rounded-es-[1.111vw] rounded-ee-[1.111vw] w-full h-[30vh] bg-white'>
				13
			</div>
		),
	},
]
