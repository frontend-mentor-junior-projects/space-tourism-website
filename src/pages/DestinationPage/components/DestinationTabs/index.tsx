import utils, { Destination } from 'utils'

type DestinationTabsProps = {
	selected: Destination
	onChange: (destination: Destination) => void
}

const DestinationTabs = ({ selected, onChange }: DestinationTabsProps) => {
	return (
		<div
			role='tablist'
			aria-label='destination list'
			className='space-x-6 mb-5 md:mb-8'
		>
			{utils.DESTINATIONS.map((destination) => {
				const isSelected = selected.name === destination.name

				return (
					<button
						key={destination.name}
						type='button'
						role='tab'
						aria-selected={isSelected}
						aria-controls={`${destination.name}-tab`}
						onClick={() => {
							onChange(destination)
						}}
						className={`font-sans-cond uppercase tracking-[2.5px] pb-2
              ${
								isSelected
									? 'text-white border-b-[3px] boder-b-white'
									: 'text-primary-100'
							}
              hover:opacity-50 hover:border-b-[3px] hover:border-b-primary-100 
              transition duration-300 ease-in-out
              `}
					>
						{destination.name}
					</button>
				)
			})}
		</div>
	)
}

export default DestinationTabs
