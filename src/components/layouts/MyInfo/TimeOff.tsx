import { ImageCustom } from '@/components/ui/ImageCustom'
import { PageItem } from './ui/PageItem'
import { SectionItemPlusBorder } from './ui/SectionItemPlusBorder'
import { Text } from './ui/TextPlusImg'

export const TimeOff = () => {
	return (
		<PageItem>
			<header className='flex items-center justify-between mb-[1.667vw] pb-[0.903vw] border-b-[0.069vw] border-b-[#F0F3F8]'>
				<div className='flex gap-[0.833vw] items-center'>
					<ImageCustom src='/svg/time-off.svg' alt='time-off' />
					<p className='text-[1.389vw] font-medium'>Time Off</p>
				</div>
				<div className='flex items-center gap-[2.083vw]'>
					<p className='text-[0.972vw] font-medium'>
						Accrual Level Start Date{' '}
						<span className='text-[#3758AB]'> 03/09-2020</span>
					</p>
					<button className='p-[0.556vw] border-[0.069vw] border-black rounded-[0.625vw]'>
						Add Time Off Policy
					</button>
				</div>
			</header>
			{/* TIMELIEST  */}
			<SectionItemPlusBorder>
				<div className='flex gap-[3.333vw] justify-center mb-[3.403vw]'>
					{timeList.map((item, i) => (
						<div
							key={i}
							className='flex flex-col items-center gap-[0.278vw] w-[18.333vw] py-[1.111vw] font-semibold bg-[#F0F3F8] rounded-[0.556vw]'
						>
							<h2 className='text-[1.389vw]'>{item.title}</h2>
							<Text
								className='text-[2.083vw]'
								imgSize='size-[30px]'
								img={item.stats.img}
							>
								{item.stats.num}
							</Text>
							<p className='text-[0.972vw]'>{item.possibility}</p>
						</div>
					))}
				</div>
				<Text img='/svg/full-time.svg'>Upcoming Time Off</Text>
			</SectionItemPlusBorder>
			{/* MEDICAL  */}
			<SectionItemPlusBorder>
				<div className='flex items-center gap-[0.972vw]'>
					<ImageCustom
						size='size-[30px]'
						src='/svg/medical.svg'
						alt='medical'
					/>
					<div className='flex flex-col items-start text-[0.972vw] font-medium'>
						<span>Jan 27</span>
						<div className='flex gap-[0.278vw] items-center'>
							<div className='size-[10px] bg-black rounded-full'></div>
							<span>1 dey of Sick</span>
						</div>
					</div>
				</div>
			</SectionItemPlusBorder>
			<SectionItemPlusBorder>
				<div className='flex items-center gap-[0.972vw]'>
					<ImageCustom
						size='size-[30px]'
						src='/svg/big-manu.svg'
						alt='big-many'
					/>
					<div className='flex flex-col'>
						<p className='text-[0.972vw] font-medium'>Jul 4</p>
						<p className='text-[0.972vw] font-medium'>Independence Day</p>
					</div>
				</div>
			</SectionItemPlusBorder>
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
