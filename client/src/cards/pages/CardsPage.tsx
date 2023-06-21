import { Container } from '@mui/material'
import { useEffect } from 'react'
import PageHeader from '../../components/PageHeader'
import CardsFeedback from '../components/CardsFeedback'
import useCards from '../hooks/useCards'

const CardsPage = () => {
	const { value, handleGetCards, handleDeleteCard } = useCards()
	const { isLoading, error, filtredCards } = value

	useEffect(() => {
		handleGetCards()
	}, [])

	const onDeleteCard = async (cardId: string) => {
		await handleDeleteCard(cardId)
		await handleGetCards()
	}

	return (
		<Container>
			<PageHeader
				title='Cards Page'
				subtitle='Here you can find all types of business cards'
			/>
			<CardsFeedback
				isLoading={value.isLoading}
				error={value.error}
				cards={value.filtredCards}
				onDelete={onDeleteCard}
			/>
		</Container>
	)
}

export default CardsPage
