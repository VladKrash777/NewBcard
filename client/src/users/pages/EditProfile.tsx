import Container from '@mui/material/Container'
import { Navigate } from 'react-router-dom'
import useForm from '../../forms/hooks/useForm'
import ROUTES from '../../routes/routesModel'
import UserForm from '../components/UserForm'
import initialSignupForm from '../helpers/initialForms/initialSignupForm'
import signupSchema from '../models/models/Joi/signupSchema'
import { useUser } from '../providers/UserProvider'
import useHandleUser from '../hooks/useHandleUsers'

const EditProfile = () => {
	const { user } = useUser()
	const { handleSignup } = useHandleUser()
	const { value, ...rest } = useForm(
		initialSignupForm,
		signupSchema,
		handleSignup
	)

	// if (user) return <Navigate replace to={ROUTES.CARDS} />

	return (
		<Container
			sx={{
				paddingTop: 8,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{/* <UserForm
				title='register user'
				onSubmit={rest.onSubmit}
				onReset={rest.handleReset}
				onFormChange={rest.validateForm}
				onInputChange={rest.handleInputChange}
				data={value.data}
				errors={value.errors}
				setData={rest.setData}
			/> */}
		</Container>
	)
}

export default EditProfile
