import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchBar = () => {
	const [searchParams, setSearch] = useSearchParams()
	const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setSearch({ q: target.value })
	}

	return (
		<Box display='inline-flex'>
			<FormControl variant='standard'>
				<OutlinedInput
					sx={{ backgroundColor: '#e3f2fd' }}
					placeholder='Search'
					size='small'
					value={searchParams.get('q') || ''}
					onChange={handleOnChange}
					endAdornment={
						<InputAdornment position='end'>
							<IconButton edge='end'>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					}
				/>
			</FormControl>
		</Box>
	)
}

export default SearchBar
