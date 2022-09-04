import moment from 'moment'
import eventHandler from '../eventHandler'
import { useNavigate } from 'react-router-dom'
import { TbFileSearch, TbEdit } from 'react-icons/tb'
import { IoTrashOutline } from 'react-icons/io5'
import { HiOutlineClipboardCopy } from 'react-icons/hi'

const Dashboard = () => {
	const allNotes = eventHandler.GET()

	const navigate = useNavigate()

	return (
		<div className="notes-container">
			{allNotes.length === 0 && (
				<h3 className="not-found-msg">No Notes Found!</h3>
			)}
			{allNotes.map((note) => (
				<div className="note-container" key={note._id}>
					<h2 style={{ marginBottom: 0 }}>
						Note #{allNotes.indexOf(note) + 1}
					</h2>
					{note.createdAt === note.updatedAt ? (
						<p className="date-time">
							<em>Created At: </em>
							{moment(note.createdAt).format('L - hh:mm A')}
						</p>
					) : (
						<p className="date-time">
							<em>Updated At: </em>
							{moment(note.updatedAt).format('L - hh:mm A')}
						</p>
					)}
					<div className="icon-container">
						<HiOutlineClipboardCopy
							title="Copy This Note Link..."
							className="copy-icon"
							onClick={() => {
								const link = `/view-note/${note._id}`
								navigator.clipboard
									.writeText(link)
									.then(() => alert('LINK COPIED SUCCESSFULLY...'))
							}}
						/>
						<TbFileSearch
							title="View This Note..."
							className="search-icon"
							onClick={() => navigate(`/view-note/${note._id}`)}
						/>
						<TbEdit
							title="Edit This Note..."
							className="edit-icon"
							onClick={() =>
								navigate(`/edit-note/${note._id}`, {
									replace: true,
									state: { body: note.body },
								})
							}
						/>
						<IoTrashOutline
							title="Delete This Note..."
							className="delete-icon"
							onClick={() => eventHandler.DELETE(note._id)}
						/>
					</div>
				</div>
			))}
		</div>
	)
}

export default Dashboard
