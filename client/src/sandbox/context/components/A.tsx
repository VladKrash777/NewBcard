import NameProvider from '../NameProvider'
import B from './B'

const A = () => {
	
	return (
		<NameProvider>
			<p>in component A </p>
			<B />
		</NameProvider>
	)
}

export default A
