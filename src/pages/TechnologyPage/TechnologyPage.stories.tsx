import { Meta, StoryObj } from '@storybook/react'

import TechnologyPage from '.'

const meta: Meta<typeof TechnologyPage> = {
	title: 'Pages/Technology',
	component: TechnologyPage,
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta
type Story = StoryObj<typeof TechnologyPage>

export const Default: Story = {}
