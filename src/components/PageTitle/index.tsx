import { useEffect, useRef } from 'react'

type PageTitleProps = {
	title: string
	pageNumber: string
	// eslint-disable-next-line react/require-default-props
	className?: string
}

const PageTitle = ({ title, pageNumber, className = '' }: PageTitleProps) => {
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		headingRef.current?.focus()
	}, [])

	return (
		<h1
			ref={headingRef}
			tabIndex={-1}
			className={`font-sans-cond text-white tracking-[2.5px] uppercase mb-8 md:mb-16 md:text-[1.25rem] lg:text-[1.75rem] lg:mb-16 ${className}`}
		>
			<span aria-hidden className='font-bold opacity-25 mr-4'>
				{pageNumber}
			</span>
			{title}
		</h1>
	)
}

export default PageTitle
