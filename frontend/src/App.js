import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import AddNote from './pages/AddNote'
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
					<Route exact path="/view-note/:id" element={<ViewNote />} />
					<Route exact path="/edit-note/:id" element={<EditNote />} />
					<Route path="*" element={<Navigate to="/dashboard" />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
