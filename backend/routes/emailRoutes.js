const express = require('express')
const router = express.Router()
const { getEmails, setEmail, updateEmail, deleteEmail } = require('../controllers/emailController')

router.route('/').get(getEmails).post(setEmail)
router.route('/:id').put(updateEmail).delete(deleteEmail)

module.exports = router
