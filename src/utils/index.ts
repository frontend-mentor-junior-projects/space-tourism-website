import data from 'services/data.json'

const Colors = {}

export type Destination = (typeof data.destinations)[0]
export type Crew = (typeof data.crew)[0]
export type Technology = (typeof data.technology)[0]

export default {
	Colors,
	DESTINATIONS: data.destinations,
	CREW: data.crew,
	TECHNOLOGY: data.technology,
}
