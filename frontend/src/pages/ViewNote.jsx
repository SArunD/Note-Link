import eventHandler from '../eventHandler'
import { useParams } from 'react-router-dom'

const ViewNote = () => {
	const { id } = useParams()

	const body = eventHandler.GET(id).body

	return (
		<div className="view-note-container ql-snow">
			<h2>View Note</h2>
			<div
				className="view-note ql-editor"
				dangerouslySetInnerHTML={{ __html: body }}
			></div>
		</div>
	)
}

export default ViewNote
