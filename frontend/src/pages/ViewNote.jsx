import { useParams } from 'react-router-dom'
import handler from '../handler'

const ViewNote = () => {
	const { id } = useParams()

	const currNoteJSON = JSON.parse(JSON.stringify(handler.GET(id)))

	return (
		<div className="view-note-container ql-snow">
			<h2>View Note</h2>
			<div
				className="view-note ql-editor"
				dangerouslySetInnerHTML={{ __html: currNoteJSON.body }}
			></div>
		</div>
	)
}

export default ViewNote
