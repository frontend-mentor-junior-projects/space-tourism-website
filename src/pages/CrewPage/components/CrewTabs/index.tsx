import utils, { Crew } from 'utils'

type CrewTabsProps = {
	selected: Crew
	onChange: (crew: Crew) => void
	// eslint-disable-next-line react/require-default-props
	className?: string
}

const CrewTabs = ({ selected, onChange, className = '' }: CrewTabsProps) => {
	return (
		<div
			role='tablist'
			aria-label='crew list'
			className={`space-x-4 lg:space-x-6 mb-8 flex flex-row items-center justify-center lg:justify-start lg:mb-0 ${className}`}
		>
			{utils.CREW.map((crewMember) => {
				const isSelected = selected.name === crewMember.name

				return (
					<button
						key={crewMember.name}
						type='button'
						role='tab'
						aria-selected={isSelected}
						aria-controls={`${crewMember.name}-tab`}
						onClick={() => {
							onChange(crewMember)
						}}
						className={`bg-white w-[10px] lg:w-[15px] aspect-square rounded-full
                ${isSelected ? 'opacity-100' : 'opacity-20'}
                hover:opacity-50
                transition duration-300 ease-in-out
                `}
					>
						<span className='sr-only'>{crewMember.name}</span>
					</button>
				)
			})}
		</div>
	)
}

export default CrewTabs
