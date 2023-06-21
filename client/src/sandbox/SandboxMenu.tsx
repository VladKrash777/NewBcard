import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { Navigate, Outlet } from 'react-router-dom'
import NavItem from '../layout/components/NavItem'
import ROUTES, { SANDBOX_ROUTES } from '../routes/routesModel'
import { useUser } from '../users/providers/UserProvider'

const SandboxMenu = () => {
	const {user} = useUser()
	if(!user || !user.isAdmin) return <Navigate replace to={ROUTES.ROOT}/>
	
	return (
		<>
			<AppBar position='sticky' color='transparent'>
				<Toolbar>
					{/* HOMEWORK ROUTES */}
					<NavItem
						label='component'
						to={SANDBOX_ROUTES.COMPONENT}
						color='black'
					/>
					<NavItem
						label='conditional rendering'
						to={SANDBOX_ROUTES.CONDITIONALRENDERING}
						color='black'
					/>
					<NavItem
						label='events'
						to={SANDBOX_ROUTES.EVENTS_FOLDER}
						color='black'
					/>
					<NavItem
						label='introduction'
						to={SANDBOX_ROUTES.INTRODACTION_FOLDER}
						color='black'
					/>
					<NavItem
						label='iteration'
						to={SANDBOX_ROUTES.ITERATION_FOLDER}
						color='black'
					/>
					<NavItem
						label='mui-sandbox-menu'
						to={SANDBOX_ROUTES.MUISANDBOX}
						color='black'
					/>
					<NavItem label='props' to={SANDBOX_ROUTES.PROPS} color='black' />
					<NavItem
						label='use-state'
						to={SANDBOX_ROUTES.USESTATEMENU}
						color='black'
					/>
					{/* 07.05.23 */}
					<NavItem
						label='lifecycle hook'
						to={SANDBOX_ROUTES.LIFECYCLE}
						color='black'
					/>
					<NavItem
						label='custom hooks' 
						to={SANDBOX_ROUTES.CUSTOM}
						color='black'
					/>
					<NavItem
						label='memoization'
						to={SANDBOX_ROUTES.MEMOIZATION}
						color='black'
					/>
					<NavItem 
						label='context' 
						to={SANDBOX_ROUTES.CONTEXT} 
						color='black' />
					<NavItem 
						label='form' 
						to={SANDBOX_ROUTES.FORM} 
						color='black' />
				</Toolbar>
			</AppBar>

			<Outlet />
		</>
	)
}

export default SandboxMenu
