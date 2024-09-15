import { DropInput } from '@/components/ui/DropInput'
import { ImageCustom } from '@/components/ui/ImageCustom'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TextPlusImg } from '../../ui/TextPlusImg'
import { PageItem } from './ui/PageItem'
import { SectionItemPlusBorder } from './ui/SectionItemPlusBorder'

export const TimeOff = () => {
	return (
		<PageItem>
			<header className='flex items-center justify-between mb-[4.667vw] pb-[0.903vw] border-b-[0.069vw] border-b-[#7C96B1]'>
				<div className='hidden sm:flex gap-[0.833vw] items-center'>
					<ImageCustom src='/svg/time-off.svg' alt='time-off' />
					<p className='text-[2.188vw] xl:text-[1.389vw] text-[#204973] font-medium  w-fit'>
						Time Off
					</p>
				</div>
				<div className='flex w-full sm:w-fit flex-col sm:flex-row items-end sm:items-center gap-[2.083vw] mb-[3.5vw] sm:mb-0'>
					<p className='text-[4.375vw] sm:text-[2.031vw] lg:text-[1.172vw] xl:text-[0.972vw] font-medium'>
						Accrual Level Start Date
						<span className='text-[#3758AB]'> 03/09-2020</span>
					</p>
					<button className='p-[1.5vw] sm:p-[0.556vw] border-[0.069vw] border-black rounded-[1.5vw] lg:rounded-[0.625vw] lg:hover:bg-[#3758AB] lg:hover:text-white duration-200 ease-in-out'>
						<p className='text-[4.375vw] sm:text-[1.719vw] lg:text-[0.972vw] font-medium'>
							Add Time Off Policy
						</p>
					</button>
				</div>
			</header>
			{/* TIMELIEST  PC/LAPTOP/IPAD */}
			<div className='hidden sm:block'>
				<SectionItemPlusBorder>
					<div className='flex gap-[3.333vw] justify-center mb-[3.403vw]'>
						{timeList.map((item, i) => (
							<div
								key={i}
								className='flex flex-col items-center gap-[0.278vw] w-[18.333vw] py-[1.111vw] font-semibold bg-[#F0F3F8] rounded-[0.556vw]'
							>
								<h2 className='text-[1.389vw]'>{item.title}</h2>
								<TextPlusImg
									className='text-[2.083vw]'
									imgSize='size-[2.083vw]'
									img={item.stats.img}
								>
									{item.stats.num}
								</TextPlusImg>
								<p className='text-[0.972vw]'>{item.possibility}</p>
							</div>
						))}
					</div>
					<TextPlusImg img='/svg/full-time.svg'>Upcoming Time Off</TextPlusImg>
				</SectionItemPlusBorder>
			</div>
			{/* TIMELIEST MOBILE*/}
			<div className='sm:hidden'>
				<Swiper slidesPerView={1.2} spaceBetween={20}>
					<SectionItemPlusBorder>
						<div className='flex justify-center'>
							{timeList.map((item, i) => (
								<SwiperSlide key={i}>
									<div className='flex flex-col items-center gap-[0.278vw] w-full py-[5vw] font-semibold bg-[#F0F3F8] rounded-[2.5vw]'>
										<h2 className='text-[6.25vw]'>{item.title}</h2>
										<TextPlusImg
											textSize='text-[9.375vw]'
											imgSize='size-[9.375vw]'
											img={item.stats.img}
										>
											{item.stats.num}
										</TextPlusImg>
										<p className='text-[4.375vw]'>{item.possibility}</p>
									</div>
								</SwiperSlide>
							))}
						</div>
					</SectionItemPlusBorder>
				</Swiper>
				<TextPlusImg
					textSize='text-[4.375vw]'
					imgSize='size-[5vw]'
					className='mt-[7.5vw] mb-[5vw]'
					img='/svg/full-time.svg'
				>
					Upcoming Time Off
				</TextPlusImg>
			</div>
			{/* MEDICAL  */}
			<SectionItemPlusBorder>
				<div className='flex items-center gap-[4.375vw] md:gap-[0.972vw]'>
					<ImageCustom
						size='size-[9.375vw] sm:size-[2vw]'
						src='/svg/medical.svg'
						alt='medical'
					/>
					<div className='flex flex-col items-start text-[4.375vw] sm:text-[1.67vw] lg:text-[0.972vw] font-medium'>
						<span>Jan 27</span>
						<div className='flex gap-[0.278vw] items-center'>
							<div className='size-[1.694vw] sm:size-[1vw] lg:size-[0.5vw] bg-black rounded-full'></div>
							<span>1 dey of Sick</span>
						</div>
					</div>
				</div>
			</SectionItemPlusBorder>
			<SectionItemPlusBorder>
				<div className='flex items-center gap-[4.375vw] md:gap-[0.972vw]'>
					<ImageCustom
						size='size-[9.375vw] sm:size-[2vw]'
						src='/svg/big-manu.svg'
						alt='big-many'
					/>
					<div className='flex flex-col text-[4.375vw] sm:text-[1.67vw] lg:text-[0.972vw] font-medium'>
						<p>Jul 4</p>
						<p>Independence Day</p>
					</div>
				</div>
			</SectionItemPlusBorder>
			<TextPlusImg
				textSize=' text-[4.375vw] sm:text-[1.67vw] lg:text-[0.972vw]'
				imgSize='size-[5vw] sm:size-[2vw] lg:size-[1.563vw] xl:size-[1.111vw]'
				className='mb-[5vw]'
				img='/svg/history.svg'
			>
				History
			</TextPlusImg>
			{/* FILTER SECTION  */}
			<div>
				{/* FILTERS  */}
				<div className='flex flex-col sm:flex-row justify-between  items-start  gap-[5vw] sm:gap-0 sm:items-center mb-[5.5vw] sm:mb-[1.111vw]'>
					<div className='flex items-center gap-[1.111vw]'>
						<DropInput
							className='w-[83vw] sm:w-[17.778vw]'
							placeholder='Sick'
						/>
						<DropInput
							className='hidden sm:flex w-[10vw] xl:w-[6.667vw]'
							placeholder='All'
						/>
					</div>
					<div className='flex items-center justify-between w-full'>
						<DropInput className='block sm:hidden w-[30vw]' placeholder='All' />
						<DropInput
							noCloseButton
							className='w-[50vw] sm:w-[16vw] xl:w-[12.222vw]'
							placeholder='Balance History'
						/>
					</div>
				</div>
				{/* RESULT TABLE  PC/LAPTOP/IPAD */}
				<div className='hidden sm:block'>
					{/* TITLES  */}
					<div className='h-[3.403vw] bg-[#DAE6F2] grid grid-cols-custom-5-lg xl:grid-cols-custom-5 justify-start items-center pl-[0.556vw]'>
						{tableTitles.map((title, i) =>
							title.img ? (
								<TextPlusImg
									gap='gap-[0.278vw]'
									className='flex-row-reverse'
									key={i}
									img={title.img}
								>
									{title.title}
								</TextPlusImg>
							) : (
								<p
									className='text-[3vw] sm:text-[1.367vw] xl:text-[0.972vw]'
									key={i}
								>
									{title.title}
								</p>
							)
						)}
					</div>
					{/* VALUES  */}
					<div className='pl-[0.556vw] mt-[0.972vw] pb-[6.319vw]'>
						{tableValue.map((value, i) => (
							<div
								className='grid grid-cols-custom-5-lg xl:grid-cols-custom-5 py-[0.556vw] border-b-[0.139vw] border-b-[#7C96B1] lg:hover:bg-[#DAE6F2] duration-300 ease-in-out cursor-pointer'
								key={i}
							>
								{Object.entries(value).map((item, j) => (
									<p className='text-[1.172vw] xl:text-[0.972vw]' key={j}>
										{item[1]}
									</p>
								))}
							</div>
						))}
					</div>
				</div>
				{/* table mobile */}
				<div className='block sm:hidden'>
					<Swiper slidesPerView={0.45}>
						<SwiperSlide>
							{/* TITLES  */}
							<div className='h-[9.375vw] bg-[#DAE6F2] grid grid-cols-custom-5-xs justify-start items-center pl-[0.556vw]'>
								{tableTitles.map((title, i) =>
									title.img ? (
										<TextPlusImg
											gap='gap-[0.278vw]'
											textSize='text-[4.375vw]'
											imgSize='size-[3vw]'
											className='flex-row-reverse'
											key={i}
											img={title.img}
										>
											{title.title}
										</TextPlusImg>
									) : (
										<p className='text-[4.375vw]' key={i}>
											{title.title}
										</p>
									)
								)}
							</div>
							{/* VALUES  */}
							<div className='pl-[0.556vw] mt-[0.972vw] pb-[6.319vw]'>
								{tableValue.map((value, i) => (
									<div
										className='grid grid-cols-custom-5-xs py-[0.556vw] border-b-[0.139vw] border-b-[#F0F3F8] duration-300 ease-in-out cursor-pointer'
										key={i}
									>
										{Object.entries(value).map((item, j) => (
											<p className='text-[3.75vw]' key={j}>
												{item[1]}
											</p>
										))}
									</div>
								))}
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</PageItem>
	)
}

