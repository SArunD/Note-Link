const asyncHandler = require('express-async-handler')
const Email = require('../models/emailModel')

// @desc    Get Emails
// @route   GET /api/emails
// @access  Private
const getEmails = asyncHandler(async (req, res) => {
  const emails = await Email.find()
  res.status(200).json(emails)
})

// @desc    Set Email
// @route   POST /api/emails
// @access  Private
const setEmail = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please Add A Text Field!')
  }
  const email = await Email.create({
    text: req.body.text
  })
  res.status(200).json(email)
})

// @desc    Update Email
// @route   PUT /api/emails/:id
// @access  Private
const updateEmail = asyncHandler(async (req, res) => {
  const email = await Email.findById(req.params.id)
  if (!email) {
    res.status(400)
    throw new Error('Email Not Found!')
  }
  const updatedEmail = await Email.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.status(200).json(updatedEmail)
})

// @desc    Delete Email
// @route   DELETE /api/emails/:id
// @access  Private
const deleteEmail = asyncHandler(async (req, res) => {
  const email = await Email.findById(req.params.id)
  if (!email) {
    res.status(400)
    throw new Error('Email Not Found!')
  }
  await email.remove()
  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getEmails,
  setEmail,
  updateEmail,
  deleteEmail
}