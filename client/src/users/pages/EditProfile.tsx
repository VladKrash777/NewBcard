import Container from '@mui/material/Container'
import { useEffect } from 'react'
import useForm from '../../forms/hooks/useForm'
import UserForm from '../components/UserForm'
import initialSignupForm from '../helpers/initialForms/initialSignupForm'
import mapUserToModel from '../helpers/normalization/mapUserToModel'
import useHandleUser from '../hooks/useHandleUsers'
import signupSchema from '../models/models/Joi/signupSchema'
import { useUser } from '../providers/UserProvider'

const EditProfile = () => {
	const { user } = useUser()
	const { handleSignup, handleUserFullData, handleOnEdit } = useHandleUser()
	const { value, setData, ...rest } = useForm(
		initialSignupForm,
		signupSchema,
		handleSignup
	)

	useEffect(() => {
		handleUserFullData().then((responseUserProfile) => {
			const { _id, ...restResponse } = mapUserToModel(responseUserProfile)
			setData(restResponse)
		})
	}, [])

	return (
		<Container
			sx={{
				paddingTop: 8,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<UserForm
				title='Edit Profile'
				onSubmit={() => handleOnEdit(value.data, user?._id)}
				onReset={rest.handleReset}
				onFormChange={rest.validateForm}
				onInputChange={rest.handleInputChange}
				data={value.data}
				errors={value.errors}
				setData={setData}
			/>
		</Container>
	)
}

export default EditProfile
