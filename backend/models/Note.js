const mongoose = require('mongoose')

const noteSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'Please Add A Title!'],
		},
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
