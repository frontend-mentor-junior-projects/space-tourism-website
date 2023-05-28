import utils, { Technology } from 'utils'

type TechnologyTabsProps = {
	selected: Technology
	onChange: (technology: Technology) => void
	// eslint-disable-next-line react/require-default-props
	className?: string
}

const TechnologyTabs = ({
	selected,
	onChange,
	className,
}: TechnologyTabsProps) => {
	return (
		<div
			role='tablist'
			aria-label='technology list'
			className={`flex flex-row justify-center space-x-4 mb-6 md:mb-12 lg:flex-col lg:space-x-0 lg:space-y-8 lg:mb-0 lg:mr-12 xl:mr-[72px] ${className}`}
		>
			{utils.TECHNOLOGY.map((technology, index) => {
				const isSelected = selected.name === technology.name

				return (
					<button
						key={technology.name}
						type='button'
						role='tab'
						aria-selected={isSelected}
						aria-controls={`${technology.name}-tab`}
						onClick={() => {
							return onChange(technology)
						}}
						className={`font-serif
              w-10 md:w-[60px] lg:w-20 aspect-square rounded-full
              md:text-[1.5rem] lg:[2rem]
              ${
								isSelected
									? 'text-black bg-white'
									: 'text-white bg-transparent border border-[#979797]'
							}
              hover:border hover:border-white hover:cursor-pointer
              transtion duration-300 ease-in-out
              `}
					>
						<span aria-hidden>{index + 1}</span>
						<span className='sr-only'>{technology.name}</span>
					</button>
				)
			})}
		</div>
	)
}

export default TechnologyTabs
