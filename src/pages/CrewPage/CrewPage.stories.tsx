import { Meta, StoryObj } from '@storybook/react'

import CrewPage from '.'

const meta: Meta<typeof CrewPage> = {
	title: 'Pages/Crew',
	component: CrewPage,
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta
type Story = StoryObj<typeof CrewPage>

export const Default: Story = {}
