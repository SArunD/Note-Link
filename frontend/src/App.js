import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AddNote from './components/AddNote'
import ViewNote from './pages/ViewNote'

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route path="/add-note" element={<AddNote />} />
					<Route path="/view-note/:id" element={<ViewNote />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
