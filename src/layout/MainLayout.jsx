import DataProvider from '../contex/DataContex'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
	return (
		<DataProvider>
			<Header />
			<Outlet />
			<Footer />
		</DataProvider>
	)
}

export default MainLayout