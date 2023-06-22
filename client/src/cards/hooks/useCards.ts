import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useAxiosInterceptors from '../../hooks/useAxios'
import CardInterface from '../models/interfaces/CardInterface'
import { changeLikeStatus, createCard, deleteCard, editCard, getCard, getCards, getMyCards } from '../services/cardApi'
import { useUser } from '../../users/providers/UserProvider'
import { useSnack } from '../../providers/SnackbarProvider'
import { CardFromClientType, CardMapToModelType } from '../models/types/cardTypes'
import normalizeCard from '../helpers/normalizations/normalizeCard'
import ROUTES from '../../routes/routesModel'
import normalizeEditCard from '../helpers/normalizations/normalizeEditCard'

type ErrorType = null | string
type CardsType = null | CardInterface[]
type CardType = null | CardInterface

const useCards = () => {
	const [isLoading, setLoading] = useState(false)
	const [error, setError] = useState<ErrorType>(null)
	const [cards, setCards] = useState<CardsType>(null)
	const [card, setCard] = useState<CardType>(null)
	const [searchParams] = useSearchParams()
	const [query, setQuery] = useState('')
	const [filtredCards, setFilter] = useState<CardsType>(null)

	useEffect(() => {
		setQuery(searchParams.get('q') || '')
	}, [searchParams])

	useEffect(() => {
		if (cards) {
			setFilter(
				cards.filter(
					(card) =>
						card.title.includes(query) || String(card.bizNumber).includes(query)
				)
			)
		}
	}, [cards, query])

	useAxiosInterceptors()
	const { user } = useUser()
	const navigate = useNavigate()
	const snack = useSnack()

	const requestStatus = (
		loading: boolean,
		errorMessage: ErrorType,
		cards: CardsType,
		card: CardType = null
	) => {
		setLoading(loading)
		setError(errorMessage)
		setCards(cards)
		setCard(card)
	}

	const handleGetCards = async () => {
		try {
			setLoading(true)
			const cards = await getCards()
			requestStatus(false, null, cards, null)
		} catch (error) {
			if (typeof error === 'string') requestStatus(false, error, null)
		}
	}

	const handleDeleteCard = async (id: string) => {
		try {
			setLoading(true)
			await deleteCard(id)
		} catch (error) {
			if (typeof error === 'string') return requestStatus(false, error, null)
		}
	}

	const handleLikeCard = useCallback(async (cardId: string) => {
		try {
			const card = await changeLikeStatus(cardId)
			requestStatus(false, null, cards, card)
		} catch (error) {
			if (typeof error === 'string') return requestStatus(false, error, null)
		}
	}, [])

	const handleCreateCard = useCallback(
		async (cardFromClient: CardFromClientType) => {
			try {
				setLoading(true)
				const normalizedCard = normalizeCard(cardFromClient)
				const card = await createCard(normalizedCard)
				requestStatus(false, null, null, card)
				snack('success', 'A new business card has been created')
				navigate(ROUTES.MY_CARDS)
			} catch (error) {
				if (typeof error === 'string') return requestStatus(false, error, null)
			}
		},
		[]
	)

	const handleUpdateCard = useCallback(
		async (cardFromClient: CardMapToModelType) => {
			try {
				setLoading(true)
				const normalizedCard = normalizeEditCard(cardFromClient)
				const cardFomServer = await editCard(normalizedCard)
				requestStatus(false, null, null, cardFomServer)
				snack('success', 'The business card has been successfully updated')
				navigate(ROUTES.MY_CARDS)
			} catch (error) {
				if (typeof error === 'string') return requestStatus(false, error, null)
			}
		},
		[]
	)

	const handleGetFavCards = useCallback(async () => {
		try {
			setLoading(true)
			const cards = await getCards()
			const favCards = cards.filter(
				(card) => !!card.likes.find((id) => id === user?._id)
			)
			requestStatus(false, null, favCards)
		} catch (error) {
			if (typeof error === 'string') return requestStatus(false, error, null)
		}
	}, [user])

	const handleGetCard = async (cardId: string) => {
		try {
			setLoading(true)
			const card = await getCard(cardId)
			requestStatus(false, null, null, card)
		} catch (error) {
			if (typeof error === 'string') requestStatus(false, error, null, null)
		}
	}

	const handleGetMyCards = useCallback(async () => {
		try {
			setLoading(true)
			const cards = await getMyCards()
			requestStatus(false, null, cards)
		} catch (error) {
			if (typeof error === 'string') return requestStatus(false, error, null)
		}
	}, [])

	const value = useMemo(() => {
		return { cards, card, isLoading, error, filtredCards }
	}, [cards, card, isLoading, error, filtredCards])

	return {
		value,
		handleGetCards,
		handleGetCard,
		handleDeleteCard,
		handleLikeCard,
		handleGetFavCards,
		handleGetMyCards,
		handleCreateCard,
		handleUpdateCard,
	}
}

export default useCards
