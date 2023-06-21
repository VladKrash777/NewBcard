import { useEffect, useState } from 'react'
import { colorLog } from './utils'

const LifeCycleExe = () => {


	const [count, setCount] = useState(() => {
		colorLog('1')
		setTimeout(() => {
			colorLog('5')
		}, 1000)
		return 0
	})

	//  will do on construct
	useEffect(() => {
		colorLog('3')
		return () => {
			colorLog('6')
		}
	}, [] )
	
	//  will do colorLog(6), that in return! when i'm dead
	useEffect(() => {
		colorLog('3')
		return () => {
			colorLog('6') // colorLog = callback ( its something that will happen someday ) !
		}
	}, [])

	// will do colorLog when count will change
	// dependency array
	useEffect(() => {
		colorLog('4')
	}, [count])


	return (
		<div>
			{colorLog('2')}
			<button onClick={() => setCount((prev) => prev + 1)}>click</button>
		</div>
	)
}

export default LifeCycleExe
