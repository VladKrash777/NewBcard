import { Container } from '@mui/material'
import { useCallback, useEffect } from 'react'
import PageHeader from '../../components/PageHeader'
import CardsFeedback from '../components/CardsFeedback'
import useCards from '../hooks/useCards'

const FavCardsPage = () => {
	const { value, handleDeleteCard, handleGetFavCards } = useCards()
	const { isLoading, error, cards } = value

	useEffect(() => {
		handleGetFavCards()
	}, [])

	const onDeleteCard = useCallback(async (cardId: string) => {
		await handleDeleteCard(cardId)
		await handleGetFavCards()
	}, [])

	const changeLikeStatus = useCallback(async () => {
		await handleGetFavCards()
	}, [])

	return (
		<Container>
			<PageHeader
				title='Favorite Cards Page'
				subtitle='Here you can find all your favorite business cards'
			/>

			<CardsFeedback
				isLoading={isLoading}
				error={error}
				cards={cards}
				onDelete={onDeleteCard}
				onLike={changeLikeStatus}
			/>
		</Container>
	)
}

export default FavCardsPage
