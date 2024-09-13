'use client'
import { useState } from 'react'
import { useUser } from '../hooks/useUser'
import { TimeOff } from '../layouts/MyInfo/TimeOff'
import { DropMenu } from '../layouts/MyInfo/ui/DropMenu'
import { SideBarItem } from '../layouts/MyInfo/ui/SideBarItem'
import { Text } from '../layouts/MyInfo/ui/TextPlusImg'
import { Section } from '../layouts/Section'
import { ImageCustom } from '../ui/ImageCustom'

export const MyInfo = () => {
	const { user } = useUser()
	const [isDirectReportsPeoplesFull, setIsDirectReportsPeoplesFull] =
		useState(false)

	const [infoNavigateIsActive, setInfoNavigateIsActive] = useState<number>(
		Number(localStorage.getItem('myInfoNavigate')) | 0
	)
	return (
		<div className='relative bg-[#F0F3F8] min-h-[87.9vh] pt-[1.389vw]'>
			<div className='absolute top-0 left-0 w-full h-[12.778vw] bg-primaryBlue'></div>

			<div className='relative z-10 '>
				<Section className='flex flex-row gap-[1.736vw]'>
					{/* SIDEBAR  */}
					<div className='flex flex-col items-center w-[15.625vw]'>
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
									<p className='text-[0.972vw] font-medium'>07911 654321</p>
								</div>
								{/* EMAIL  */}
								<div className='flex items-center gap-[0.556vw]'>
									<ImageCustom src={'/svg/email.svg'} alt='email' />
									<p className='text-[0.972vw] font-medium'>
										avd.yana@videorollnet
									</p>
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
								<Text img='/svg/number-my-info.svg'>5</Text>
								<Text img='/svg/full-time.svg'>Full-Time</Text>
								<Text img='/svg/operations.svg'>Operations</Text>
								<Text img='/svg/location.svg'>Europe</Text>
								<Text img='/svg/city.svg'>London, UK</Text>
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
										<Text img='/svg/avatar.svg' key={i}>
											{people}
										</Text>
									))}
									<Text
										onClick={() =>
											setIsDirectReportsPeoplesFull(!isDirectReportsPeoplesFull)
										}
										img='/svg/teams.svg'
										className='cursor-pointer'
									>
										{isDirectReportsPeoplesFull
											? 'role up'
											: `${directReportsPeoples.length - 4} More...`}
									</Text>
								</div>
							</SideBarItem>
						</div>
					</div>
					{/* CONTENT  */}
					<div className='w-[72.708vw] mt-[3vw]'>
						<header className='flex items-center justify-between mb-[2.261vw]'>
							<h1 className='text-[1.944vw] font-semibold'>
								Alexandra Kuibyshevskaya
							</h1>
							<div className='flex gap-[1.111vw]'>
								<DropMenu>
									<p>Request a Change</p>
									<ImageCustom src={'/svg/arrow.svg'} alt='arrow' />
								</DropMenu>
								<DropMenu>
									<ImageCustom src={'/svg/setting.svg'} alt='setting' />
									<ImageCustom src={'/svg/arrow.svg'} alt='arrow' />
								</DropMenu>
							</div>
						</header>
						<main className='w-full'>
							{/* TITLES  */}
							<div className='flex gap-[1.111vw]'>
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
										<p className='text-[0.972vw]'>{link.title}</p>
									</div>
								))}
								<Text
									className='flex-row-reverse items-center cursor-pointer h-[3.194vw]'
									img='/svg/arrow-bold.svg'
								>
									More
								</Text>
							</div>
							{/* CONTENTS  */}
							{infoLinks.map((link, i) => (
								<div
									key={i}
									className={`duration-500 ease-in-out ${
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
		title: '1',
		content: (
			<div className='rounded-es-[1.111vw] rounded-ee-[1.111vw] w-full h-[30vh] bg-white'>
				10
			</div>
		),
	},
	{
		title: '2',
		content: (
			<div className='rounded-es-[1.111vw] rounded-ee-[1.111vw] w-full h-[30vh] bg-white'>
				11
			</div>
		),
	},
	{
		title: '3',
		content: (
			<div className='rounded-es-[1.111vw] rounded-ee-[1.111vw] w-full h-[30vh] bg-white'>
				12
			</div>
		),
	},
	{
		title: '4',
		content: (
			<div className='rounded-es-[1.111vw] rounded-ee-[1.111vw] w-full h-[30vh] bg-white'>
				13
			</div>
		),
	},
]
