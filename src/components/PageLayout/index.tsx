import Header from 'components/Header'

type PageLayoutProps = {
	children: React.ReactNode | React.ReactNode[]
	className: string
	mainContentId: string
	// eslint-disable-next-line react/require-default-props
	fullWidth?: boolean
}

const PageLayout = ({
	children,
	className,
	mainContentId,
	fullWidth = false,
}: PageLayoutProps) => {
	return (
		<main
			className={`min-h-screen bg-cover bg-no-repeat text-primary-100 p-6 pt-0 pb-16
      ${fullWidth ? 'px-0' : 'md:px-10 lg:px-16'}
      ${className}`}
		>
			<a className='skip-to-content' href={mainContentId}>
				Skip to content
			</a>

			<Header />

			{/* <section className='max-w-6xl mx-auto'> */}
			{children}
			{/* </section> */}
		</main>
	)
}

export default PageLayout