const timeList = [
	{
		title: 'Sick',
		stats: { img: '/svg/medical.svg', num: 3 },
		possibility: 'Days Available',
	},
	{
		title: 'Annual Leave ',
		stats: { img: '/svg/mountain.svg', num: 10.3 },
		possibility: 'Days Available',
	},
	{
		title: 'Comp/in Lieu Time',
		stats: { img: '/svg/task-time.svg', num: 0 },
		possibility: 'Human Used(YTD)',
	},
]

const tableTitles = [
	{ title: 'Date', img: '/svg/arrow-long.svg' },
	{ title: 'Description' },
	{ title: 'Used Days (-)' },
	{ title: 'Earned Days (+)' },
	{ title: 'Balance' },
]

const tableValue = [
	{
		date: '23/05/2024',
		description: 'Accrual for 23/05/2024 to 20/11/2024',
		userDaysMinus: '',
		earnedDays: '3.00',
		Balance: '3.00',
	},
	{
		date: '12/06/2024',
		description: 'Accrual for 12/06/2024 to 12/12/2024',
		userDaysMinus: '2.00',
		earnedDays: '4.00',
		Balance: '6.00',
	},
	{
		date: '05/07/2024',
		description: 'Accrual for 05/07/2024 to 05/01/2025',
		userDaysMinus: '1.50',
		earnedDays: '2.50',
		Balance: '4.00',
	},
	{
		date: '18/08/2024',
		description: 'Accrual for 18/08/2024 to 18/02/2025',
		userDaysMinus: '3.00',
		earnedDays: '3.00',
		Balance: '6.00',
	},
	{
		date: '29/09/2024',
		description: 'Accrual for 29/09/2024 to 29/03/2025',
		userDaysMinus: '',
		earnedDays: '5.00',
		Balance: '5.00',
	},
	{
		date: '10/10/2024',
		description: 'Accrual for 10/10/2024 to 10/04/2025',
		userDaysMinus: '1.00',
		earnedDays: '4.00',
		Balance: '5.00',
	},
]
