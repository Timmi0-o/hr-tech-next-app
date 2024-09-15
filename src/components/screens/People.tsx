'use client'
import { useState } from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { PiBuildingOfficeLight } from 'react-icons/pi'
import { WorkInfoIte } from '../layouts/People/WorkInfoIte'
import { Section } from '../layouts/Section'
import { DropInput } from '../ui/DropInput'
import { DropMenu } from '../ui/DropMenu'
import { ImageCustom } from '../ui/ImageCustom'
import { TextPlusImg } from '../ui/TextPlusImg'

interface Peoples {
	employerPhoto: string
	preferredName: string
	lastName: string
	jobTitle: string
	department: string
	employmentStatus: string
	reportingTo: string
	hireDate: string
}

export const People = () => {
	const [peopleNavIsActive, setPeopleNavIsActive] = useState(0)
	return (
		<div className='relative bg-[#F0F3F8] min-h-[87.9vh] pb-[4.167vw]'>
			<div className='absolute top-0 left-0 w-full h-[30vw] sm:h-[16.9vw] lg:h-[11.181vw] bg-primaryBlue'></div>
			<Section className='relative z-10'>
				<div className='pt-[10vw] sm:pt-[3vw] xl:pt-[4.99vw]'>
					<header className='flex flex-col gap-[2.5vw] sm:gap-[1.111vw]'>
						{/* SETTINGS  */}
						<div className='flex lg:items-center flex-col gap-[2.5vw] sm:gap-[1vw] lg:flex-row items-start lg:justify-between '>
							<TextPlusImg
								className='cursor-pointer text-[2.2vw] lg:text-[1.855vw] xl:text-[1.389vw] xl:leading-[1.667vw]'
								img='/svg/humburger.svg'
							>
								People
							</TextPlusImg>
							<TextPlusImg
								className='cursor-pointer'
								img='/svg/quick_access.svg'
							>
								<p className='text-[1.8vw] lg:text-[1.555vw] xl:text-[1.089vw] text-[#3758AB]'>
									Quick access to the directory
								</p>
							</TextPlusImg>
						</div>
						{/* PEOPLE SETTINGS  */}
						<div className='flex items-start justify-between '>
							<TextPlusImg img='/svg/circle-add.svg'>
								<p className='text-[1.8vw] lg:text-[1.555vw] xl:text-[1.089vw] text-[#3758AB] leading-[1.181vw]'>
									New Employer
								</p>
							</TextPlusImg>
							{/* PC & LAPTOP IPAD NAV  */}
							<div className='hidden sm:flex gap-[1.806vw] items-center'>
								{peopleNavigation.map((nav, i) => (
									<div
										onClick={() => setPeopleNavIsActive(i)}
										key={i}
										className={`flex items-center gap-[0.833vw] h-[7vw] lg:h-[4.883vw] xl:h-[3.403vw] px-[3vw] lg:px-[1.111vw] rounded-ss-[0.556vw] rounded-se-[0.556vw] cursor-pointer duration-300 ease-in-out ${
											peopleNavIsActive === i ? 'bg-[#F0F3F8]' : ''
										}`}
									>
										<ImageCustom
											size='size-[2vw] lg:size-[1.563vw] xl:size-[1.111vw]'
											src={nav.img}
											alt={nav.img}
										/>
										<p className='text-[2vw] lg:text-[0.972vw]'>{nav.title}</p>
									</div>
								))}
							</div>
							{/* MOBILE NAV  */}
							<div className='flex sm:hidden gap-[2vw] items-center translate-y-[-14vw]'>
								{peopleNavigation.map((nav, i) => (
									<div
										onClick={() => setPeopleNavIsActive(i)}
										key={i}
										className={`flex items-center justify-center gap-[0.833vw] h-[15vw] w-[18vw] rounded-[2vw] cursor-pointer duration-300 ease-in-out ${
											peopleNavIsActive === i ? 'bg-[#F0F3F8]' : ''
										}`}
									>
										<ImageCustom
											size='size-[4vw]'
											src={nav.img}
											alt={nav.img}
										/>
										<p className='text-[3vw]'>{nav.title}</p>
									</div>
								))}
							</div>
						</div>
					</header>
					{/* PEOPLE FILTERS  */}
					<div className='flex items-center justify-between mt-[1.667vw]'>
						<div className='flex items-center gap-[1.111vw]'>
							<div className='flex items-center justify-center size-[2.93vw] xl:size-[2.292vw] bg-white rounded-[0.391vw] xl:rounded-[0.278vw]'>
								<ImageCustom
									className='cursor-pointer'
									src='/svg/setting-extend.svg'
									alt='setting-extend'
								/>
							</div>
							<DropInput
								className='w-[40vw] sm:w-[17.778vw]'
								placeholder='Manager'
							/>
							<TextPlusImg img='/svg/teams.svg'>26</TextPlusImg>
						</div>
						<div className='flex items-center gap-[1.111vw]'>
							<p className='text-[2.5vw] sm:text-[1.563vw] xl:text-[0.972vw] font-medium'>
								Showing
							</p>
							<DropInput
								noCloseButton
								className='w-[17vw] sm:w-[12.531vw] xl:w-[7.222vw]'
								placeholder='Active'
							/>
							<DropMenu>
								<ImageCustom src='/svg/setting.svg' alt='setting' />
							</DropMenu>
						</div>
					</div>
					{/* PEOPLE LIST  */}
					<div className='mt-[1.042vw]'>
						{/* PEOPLE TITLES LIST (ONLY PC)  */}
						<div className='hidden lg:grid h-[3.403vw] bg-[#DAE6F2]  grid-cols-custom-8 items-center px-[0.488vw] xl:px-[0.556vw]'>
							{peopleListTitles.map((title, i) => (
								<p
									className='text-[1.1vw] xl:text-[0.972vw] font-medium'
									key={i}
								>
									{title}
								</p>
							))}
						</div>
						{/* PEOPLES PC  */}
						<div>
							{peoples.map((people, i) => (
								<div
									className='hidden lg:grid grid-cols-custom-8 px-[0.488vw] xl:px-[0.556vw] py-[1.111vw] border-b-[0.139vw] border-b-[#DAE6F2] cursor-pointer lg:hover:bg-[#cfdae5] rounded-[0.278vw] duration-200 ease-in-out'
									key={i}
								>
									{Object.entries(people).map((item, j) =>
										j === 0 ? (
											<div
												className='flex items-center justify-center size-[5.5vw] xl:size-[4.167vw] bg-[#DAE6F2] rounded-full text-[2.083vw] text-[#FCFCFE] '
												key={j}
											>
												{people.preferredName
													.toString()
													.slice(0, 1)
													.toUpperCase()}
												{people.lastName.toString().slice(0, 1).toUpperCase()}
											</div>
										) : (
											<p
												className={`text-[1.33vw] xl:text-[0.972vw] font-medium ${
													j === 1 || j === 2 ? 'text-[#3758AB]' : ''
												}`}
												key={j}
											>
												{item[1]}
											</p>
										)
									)}
								</div>
							))}
						</div>
						{/* PEOPLES MOBILE  */}
						<div className='flex flex-wrap gap-[1.563vw]'>
							{peoples.map((people: Peoples, i) => (
								<div
									className='flex flex-col gap-[2vw] sm:gap-[1.563vw] items-start justify-center w-[49%] sm:w-[32%] lg:hidden p-[2vw] sm:p-[1.25vw] xl:px-[0.556vw] my-[1.111vw] rounded-[1.875vw] bg-white cursor-pointer lg:hover:bg-[#cfdae5] duration-200 ease-in-out border-[0.156vw] border-[#DAE6F2] text-black text-[1.563vw]'
									key={i}
								>
									{/* SECURITY INFO  */}
									<div className='flex gap-[1.25vw]'>
										{/* AVATAR  */}
										<div className='flex items-center justify-center size-[12vw] sm:size-[6.25vw] rounded-full bg-[#DAE6F2] text-[4.188vw] text-[#FCFCFE]'>
											{people.preferredName.toUpperCase().slice(0, 1)}
											{people.lastName.toUpperCase().slice(0, 1)}
										</div>
										{/* NAME & LAST NAME  */}
										<div className='text-[#3758AB] text-[3.063vw] sm:text-[1.875vw]'>
											<p>{people.preferredName}</p>
											<p>{people.lastName}</p>
										</div>
									</div>
									{/* WORK INFO */}
									<div className='flex flex-col gap-[1.4vw] sm:gap-[0.625vw]'>
										<WorkInfoIte>
											<CgWorkAlt className='size-[4vw] sm:size-[2.5vw]' />
											<p>{people.jobTitle}</p>
										</WorkInfoIte>
										<WorkInfoIte>
											<PiBuildingOfficeLight className='size-[4vw] sm:size-[2.5vw]' />
											<p>{people.department}</p>
										</WorkInfoIte>
										<WorkInfoIte>
											<ImageCustom
												size='size-[3.7vw] sm:size-[2.1vw]'
												src='/svg/full-time.svg'
												alt='full-time'
											/>
											<p>{people.employmentStatus}</p>
										</WorkInfoIte>
										<WorkInfoIte>
											<p>Boss:</p>
											<p>{people.reportingTo}</p>
										</WorkInfoIte>
										<WorkInfoIte>
											<p>Hire date:</p>
											<p>{people.hireDate}</p>
										</WorkInfoIte>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</Section>
		</div>
	)
}

const peopleNavigation = [
	{ img: '/svg/humburger.svg', title: 'List' },
	{ img: '/svg/directory.svg', title: 'Directory' },
	{ img: '/svg/chat.svg', title: 'Org Chat' },
]

const peopleListTitles = [
	'Employer Photo',
	'Preferred Name',
	'Last Name',
	'Job Title',
	'Department',
	'Employment Status',
	'Reporting To',
	'Hire Date',
]

const peoples: Peoples[] = [
	{
		employerPhoto: '',
		preferredName: 'Alexsandra',
		lastName: 'Kuibyshevskaya',
		jobTitle: 'HR Administrator',
		department: 'Human Persons',
		employmentStatus: 'Full-Time',
		reportingTo: 'Jennifer Caldwell',
		hireDate: '04/20/2022',
	},
	{
		employerPhoto: 'https://example.com/photos/john_doe.jpg',
		preferredName: 'John',
		lastName: 'Doe',
		jobTitle: 'Software Engineer',
		department: 'Engineering',
		employmentStatus: 'Full-Time',
		reportingTo: 'Sarah Johnson',
		hireDate: '07/15/2021',
	},
	{
		employerPhoto: 'https://example.com/photos/emily_smith.jpg',
		preferredName: 'Emily',
		lastName: 'Smith',
		jobTitle: 'Marketing Specialist',
		department: 'Marketing',
		employmentStatus: 'Part-Time',
		reportingTo: 'Michael Brown',
		hireDate: '03/01/2023',
	},
	{
		employerPhoto: 'https://example.com/photos/david_wilson.jpg',
		preferredName: 'David',
		lastName: 'Wilson',
		jobTitle: 'Financial Analyst',
		department: 'Finance',
		employmentStatus: 'Full-Time',
		reportingTo: 'Laura Davis',
		hireDate: '11/10/2020',
	},
	{
		employerPhoto: 'https://example.com/photos/jessica_lee.jpg',
		preferredName: 'Jessica',
		lastName: 'Lee',
		jobTitle: 'Graphic Designer',
		department: 'Creative',
		employmentStatus: 'Contract',
		reportingTo: 'Robert Taylor',
		hireDate: '09/22/2022',
	},
	{
		employerPhoto: 'https://example.com/photos/chris_martin.jpg',
		preferredName: 'Chris',
		lastName: 'Martin',
		jobTitle: 'Operations Manager',
		department: 'Operations',
		employmentStatus: 'Full-Time',
		reportingTo: 'Karen White',
		hireDate: '05/05/2019',
	},
]
