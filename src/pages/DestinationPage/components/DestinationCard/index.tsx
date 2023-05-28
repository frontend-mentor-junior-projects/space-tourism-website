type DestinationCardProps = {
	title: string
	content: string
}

const DestinationCard = ({ title, content }: DestinationCardProps) => {
	return (
		<div className='flex flex-col items-center lg:items-start'>
			<h3 className='mb-[0.75rem] font-sans-cond tracking-[2.5px] md:text-sm'>
				{title}
			</h3>
			<p className='font-serif text-white text-[1.75rem]'>{content}</p>
		</div>
	)
}

export default DestinationCard
