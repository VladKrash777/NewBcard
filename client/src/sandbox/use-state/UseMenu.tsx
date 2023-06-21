import React from 'react'
import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { Outlet } from 'react-router-dom'
import NavItem from '../../layout/components/NavItem'
import { SANDBOX_ROUTES } from '../../routes/routesModel'


const UseMenu = () => {
	return (
		<>
			<AppBar position='sticky' color='primary'>
				<Toolbar>
					<NavItem label='set posts' to={SANDBOX_ROUTES.SETPOSTS} color='white'/> 
					<NavItem label='use state' to={SANDBOX_ROUTES.USESTATE} color='white'/> 
					<NavItem label='use state with function' to={SANDBOX_ROUTES.USE_STATE_WITH_FUNCTION} color='white'/> 
					<NavItem label='use state with object' to={SANDBOX_ROUTES.USE_STATE_WITH_OBJECT} color='white'/> 
					<NavItem label='use state with array of object' to={SANDBOX_ROUTES.USE_STATE_WITH_ARRAY_OF_OBJECT} color='white'/> 
					<NavItem label='use state with complex object' to={SANDBOX_ROUTES.USE_STATE_WITH_COMPLEX_OBJECT} color='white'/> 
				</Toolbar>
			</AppBar>

			<Outlet />
		</>
	)
}

export default UseMenu