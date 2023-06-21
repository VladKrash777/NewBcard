import React from 'react'
import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { Outlet } from 'react-router-dom'
import NavItem from '../../layout/components/NavItem'
import { SANDBOX_ROUTES } from '../../routes/routesModel'


const MuiMenu = () => {
	return (
		<>
			<AppBar position='sticky' color='primary'>
				<Toolbar>
					
					<NavItem label='logic' to={SANDBOX_ROUTES.LOGIC} color='black' />
					<NavItem label='styles' to={SANDBOX_ROUTES.STYLES} color='black' />
				</Toolbar>
			</AppBar>

			<Outlet />
		</>
	)
}

export default MuiMenu