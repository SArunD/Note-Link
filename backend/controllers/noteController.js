const asyncHandler = require('express-async-handler')
const Note = require('../models/Note')
const mongoose = require('mongoose')

// @desc    Get Notes
// @route   GET /api/notes
// @access  Private
const getNotes = asyncHandler(async (req, res) => {
	const notes = await Note.find()
	res.status(200).json(notes)
})

// @desc    Set Note
// @route   POST /api/notes
// @access  Private
const setNote = asyncHandler(async (req, res) => {
	if (!req.body.body) {
		res.status(400)
		throw new Error('Please Add A Body Field!')
	}
	const note = await Note.create({
		body: req.body.body,
	})
	res.status(200).json(note)
})

// @desc    Update Note
// @route   PUT /api/notes/:id
// @access  Private
const updateNote = asyncHandler(async (req, res) => {
	if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
		res.status(400)
		throw new Error('Invalid ID, Note Not Found!')
	}
	const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	})
	res.status(200).json(updatedNote)
})

// @desc    Delete Note
// @route   DELETE /api/notes/:id
// @access  Private
const deleteNote = asyncHandler(async (req, res) => {
	if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
		res.status(400)
		throw new Error('Invalid ID, Note Not Found!')
	}
	await (await Note.findById(req.params.id)).remove()
	res.status(200).json({ id: req.params.id })
})

module.exports = {
	getNotes,
	setNote,
	updateNote,
	deleteNote,
}
