import { useName } from '../NameProvider'
import C from './C'

const B = () => {
	const { name } = useName()
	return (
		<>
			<p>component B {name}</p>
			<C />
		</>
	)
}

export default B
