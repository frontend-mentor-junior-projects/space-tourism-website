import { useState } from 'react'

import Close from 'assets/shared/icon-close.svg'
import Hamburger from 'assets/shared/icon-hamburger.svg'
import { useLocation } from 'react-router-dom'

import NavigationLink from './NavigationLink'

const NAVIGATION_LINKS = [
	{ path: '/', name: 'Home', pageNumber: '00' },
	{ path: '/destination', name: 'Destination', pageNumber: '01' },
	{ path: '/crew', name: 'Crew', pageNumber: '02' },
	{ path: '/technology', name: 'Technology', pageNumber: '03' },
]

const Header = () => {
	const location = useLocation()

	const [showMenu, setShowMenu] = useState(false)

	const toggleMenu = () => {
		setShowMenu(!showMenu)
	}

	const closeMenu = () => {
		setShowMenu(false)
	}

	return (
		// Without setting the height of the header to fit it's content, when navigating between pages, the header's position changes.
		<header
			// className='full-width flex flex-row items-center justify-between mb-12 px-6 pt-6 sm:pr-0 md:pl-10 md:pt-0 md:mb-24 lg:pt-10
			// lg:before:relative lg:before:block lg:before:w-full lg:before:h-[1px] lg:before:bg-divider lg:before:-mr-10 lg:before:z-[10000]'
			className='bust-out h-fit flex flex-row items-center justify-between px-6 pt-6 pb-12 sm:pr-0 sm:pb-0 md:pl-10 md:pt-0 md:mb-24 lg:pt-10'
		>
			<div className='h-12 aspect-square md:order-first md:mr-[100px]'>
				<img src='assets/shared/logo.svg' alt='space tourism logo' />
			</div>

			<button
				type='button'
				aria-controls='navigation-menu'
				aria-expanded={showMenu}
				onClick={toggleMenu}
				className='sm:hidden'
			>
				<span className='sr-only'>Menu</span>
				<Hamburger />
			</button>

			{/* TODO: If the width is set to full (lg:w-full), the decorative ruler breaks. */}
			<nav
				id='navigation-menu'
				className={`text-white bg-navigation-menu backdrop-blur-[3rem]
        fixed top-0 bottom-0 right-0 left-[30%] p-6 pt-[120px] z-[9999] overflow-hidden
        ${showMenu ? 'translate-x-0' : 'translate-x-[100%]'}
        transition duration-300 ease-in-out
        sm:relative sm:inset-0 sm:p-0 sm:m-0 sm:translate-x-0 sm:px-12
        lg:order-last lg:w-full lg:pl-[120px]
        `}
			>
				<button
					type='button'
					onClick={closeMenu}
					className='absolute top-[36px] right-6 sm:hidden'
				>
					<span className='sr-only'>Close menu</span>
					<Close />
				</button>

				<ul className='font-sans-cond tracking-[4.5px] uppercase flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-12 md:py-10'>
					{NAVIGATION_LINKS.map((link) => {
						const isActivePath = location.pathname === link.path

						return (
							<li key={link.name}>
								<NavigationLink
									link={link}
									onClick={closeMenu}
									active={isActivePath}
								/>
							</li>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}

export default Header
