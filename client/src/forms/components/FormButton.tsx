import Button from '@mui/material/Button'
import React, { ElementType, FC, ReactNode } from 'react'


/****כאן הכפתור עובר קוסטומיזציה שלנו,נוכל להשתמש בו בכמה מקומות****/
type Props = {
	variant?: 'contained' | 'outlined' | 'text'
	/****DIV.. SPAN.. המשמעות****/
	component?: ElementType<any>
	size?: 'small' | 'medium' | 'large'
	color?:
		| 'inherit'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'error'
		| 'info'
		| 'warning'
	onClick: () => void
	disabled?: boolean
	/****icon,button,text,link אם מה שעותפים את הכפתור כגון ****/
	node: ReactNode
}

const FormButton: FC<Props> = ({
	variant = 'contained',
	component = 'button',
	size = 'medium',
	color = 'primary',
	onClick,
	disabled = false,
	node,
}) => {
	/****MUI BUTTON מחזיר לנו של ****/
	return (
		<Button
			variant={variant}
			component={component}
			size={size}
			color={color}
			onClick={onClick}
			disabled={disabled}
			fullWidth
		>
			{node}
		</Button>
	)
}

export default React.memo(FormButton)
