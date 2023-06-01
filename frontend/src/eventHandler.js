import axios from 'axios'
import { useState, useEffect } from 'react'

const API_URL = process.env.NODE_ENV === 'production' ? 'https://note-link-lu6k.onrender.com/api/notes' : 'http://localhost:5000/api/notes'

const GET = (id) => {
	const [currNote, setCurrNote] = useState({})
	const [allNotes, setAllNotes] = useState([])

	useEffect(() => {
		const getCurrNote = async () => {
			const response = await axios.get(API_URL)
			if (id) {
				setCurrNote(response.data.filter((note) => note._id === id)[0])
			} else {
				setAllNotes(response.data)
			}
		}
		getCurrNote()
	}, [id])

	return id ? currNote : allNotes
}

const POST = (value) => {
	axios.post(
		API_URL,
		{
			body: value,
		},
		{
			headers: {
				'Content-Type': 'application/json',
			},
		}
	)
}

const PUT = (id, value) => {
	axios.put(
		API_URL + `/${id}`,
		{
			body: value,
		},
		{
			headers: {
				'Content-Type': 'application/json',
			},
		}
	)
}

const DELETE = (id) => {
	axios.delete(API_URL + `/${id}`)
	window.location.reload(false)
}

const eventHandler = {
	GET,
	POST,
	PUT,
	DELETE,
}

export default eventHandler
