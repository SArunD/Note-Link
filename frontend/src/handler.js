import axios from "axios"
import { useState, useEffect } from 'react'

const GET = (id) => {
  const [currNote, setCurrNote] = useState({})

  useEffect(() => {
    const getCurrNote = async () => {
      const response = await axios.get('http://localhost:5000/api/notes')
      setCurrNote(response.data.filter((note) => note._id === id)[0])
    }
    getCurrNote()
  }, [id])

  return currNote
}

const notePOST = (value) => {
  axios.post(
    'http://localhost:5000/api/notes',
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

const handler = {
  GET,
  notePOST
}

export default handler