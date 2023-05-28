import { Meta, StoryObj } from '@storybook/react'

import DestinationPage from '.'

const meta: Meta<typeof DestinationPage> = {
	title: 'Pages/Destination',
	component: DestinationPage,
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta
type Story = StoryObj<typeof DestinationPage>

export const Default: Story = {}
