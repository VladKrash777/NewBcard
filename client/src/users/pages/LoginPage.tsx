import { Button } from '@mui/material'
import Container from '@mui/material/Container'
import Joi from 'joi'
import { useNavigate } from 'react-router-dom'
import Form from '../../forms/components/Form'
import Input from '../../forms/components/Input'
import useForm from '../../forms/hooks/useForm'
import ROUTES from '../../routes/routesModel'
import initialLoginForm from '../helpers/initialForms/initialLoginForm'
import loginSchema from '../models/joi/loginSchema';
import useHandleUser from '../hooks/useHandleUser'
import { Navigate } from 'react-router-dom'



type Data = {
	email: string
	password: string
}

const LoginPage = () => {
	const navigate = useNavigate()
	const { handleLogin, value: { user } } = useHandleUser();
	const { value, ...rest } = useForm(initialLoginForm, loginSchema, handleLogin)
	const { data, errors } = value
	const { handleInputChange, handleReset, onSubmit, validateForm } = rest

	if (user) return <Navigate replace to={ROUTES.ROOT} />

	return (
		<Container
			sx={{
				height: '80vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Form
				title='Login'
				onSubmit={onSubmit}
				onReset={handleReset}
				onFormChange={validateForm}
				spacing={1}
				styles={{maxWidth: '450px'}}
			>
				<Input
					label='email'
					name='email'
					type='email'
					data={data}
					error={errors.email}
					onInputChange={handleInputChange}
				/>
				<Input
					label='password'
					name='password'
					type='password'
					data={data}
					error={errors.password}
					onInputChange={handleInputChange}
				/>

				<Button variant='text' onClick={() => navigate(ROUTES.SIGNUP)}>
					{' '}
					register...
				</Button>
			</Form>
		</Container>
	)
}

export default LoginPage
