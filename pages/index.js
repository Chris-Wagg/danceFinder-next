import { store } from './redux/store'
import { Provider } from 'react-redux'

import LandingPage from './components/LandingPage'

export default function Home() {
	return (
		<>
			<Provider store={store}>
				<LandingPage />
			</Provider>
		</>
	)
}
