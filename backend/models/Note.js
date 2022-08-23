const mongoose = require('mongoose')

const noteSchema = mongoose.Schema(
	{
		body: {
			type: String,
			required: [true, 'Please Add A Body Text!'],
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Note', noteSchema)
