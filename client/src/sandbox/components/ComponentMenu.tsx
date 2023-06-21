import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { Outlet } from 'react-router-dom'
import NavItem from '../../layout/components/NavItem'
import { SANDBOX_ROUTES } from '../../routes/routesModel'

const ComponentMenu = () => {
	return (
		<>
			<AppBar position='sticky' color='primary'>
				<Toolbar>
				<NavItem
						label='template'
						to={SANDBOX_ROUTES.TEMPLATE}
						color='white'
					/>
					
					<NavItem label='Logic' to={SANDBOX_ROUTES.LOGIC} color='white' />
					<NavItem label='styles' to={SANDBOX_ROUTES.STYLES} color='white' />
					<NavItem label='string interpolation' to={SANDBOX_ROUTES.STRINGINTERPOLATION} color='white' />
					
				</Toolbar>
			</AppBar>

			<Outlet />
		</>
	)
}

export default ComponentMenu
