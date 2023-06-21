import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Outlet } from 'react-router-dom'
import { SANDBOX_ROUTES } from '../../routes/routesModel'
import NavItem from './../../layout/components/NavItem'

const Memoization = () => {
	return (
		<>
			<AppBar position='sticky' color='primary'>
				<Toolbar>
					<NavItem
						label='usecallback'
						to={SANDBOX_ROUTES.USECALLBACK}
						color='black'
					/>
					<NavItem label='use memo' to={SANDBOX_ROUTES.USEMEMO} color='black' />
				</Toolbar>
			</AppBar>

			<Outlet />
		</>
	)
}

export default Memoization
