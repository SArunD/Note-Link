const mongoose = require('mongoose')

const emailSchema = mongoose.Schema(
	{
		text: {
			type: String,
			required: [true, 'Please Add Some Text!'],
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Email', emailSchema)
