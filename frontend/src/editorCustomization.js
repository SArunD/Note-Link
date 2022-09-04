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
			},
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

const settings = {
	modules, 
	formats
}

export default settings
