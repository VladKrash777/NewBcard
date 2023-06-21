import React, {
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react'

type ContextArgs = {
	name: string
	setName: (value: SetStateAction<string>) => void
}

const NameContext = React.createContext<null | ContextArgs>(null)

type Props = {
	children: ReactNode
}

export const NameProvider: React.FC<Props> = ({ children }) => {
	const [name, setName] = useState('')

	useEffect(() => {
		setName('david')
	}, [])

	const myObj = {
		name: name,
		setName: setName,
	}
	return <NameContext.Provider value={myObj}>{children}</NameContext.Provider>
}

export const useName = () => {
	const context = useContext(NameContext)
	if (!context) throw new Error('useName must be used within a NameProvider')
	return context
}

export default NameProvider
