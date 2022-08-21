import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


const AddNote = () => {
	const [value, setValue] = useState('')

	console.log(value)

	return (
		<div className="form-container">
			<form>
				<h2>Create A Note</h2>
				{/* <textarea name="body" cols="30" rows="15"></textarea> */}
				<div className="editor-container">
					<ReactQuill
						theme="snow"
						value={value}
						onChange={setValue}
						className="quill-editor"
					/>
				</div>
				<div className="button-container">
					<button className="cancel">Cancel</button>
					<button className="draft">Save As Draft</button>
					<button type="submit">Save & Generate Link</button>
				</div>
			</form>
		</div>
	)
}

export default AddNote
