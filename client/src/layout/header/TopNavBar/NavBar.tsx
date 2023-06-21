import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import LeftNavBar from './left-navigation/LeftNavBar'
import RightNavBar from './right-navigation/RightNavBar'
import SearchBar from './search-bar/SearchBar'
import { MenuProvider } from './menu/MenuProvider'

export const NavBar = () => {
	return (
		<MenuProvider>
		<AppBar position='sticky'>
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				<LeftNavBar />

				<Box sx={{ display: { xs: 'inline-flex', md: 'none' } }}>
					<SearchBar />
				</Box>

				<RightNavBar />
			</Toolbar>
		</AppBar>
		</MenuProvider>
	)
}
