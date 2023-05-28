import React from 'react'

import './index.css'

import { CrewPage, DestinationPage, HomePage, TechnologyPage } from 'pages'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: 'crew',
		element: <CrewPage />,
	},
	{
		path: 'destination',
		element: <DestinationPage />,
	},
	{
		path: 'technology',
		element: <TechnologyPage />,
	},
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
