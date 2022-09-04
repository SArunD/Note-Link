import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import eventHandler from '../eventHandler'
import settings from '../editorCustomization'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddNote = () => {
	const [value, setValue] = useState('')
	const [err, setErr] = useState(false)

	const navigate = useNavigate()

	const handleCancel = (e) => {
		navigate('/dashboard')
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (value.replace(/<[^>]+>/g, '').length === 0) {
			setErr(true)
		} else {
			setErr(false)

			eventHandler.POST(value)

			setInterval(() => {
				setValue('')
			}, 1000)
			alert('NOTE STORED SUCCESSFULLY...')
			
			navigate('/dashboard')
		}
	}

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<h2>Create Note</h2>
				{err && <div className="editor-error">ERROR: Enter Some Text Value!</div>}
				<div className="editor-container">
					<ReactQuill
						theme="snow"
						value={value}
						onChange={setValue}
						className="editor-box"
						modules={settings.modules}
						formats={settings.formats}
					/>
				</div>
				<div className="button-container">
					<button type="button" onClick={handleCancel}>
						Cancel
					</button>
					<button type="submit">Save Note</button>
				</div>
			</form>
		</div>
	)
}

export default AddNote
