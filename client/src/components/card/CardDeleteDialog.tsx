import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material'
import { bool, func } from 'prop-types'

type Props = {
	isDialogOpen: boolean,
	onDelete: ( ) => void
	onChangeDialog: () => void
}

const CardDeleteDialog: React.FC<Props> = ({ isDialogOpen, onDelete, onChangeDialog }) => {
	return (
		<Dialog
			open={isDialogOpen}
			onClose={onChangeDialog}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
			maxWidth='xs'
		>
			<DialogTitle id='alert-dialog-title'>
				{'Are you sure you want to delete this card?'}
			</DialogTitle>

			<DialogContent>
				<DialogContentText id='alert-dialog-description'>
					This operation will completely delete this business card and all it's
					data from the database and it will not be possible to retrieve the
					card afterwards
				</DialogContentText>
			</DialogContent>

			<DialogActions>
				<Button onClick={onChangeDialog} color='error'>
					Cancel
				</Button>
				<Button onClick={()=> onDelete()} color='info'>
					Delete card
				</Button>
			</DialogActions>
		</Dialog>
	)
}

CardDeleteDialog.propTypes = {
	isDialogOpen: bool.isRequired,
	onChangeDialog: func.isRequired,
	onDelete: func.isRequired,
}

export default CardDeleteDialog
