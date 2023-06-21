import { useName } from '../NameProvider'
import D from './D'

const C = () => {
	const { name, setName } = useName()

	return (
		<>
			<div>in component C: {name}</div>
			<input type='text' onChange={(e) => setName(e.target.value)} />
			<D name='lol1' prop2='maybeFunction'></D>
		</>
	)
}

export default C
