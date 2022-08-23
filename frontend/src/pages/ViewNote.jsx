import { useParams } from 'react-router-dom'
import handler from '../handler'

const ViewNote = () => {
	const { id } = useParams()

	const currNoteJSON = JSON.parse(JSON.stringify(handler.GET(id)))

	return <div>{currNoteJSON.body}</div>
}

export default ViewNote
