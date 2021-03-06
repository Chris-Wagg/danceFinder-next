import { store } from './redux/store'
import { Provider } from 'react-redux'

import LandingPage from './components/LandingPage'
import MainPageTest from './components/MainPageTest'

export default function Home() {
	return (
		<>
			<Provider store={store}>
				<MainPageTest />
			</Provider>
		</>
	)
}
