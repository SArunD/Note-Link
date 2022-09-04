import eventHandler from '../eventHandler'
import { useParams, useNavigate } from 'react-router-dom'

const ViewNote = () => {
	const { id } = useParams()

	const navigate = useNavigate()

	const body = eventHandler.GET(id).body

	return (
		<div className="view-note-container ql-snow">
			<h2>View Note</h2>
			<div
				className="view-note ql-editor"
				dangerouslySetInnerHTML={{ __html: body }}
			></div>
			<button className='return' onClick={() => navigate('/dashboard')}>Return To Dashboard</button>
		</div>
	)
}

export default ViewNote
