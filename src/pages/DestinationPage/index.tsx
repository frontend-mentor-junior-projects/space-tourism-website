import { useState } from 'react'

import PageLayout from 'components/PageLayout'
import PageTitle from 'components/PageTitle'
import DestinationTabs from 'pages/DestinationPage/components/DestinationTabs'
import utils, { Destination } from 'utils'

import DestinationCard from './components/DestinationCard'

const DestinationPage = () => {
	const Moon = utils.DESTINATIONS[0]
	const [selectedDestination, setSelectedDestination] = useState(Moon)

	const mainContentId = '#destination-page-main-content'

	return (
		<PageLayout
			mainContentId={mainContentId}
			className='bg-destination-page-mobile md:bg-destination-page-tablet lg:bg-destination-page-desktop'
		>
			<section
				id={mainContentId}
				className='w-full flex flex-col items-center max-w-6xl mx-auto text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-x-16 xl:gap-x-0'
			>
				<PageTitle
					title='Pick Your Destination'
					pageNumber='01'
					className='md:self-start lg:col-span-2'
				/>

				<picture className='lg:self-end justify-self-center'>
					<img
						src={selectedDestination.images.png}
						alt='the moon'
						className='mb-6 md:mb-14 lg:mb-0 h-[170px] md:h-[300px] lg:h-[445px]'
					/>
				</picture>

				<div className='justify-self-center'>
					<DestinationTabs
						selected={selectedDestination}
						onChange={(destination: Destination) => {
							setSelectedDestination(destination)
						}}
					/>

					<article role='tabpanel'>
						<header className='mb-8 md:mb-12'>
							<h2 className='font-serif text-[3.5rem] md:text-[5rem] text-white uppercase'>
								{selectedDestination.name}
							</h2>

							<p className='text-200 w-body-sm md:w-body-lg lg:w-body-md lg:text-[1.125rem] leading-6 lg:leading-8'>
								{selectedDestination.description}
							</p>
						</header>

						<hr className='bg-divider mb-8 h-[0.5px] border-0' />

						<div className='uppercase flex flex-col space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:gap-0'>
							<DestinationCard
								title='Avg. Distance'
								content={selectedDestination.distance}
							/>

							<DestinationCard
								title='Est. Travel Time'
								content={selectedDestination.travel}
							/>
						</div>
					</article>
				</div>
			</section>
		</PageLayout>
	)
}

export default DestinationPage
