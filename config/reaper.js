module.exports = [
	//Grim Strike Reset 
	{
		type: 'Reset',
		skills: 50100, 
		message: '{icon} Reset'
	},
	
	// Double Sheer Power buff
	{
		type: 'MissingDuringCombat',
		target: 'Self',
		abnormalities: 29020,
		message: '{icon} Use Sheer',
		rewarn_timeout:[5]
		},
		
	// Death Spiral Power buff
	{
		type: 'MissingDuringCombat',
		target: 'Self',
		abnormalities: 29112,
		message: '{icon} Use Spiral',
		rewarn_timeout: [5]
	},
]