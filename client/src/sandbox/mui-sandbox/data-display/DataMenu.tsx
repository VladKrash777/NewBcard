import React from 'react'
import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { Outlet } from 'react-router-dom'
import NavItem from '../../../layout/components/NavItem'
import { SANDBOX_ROUTES } from '../../../routes/routesModel'

const DataMenu = () => {
	return (
		<>
			<AppBar position='sticky' color='inherit'>
				<Toolbar>
					<NavItem label='mui-button' to={SANDBOX_ROUTES.MUIBUTTON} color='black'/> 
					<NavItem label='mui-divider' to={SANDBOX_ROUTES.MUIDIVIDER} color='black'/> 
					<NavItem label='mui-typography' to={SANDBOX_ROUTES.MUITYPOGRAPHY} color='black'/> 
				</Toolbar>
			</AppBar>

			<Outlet />
		</>
	)
}

export default DataMenu