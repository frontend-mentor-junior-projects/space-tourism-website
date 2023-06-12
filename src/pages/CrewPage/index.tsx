import { useState } from 'react'

import PageLayout from 'components/PageLayout'
import PageTitle from 'components/PageTitle'
import utils, { Crew } from 'utils'

import CrewTabs from './components/CrewTabs'

const CrewPage = () => {
	const [crewMember, setCrewMember] = useState(utils.CREW[0])

	const onChange = (member: Crew) => {
		setCrewMember(member)
	}

	const mainContentId = '#crew-page-main-content'

	return (
		<PageLayout
			mainContentId={mainContentId}
			className='bg-primary-200 bg-crew-page-mobile md:bg-crew-page-tablet lg:bg-crew-page-desktop md:pb-0'
		>
			<section
				id={mainContentId}
				className='max-w-6xl mx-auto grid grid-areas-crew-page-mobile md:grid-areas-crew-page-tablet lg:grid-areas-crew-page-desktop'
			>
				<PageTitle
					title='Meet Your Crew'
					pageNumber='02'
					className='grid-in-page-title text-center md:text-left'
				/>

				<div className='grid-in-image mb-8 border-b-[0.05px] border-b-divider md:mb-0 md:border-0 lg:h-[400px] xl:h-[600px] self-end flex items-center justify-center lg:ml-6 xl:ml-0'>
					<picture className='self-end'>
						<img
							src={crewMember.images.png}
							alt={`${crewMember.name}, ${crewMember.role}`}
							className='h-[233px] md:h-[520px] lg:h-auto xl:h-auto'
						/>
					</picture>
				</div>

				<CrewTabs
					selected={crewMember}
					onChange={onChange}
					className='grid-in-tabs md:mb-16 lg:mb-0 self-center'
				/>

				<article
					role='tabpanel'
					className='grid-in-content flex flex-col items-center lg:items-start text-center lg:text-left md:mb-9 xl:mb-0 self-center lg:mb-0'
				>
					<header className='font-serif text-white uppercase mb-4'>
						<h2 className='md:text-[1.5rem] lg:text-[2rem] opacity-50'>
							{crewMember.role}
						</h2>
						<p className='block text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem]'>
							{crewMember.name}
						</p>
					</header>

					<p className='text-200 leading-6 w-body-sm md:w-body-md md:text-[1rem] md:leading-7 lg:text-[1.125rem] lg:leading-8'>
						{crewMember.bio}
					</p>
				</article>
			</section>
		</PageLayout>
	)
}

export default CrewPage
