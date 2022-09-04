import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import eventHandler from '../eventHandler'
import settings from '../editorCustomization'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditNote = () => {
	const navigate = useNavigate()
	const { id } = useParams()

  let value = eventHandler.GET(id).body
	const [err, setErr] = useState(false)

	const handleCancel = (e) => {
		navigate('/dashboard')
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (value.replace(/<[^>]+>/g, '').length === 0) {
			setErr(true)
		} else {
			setErr(false)

			eventHandler.PUT(id, value)
			
			setInterval(() => {
				value = ''
			}, 1000)
			alert('NOTE UPDATED SUCCESSFULLY...')

      navigate('/dashboard')
		}
	}

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<h2>Edit Note</h2>
				{err && <div className="editor-error">ERROR: Enter Some Text Value or Edit Previous Text!</div>}
				<div className="editor-container">
					<ReactQuill
						theme="snow"
						value={value}
						onChange={(e) => value = e}
						className="editor-box"
						modules={settings.modules}
						formats={settings.formats}
					/>
				</div>
				<div className="button-container">
					<button type="button" onClick={handleCancel}>
						Cancel
					</button>
					<button type="submit">Update Note</button>
				</div>
			</form>
		</div>
	)
}

export default EditNote
