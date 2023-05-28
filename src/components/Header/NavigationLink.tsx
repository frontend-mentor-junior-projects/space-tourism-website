import { Link } from 'react-router-dom'

type NavigationLinkType = {
	name: string
	pageNumber: string
	path: string
}

type NavigationLinkProps = {
	link: NavigationLinkType
	onClick: () => void
	active: boolean
}

const NavigationLink = ({ link, onClick, active }: NavigationLinkProps) => {
	return (
		<Link
			to={link.path}
			onClick={onClick}
			className={`
      ${active ? 'md:border-b-[3px] md:border-b-white' : ''}
      transition duration-300 ease-out
      hover:opacity-50 hover:border-b-[3px]
      md:text-100 md:py-10 lg:text-300
      `}
		>
			<span
				aria-hidden
				className='inline font-bold w-[3ch] mr-2 sm:hidden lg:inline'
			>
				{link.pageNumber}
			</span>
			{link.name}
		</Link>
	)
}

export default NavigationLink
