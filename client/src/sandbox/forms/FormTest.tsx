import Container from '@mui/material/Container'
import Joi from 'joi'
import Form from '../../forms/components/Form'
import useForm from '../../forms/hooks/useForm'
import ROUTES from '../../routes/routesModel'
import Input from '../../forms/components/Input'

const FormTest = () => {
	const INITIAL_FORM = {
		first: '',
		last: '',
	}

	const SHEMA = {
		first: Joi.string().min(2).required(),
		last: Joi.string().min(2).required(),
	}

	const handleSubmit = (data: FormData) =>{
		console.log(data)
	handleReset()
	}


	const { value, ...rest } = useForm(INITIAL_FORM, SHEMA, handleSubmit)
	const { handleInputChange, handleReset, onSubmit, validateForm } = rest
	const { data, errors } = value

	return (
		<Container sx={{ mt: 8 ,display:'flex',justifyContent:'center',alignItems:'center'}} className='center'>
			
			<Form
				title='Form Test'
				onSubmit={onSubmit}
				onReset={handleReset}
				onFormChange={validateForm}
				to={ROUTES.SANDBOX}
				
			>
				<Input 
				label='first name' 
				name='first' 
				data={data} 
				error={errors.first} 
				onInputChange={handleInputChange}
				breakPoints={{xs:12, md: 6}}
				/>
				<Input 
				label='last name' 
				name='last' 
				data={data} 
				error={errors.first} 
				onInputChange={handleInputChange}
				/>
			</Form>
		</Container>
	)
}

export default FormTest
