import React from 'react'
import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { Outlet } from 'react-router-dom'
import NavItem from '../../layout/components/NavItem'
import { SANDBOX_ROUTES } from '../../routes/routesModel'


const PropsMenu = () => {
	return (
		<>
			<AppBar position='sticky' color='primary'>
				<Toolbar>
					<NavItem label='props object' to={SANDBOX_ROUTES.PROPS_OBJECT} color='white'/> 
					<NavItem label='props string' to={SANDBOX_ROUTES.PROPS_STRING} color='white'/> 
					<NavItem label='props ts' to={SANDBOX_ROUTES.PROPS_TYPESCRIPT} color='white'/> 
					<NavItem label='props two keys' to={SANDBOX_ROUTES.PROPS_TWO_KEYS} color='white'/> 
				</Toolbar>
			</AppBar>

			<Outlet />
		</>
	)
}

export default PropsMenu