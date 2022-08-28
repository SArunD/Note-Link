import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AddNote from './pages/AddNote'
import Dashboard from './pages/Dashboard'
import ViewNote from './pages/ViewNote'
import EditNote from './pages/EditNote'

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/add-note" element={<AddNote />} />
					<Route path="/view-note/:id" element={<ViewNote />} />
					<Route path="/edit-note/:id" element={<EditNote />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
