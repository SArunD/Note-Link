import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import handler from '../handler'

const AddNote = () => {
	const [value, setValue] = useState('')
	const [err, setErr] = useState(false)

	const navigate = useNavigate()

	const handleCancel = (e) => {
		navigate('/')
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (value.replace(/<[^>]+>/g, '').length === 0) {
			setErr(true)
		} else {
			setErr(false)

			handler.notePOST(value)

			setInterval(() => {
				setValue('')
			}, 1000)
			alert('NOTE STORED SUCCESSFULLY...')
		}
	}

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<h2>Create Note</h2>
				{err ? (
					<div className="editor-error">ERROR: Enter Some Text Value!</div>
				) : (
					''
				)}
				<div className="editor-container">
					<ReactQuill
						theme="snow"
						value={value}
						onChange={setValue}
						className="quill-editor"
					/>
				</div>
				<div className="button-container">
					<button type="button" onClick={handleCancel}>
						Cancel
					</button>
					<button type="submit">Save & Generate Link</button>
				</div>
			</form>
		</div>
	)
}

export default AddNote
