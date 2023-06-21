import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Outlet } from 'react-router-dom'
import NavItem from '../../layout/components/NavItem'

const CustomHookMenu = () => {
	return (
		<>
			<AppBar position='sticky' color='primary'>
				<Toolbar>
					<NavItem label='custom counter' to='counter' color='black' />
					<NavItem label='custom user' to='user' color='black' />
				</Toolbar>
			</AppBar>

			<Outlet />
		</>
	)
}

export default CustomHookMenu
