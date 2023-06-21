import React from 'react'
import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { Outlet } from 'react-router-dom'
import NavItem from '../../layout/components/NavItem'
import { SANDBOX_ROUTES } from '../../routes/routesModel'


const EventsMenu = () => {
	return (
		<>
			<AppBar position='sticky' color='primary'>
				<Toolbar>
					<NavItem label='onclick' to={SANDBOX_ROUTES.ONCLICK} 	color='white'/>
					<NavItem label='rising-events' to={SANDBOX_ROUTES.RAISING_EVENTS} 	color='white'/>
				</Toolbar>
			</AppBar>

			<Outlet />
		</>
	)
}

export default EventsMenu