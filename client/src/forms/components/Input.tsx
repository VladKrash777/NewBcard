import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import React, { ChangeEvent, FC } from 'react'
import { makeFirstLetterCapital } from '../utils/algoMethods'

type VariantType = 'filled' | 'outlined' | 'standard'
type BreakPointsKeysType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type BreakPointValueType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 

type Props = {
	variant?: VariantType
	type?: string
	name: string
	data: Record<string, unknown> //Record זה אובייקט עם מפתחות וערכים {'string' : unknown} {'name' : true} ['one','two']
	label: string
	required?: boolean
	error?: string
	onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
	/**PARTIAL -XS SM MD LG XL לוקח את כל המפתחות באובייקט והופך אותם לאופציונליים.זאת אומרת או  **/
	breakPoints?: Partial<Record<BreakPointsKeysType, BreakPointValueType>>
}

const Input: FC<Props> = ({
	variant = 'outlined',
	type = 'text',
	name,
	data,
	label,
	required = true,
	error,
	onInputChange,
	breakPoints = { xs: 12 },
}) => {
	return (
		<Grid item {...breakPoints}>
			<TextField
				variant={variant}
				label={makeFirstLetterCapital(label)}
				type={type}
				id={name}
				name={name}
				value={data[name] ? data[name] : ''}
				required={required}
				helperText={error}
				error={Boolean(error)}
				onChange={onInputChange}
				fullWidth
				autoComplete='off'
			/>
		</Grid>
	)
}

export default React.memo(Input)
