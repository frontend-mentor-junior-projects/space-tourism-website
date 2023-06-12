import { useState } from 'react'

import 'index.css'

import PageLayout from 'components/PageLayout'
import PageTitle from 'components/PageTitle'
import utils from 'utils'

import TechnologyTabs from './components/TechnologyTabs'

const TechnologyPage = () => {
	const [selectedTechnology, setSelectedTechnology] = useState(
		utils.TECHNOLOGY[0]
	)

	const onChange = (technology: typeof selectedTechnology) => {
		setSelectedTechnology(technology)
	}

	const mainContentId = '#technology-page-main-content'

	return (
		<PageLayout
			mainContentId={mainContentId}
			fullWidth
			className='bg-primary-200 bg-technology-page-mobile md:bg-technology-page-tablet lg:bg-technology-page-desktop'
		>
			<section
				id={mainContentId}
				className='grid lg:grid-cols-technology-page-layout grid-areas-technology-page-mobile lg:grid-areas-technology-page-desktop'
			>
				<PageTitle
					title='Space Launch 101'
					pageNumber='03'
					className='grid-in-page-title justify-self-center lg:justify-self-start'
				/>

				<picture className='grid-in-image bust-out lg:m-0 lg:justify-self-end'>
					<source
						media='(min-width:1024px)'
						srcSet={selectedTechnology.images.portrait}
					/>

					<img
						src={selectedTechnology.images.landscape}
						alt={selectedTechnology.name}
						className='mb-8 md:mb-14 lg:mb-0'
					/>
				</picture>

				<div className='grid-in-content flex flex-col items-center md:self-center lg:flex-row lg:items-start'>
					<TechnologyTabs
						selected={selectedTechnology}
						onChange={onChange}
						className='lg:self-center'
					/>

					<article role='tabpanel' className='text-center lg:text-left'>
						<header>
							<h2 className='font-sans-cond text-[0.875rem] tracking-[2.5px] uppercase mb-4 md:text-[1rem]'>
								<span aria-hidden>The Terminology...</span>
								<span className='block font-serif text-white text-[1.5rem] md:text-[2.5rem] xl:text-[3.5rem]'>
									{selectedTechnology.name}
								</span>
							</h2>
						</header>

						<p className='text-200 leading-6 w-body-sm md:w-body-md lg:w-body-sm xl:w-body-md lg:text-[1.125rem] lg:leading-8'>
							{selectedTechnology.description}
						</p>
					</article>
				</div>
			</section>
		</PageLayout>
	)
}

export default TechnologyPage
