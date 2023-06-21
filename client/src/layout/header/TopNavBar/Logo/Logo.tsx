import Typography from '@mui/material/Typography'
import ROUTES from '../../../../routes/routesModel'
import NavBarLink from '../../../components/NavBarLink'

const Logo = () => {
	return (
		<NavBarLink to={ROUTES.ROOT}>
			<Typography
				variant='h4'
				sx={{
					display: { xs: 'none', md: 'inline-flex' },
					marginRight: 2,
					fontFamily: 'fantasy',
				}}
			>
				BCard
			</Typography>
		</NavBarLink>
	)
}

export default Logo
