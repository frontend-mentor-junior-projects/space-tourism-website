import { useNavigate } from 'react-router-dom'

const ExploreButton = () => {
	const navigate = useNavigate()
	const handleClick = () => {
		return navigate('/destination')
	}

	return (
		<button
			type='button'
			className='relative w-[150px] md:w-[274px] aspect-square bg-white rounded-full font-serif text-black text-[1.25rem] md:text-[2rem] uppercase z-[1] after:bg-explore-button after:w-full after:h-full after:rounded-full after:z-[-1] after:absolute after:top-0 after:right-0 after:opacity-0 after:transition after:duration-300 after:ease-out hover:after:opacity-100 hover:after:scale-[1.3]'
			onClick={handleClick}
		>
			Explore
		</button>
	)
}

export default ExploreButton
