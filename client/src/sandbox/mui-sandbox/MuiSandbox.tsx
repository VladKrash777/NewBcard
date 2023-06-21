// import MuiButton from "./data-display/MuiButton";
// import MuiDivider from "./MuiDivider";
// import TypographyComponent from "./TypographyComponent";
// import MuiBox from "../mui-sandbox/layout/MuiBox";
// import MuiContainer from "./layout/MuiContainer";
// import MuiStack from "./layout/MuiStack";
import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { Outlet } from 'react-router-dom'
import NavItem from '../../layout/components/NavItem'

import { SANDBOX_ROUTES } from '../../routes/routesModel'

const MuiSandbox = () => {
	return (
		<div>
			<AppBar position='sticky' color='primary'>
				<Toolbar>
					{/* <NavItem label='Typography' to='typography' sx={{ color: 'black' }} /> */}
					{/* <NavItem label='Divider' to='divider' sx={{ color: 'black' }} /> */}
					<NavItem
						label='layout-menu'
						to={SANDBOX_ROUTES.LAYOUTMENU}
						color='white'
					/>
					<NavItem
						label='data-display'
						to={SANDBOX_ROUTES.DATAMENU}
						color='white'
					/>
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
