import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavItem from '../../layout/components/NavItem'
import { SANDBOX_ROUTES } from '../../routes/routesModel'
import DrawerListItem from '../DrawerListItem'

const ContextMenu = () => {
	const [isOpen, setOpen] = useState(false)

	return (
		<div>
			<AppBar position='sticky' color='transparent'>
				<IconButton
					onClick={() => setOpen(true)}
					sx={{ display: { xs: 'inline-flex', md: 'none' } }}
				>
					<ExpandMoreIcon />
				</IconButton>

				<Drawer anchor='top' open={isOpen} onClose={() => setOpen(false)}>
					<List>
						<DrawerListItem
							label='name'
							navigateTo='name'
							onClose={() => setOpen(false)}
						/>
						<DrawerListItem
							label='snackbar'
							navigateTo='snack'
							onClose={() => setOpen(false)}
						/>
					</List>
				</Drawer>

				<Box sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
					<NavItem label='name' to={SANDBOX_ROUTES.NAME} color='black' />
					<NavItem label='snackbar' to={SANDBOX_ROUTES.SNACK} color='black' />
				</Box>
			</AppBar>

			<Outlet />
		</div>
	)
}

export default ContextMenu
