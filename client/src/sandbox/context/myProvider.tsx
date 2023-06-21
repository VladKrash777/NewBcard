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

const lol_context = React.createContext<null | ContextArgs>(null)

type Props = {
	children: ReactNode
}

export const Lol_My_Provider: React.FC<Props> = ({ children }) => {
	const [name, setName] = useState('')

	useEffect(() => {
		setName('david')
	}, [])

	const myObj = {
		name: name,
		setName: setName,
	}
	return <lol_context.Provider value={myObj}>{children}</lol_context.Provider>
}

export const useName = () => {
	const context = useContext(lol_context)
	if (!context) throw new Error('useName must be used within a Lol_My_Provider')
	return context
}

export default Lol_My_Provider
