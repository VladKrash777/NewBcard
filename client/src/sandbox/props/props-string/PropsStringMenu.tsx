import React from 'react'
import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { Outlet } from 'react-router-dom'
import NavItem from '../../../layout/components/NavItem'
import { SANDBOX_ROUTES } from '../../../routes/routesModel'


const PropsStringMenu = () => {
	return (
		<>
			<AppBar position='sticky' color='secondary'>
				<Toolbar>
					{/* <NavItem
						label='child props string'
						to={SANDBOX_ROUTES.CHILD_PROPS_STRING}
						color='white'
					/> */}
					<NavItem
						label='father props string'
						to={SANDBOX_ROUTES.PROPS_STRING}
						color='white'
					/>
				</Toolbar>
			</AppBar>

			<Outlet />
		</>
	)
	}
export default PropsStringMenu