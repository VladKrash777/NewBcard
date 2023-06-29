import Box from '@mui/material/Box'

import ROUTES from '../../../../routes/routesModel'
import NavItem from '../../../components/NavItem'

const NotLogged = () => {
	return (
		<Box>
			<NavItem label='signup' to={ROUTES.SIGNUP} />
			<NavItem label='login' to={ROUTES.LOGIN} />
		</Box>
	)
}

export default NotLogged
