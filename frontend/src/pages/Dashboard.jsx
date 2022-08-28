import handler from '../handler'
import moment from 'moment'
import { TbFileSearch, TbEdit } from 'react-icons/tb'
import { IoTrashOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
	const allNotes = handler.GET()

	const navigate = useNavigate()

	return (
		// <div className="notes-container">
		// 	{/* <div className="note-container">
		//     <h2>Title</h2>
		//     <p>Created At</p>
		//     <p>Content</p>
		//     <span>Options</span>
		//   </div> */}
		// 	{/* style={note.createdAt !== note.updatedAt ? {borderBottom: "5px solid green"} : null} */}
		// 	{allNotes.map((note) => (
		// 		<div className="note-container" key={note._id}>
		// 			{/* <h2>Note #{allNotes.indexOf(note) + 1}</h2> */}
		// 			<h2>{note.body}</h2>
		// 			<p>{moment(note.createdAt).format('LL - hh:mm A')}</p>
		// 			<div className="icon-container">
		// 				<TbFileSearch />
		// 				<TbEdit />
		// 				<IoTrashOutline />
		// 			</div>
		// 		</div>
		// 	))}
		// </div>

		<div className="notes-container">
			{allNotes.map((note) => (
				<div className="note-container" key={note._id}>
					<h2 style={{ marginBottom: 0 }}>
						Note #{allNotes.indexOf(note) + 1}
					</h2>
					<p>{moment(note.createdAt).format('LL - hh:mm A')}</p>
					<div className="icon-container">
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
							onClick={() => handler.DELETE(note._id)}
						/>
					</div>
				</div>
			))}
		</div>
	)
}

export default Dashboard
