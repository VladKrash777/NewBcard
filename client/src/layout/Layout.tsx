import React, { ReactNode } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import Main from './main/Main'

type Props = {
	children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	)
}

export default Layout
