import { Meta, StoryObj } from '@storybook/react'

import DestinationCard from '.'

const meta: Meta<typeof DestinationCard> = {
	title: 'Components/DestinationCard',
	component: DestinationCard,
}

export default meta
type Story = StoryObj<typeof DestinationCard>

export const Default: Story = {}
