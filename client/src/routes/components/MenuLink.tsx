import React from 'react'
import {string, func} from 'prop-types'
import NavBarLink from '../../layout/components/NavBarLink'
import MenuItem from '@mui/material/MenuItem/MenuItem'
import { makeFirstLetterCapital } from '../../forms/utils/algoMethods'
import OnClick from '../../sandbox/events/OnClick';
import Styles from '../../sandbox/components/styles/Styles';

type Props = {
	text: string
	navigateTo: string
	styles: {}
	onClick: ()=> void
}

const MenuLink: React.FC<Props> = ({text, navigateTo, onClick, styles}) => {

  return (
	 <NavBarLink to={navigateTo}>
		<MenuItem sx={{ ...styles }} onClick={onClick}>
			{makeFirstLetterCapital(text)}
		</MenuItem>
	 </NavBarLink>
  )
}

// MenuLink.propTypes = {
// 	navigateTo: string.isRequired,
// 	onclick: func.isRequired,
// 	text: string.isRequired
// }

// MenuLink.defaultProps = {
// 	styles: {}
// }

export default MenuLink