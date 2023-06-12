import { useEffect, useRef } from 'react'

import ExploreButton from 'components/ExploreButton'
import PageLayout from 'components/PageLayout'

const HomePage = () => {
	const mainContentId = 'home-main-content'

	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		headingRef.current?.focus()
	}, [])

	return (
		<PageLayout
			mainContentId={mainContentId}
			className='bg-home-page-mobile md:bg-home-page-tablet lg:bg-home-page-desktop grid'
		>
			<section className='w-full flex flex-col items-center max-w-6xl mx-auto text-center lg:text-left lg:grid lg:grid-cols-2 self-end'>
				<div className='mb-20 lg:mb-0'>
					<h1
						ref={headingRef}
						tabIndex={-1}
						className='font-sans-cond uppercase mb-4'
					>
						<span className='tracking-[2.7px] md:text-[1.25rem] lg:text-[1.75rem]'>
							So, you want to travel to
						</span>
						<span className='block font-serif text-[5rem] md:text-[9.375rem] text-white'>
							Space
						</span>
					</h1>

					<p className='text-200 w-body-sm md:w-body-md md:text-400 leading-6 md:leading-8'>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>

				<div className='lg:self-end lg:justify-self-end'>
					<ExploreButton />
				</div>
			</section>
		</PageLayout>
	)
}

export default HomePage
