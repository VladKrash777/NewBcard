// import MuiButton from "./data-display/MuiButton";
// import MuiDivider from "./MuiDivider";
// import TypographyComponent from "./TypographyComponent";
// import MuiBox from "../mui-sandbox/layout/MuiBox";
// import MuiContainer from "./layout/MuiContainer";
// import MuiStack from "./layout/MuiStack";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Outlet } from 'react-router-dom'
import NavItem from '../../routes/components/NavItem'

const MuiSandbox = () => {
	return (
		<div>
			<AppBar position='sticky' color='transparent'>
				<Toolbar>
					<NavItem label='Typography' to='typography' sx={{ color: 'black' }} />
					<NavItem label='Divider' to='divider' sx={{ color: 'black' }} />
				</Toolbar>
			</AppBar>
			{/* <TypographyComponent /> */}
			{/* <MuiDivider /> */}
			{/* <MuiButton /> */}
			{/* <MuiBox /> */}
			{/* <MuiContainer /> */}
			{/* <MuiStack /> */}
			{/* <MuiGrid /> */}
			{/* <MuiAppBar /> */}
			{/* <MuiBottomNavigation />/ */}

			<Outlet />
		</div>
	)
}

export default MuiSandbox
