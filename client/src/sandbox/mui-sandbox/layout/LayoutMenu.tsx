import React from 'react'
import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { Outlet } from 'react-router-dom'
import NavItem from '../../../layout/components/NavItem'
import { SANDBOX_ROUTES } from '../../../routes/routesModel'



const LayoutMenu = () => {
	return (
		<>
			<AppBar position='sticky' color='inherit'>
				<Toolbar>
					<NavItem label='mui-box' to={SANDBOX_ROUTES.MUIBOX} color='black'/> 
					<NavItem label='mui-container' to={SANDBOX_ROUTES.MUICONTAINER} color='black'/> 
					<NavItem label='mui-grid' to={SANDBOX_ROUTES.MUIGRID} color='black'/> 
					<NavItem label='mui-stack' to={SANDBOX_ROUTES.MUISTACK} color='black'/> 
				</Toolbar>
			</AppBar>

			<Outlet />
		</>
	)
}

export default LayoutMenu