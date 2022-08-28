import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import handler from '../handler'

const AddNote = () => {
	const modules = {
		toolbar: [
			[{ header: [1, 2, false] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[
				{
					color: [
						'#000000',
						'#666666',
						'#B7B7B7',
						'#D9D9D9',
						'#980000',
						'#FF0000',
						'#FF9900',
						'#FFFF00',
						'#00FF00',
						'#00FFFF',
						'#4A86E8',
						'#0000FF',
						'#9900FF',
						'#FF00FF',
					],
				},
				{
					background: [
						'#000000',
						'#666666',
						'#B7B7B7',
						'#D9D9D9',
						'#980000',
						'#FF0000',
						'#FF9900',
						'#FFFF00',
						'#00FF00',
						'#00FFFF',
						'#4A86E8',
						'#0000FF',
						'#9900FF',
						'#FF00FF',
					],
				}
			],
			[
				{ list: 'ordered' },
				{ list: 'bullet' },
				{ indent: '-1' },
				{ indent: '+1' },
			],
			['clean'],
		],
	}

	const formats = [
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'color',
		'background',
		'list',
		'bullet',
		'indent',
	]

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

			handler.POST(value)

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
						className="editor-box"
						modules={modules}
						formats={formats}
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
