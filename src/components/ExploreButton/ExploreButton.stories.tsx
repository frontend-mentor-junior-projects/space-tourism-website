import { Meta, StoryObj } from '@storybook/react'

import ExploreButton from '.'

const meta: Meta<typeof ExploreButton> = {
	title: 'Components/Explore Button',
	component: ExploreButton,
}

export default meta
type Story = StoryObj<typeof ExploreButton>

export const Default: Story = {}
