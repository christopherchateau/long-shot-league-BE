const teams = [
	{
		name: 'Gonzaga',
		seed: 1,
		draftedBy: 'Chris',
	},
	{
		name: 'Baylor',
		seed: 1,
		draftedBy: 'Kirkwood',
	},
	{
		name: 'Michigan',
		seed: 1,
		draftedBy: 'Matt',
	},
	{
		name: 'Illinois',
		seed: 1,
		draftedBy: 'Scott',
	},
	{
		name: 'Iowa',
		seed: 2,
		draftedBy: 'Brian',
	},
	{
		name: 'Ohio St',
		seed: 2,
		draftedBy: 'Batey',
	},
	{
		name: 'Alabama',
		seed: 2,
		draftedBy: 'Alex',
	},
	{
		name: 'Houston',
		seed: 2,
		draftedBy: 'Brewers',
	},
	{
		name: 'Kansas',
		seed: 3,
		draftedBy: 'Fraske',
	},
	{
		name: 'Arkansas',
		seed: 3,
		draftedBy: 'Matt',
	},
	{
		name: 'Texas',
		seed: 3,
		draftedBy: 'Brian',
	},
	{
		name: 'West Virginia',
		seed: 3,
		draftedBy: 'Brent',
	},
	{
		name: 'Virginia',
		seed: 4,
		draftedBy: 'Scott',
	},
	{
		name: 'Purdue',
		seed: 4,
		draftedBy: 'Batey',
	},
	{
		name: 'Florida St',
		seed: 4,
		draftedBy: 'Brewers',
	},
	{
		name: 'Oklahoma St',
		seed: 4,
		draftedBy: 'Brian',
	},
	{
		name: 'Creighton',
		seed: 5,
		draftedBy: 'Alex',
	},
	{
		name: 'Villanova',
		seed: 5,
		draftedBy: 'Brent',
	},
	{
		name: 'Colorado',
		seed: 5,
		draftedBy: 'Reed',
	},
	{
		name: 'Tennessee',
		seed: 5,
		draftedBy: 'Reed',
	},
	{
		name: 'USC',
		seed: 6,
		draftedBy: 'Brent',
	},
	{
		name: 'Texas Tech',
		seed: 6,
		draftedBy: 'Brewers',
	},
	{
		name: 'BYU',
		seed: 6,
		draftedBy: 'Kirkwood',
	},
	{
		name: 'San Diego St',
		seed: 6,
		draftedBy: 'Fraske',
	},
	{
		name: 'Oregon',
		seed: 7,
		draftedBy: 'Chris',
	},
	{
		name: 'Florida',
		seed: 7,
		draftedBy: 'Brian',
	},
	{
		name: 'Connecticut',
		seed: 7,
		draftedBy: 'Todd',
	},
	{
		name: 'Clemson',
		seed: 7,
		draftedBy: 'Matt',
	},
	{
		name: 'Oklahoma',
		seed: 8,
		draftedBy: 'Chris',
	},
	{
		name: 'North Carolina',
		seed: 8,
		draftedBy: 'Todd',
	},
	{
		name: 'LSU',
		seed: 8,
		draftedBy: 'Chris',
	},
	{
		name: 'Loyola Chicago',
		seed: 8,
		draftedBy: 'Reed',
	},
	{
		name: 'Missouri',
		seed: 9,
		draftedBy: 'Brent',
	},
	{
		name: 'Wisconsin',
		seed: 9,
		draftedBy: 'Reed',
	},
	{
		name: 'St Bonaventure',
		seed: 9,
		draftedBy: 'Scott',
	},
	{
		name: 'Georgia Tech',
		seed: 9,
		draftedBy: 'Fraske',
	},
	{
		name: 'VCU',
		seed: 10,
		draftedBy: 'Kirkwood',
	},
	{
		name: 'Virginia Tech',
		seed: 10,
		draftedBy: 'Kirkwood',
	},
	{
		name: 'Maryland',
		seed: 10,
		draftedBy: 'Fraske',
	},
	{
		name: 'Rutgers',
		seed: 10,
		draftedBy: 'Brewers',
	},
	{
		name: 'Wichita St/Drake',
		seed: 11,
		draftedBy: 'Alex',
	},
	{
		name: 'Utah St',
		seed: 11,
		draftedBy: 'Chris',
	},
	{
		name: 'Michigan St/UCLA',
		seed: 11,
		draftedBy: 'Todd',
	},
	{
		name: 'Syracuse',
		seed: 11,
		draftedBy: 'Brian',
	},
	{
		name: 'UCSB',
		seed: 12,
		draftedBy: 'Batey',
	},
	{
		name: 'Winthrop',
		seed: 12,
		draftedBy: 'Alex',
	},
	{
		name: 'Georgetown',
		seed: 12,
		draftedBy: 'Batey',
	},
	{
		name: 'Oregon St',
		seed: 12,
		draftedBy: 'Matt',
	},
	{
		name: 'Ohio',
		seed: 13,
		draftedBy: 'Todd',
	},
	{
		name: 'North Texas',
		seed: 13,
		draftedBy: 'Kirkwood',
	},
	{
		name: 'NC Greensboro',
		seed: 13,
		draftedBy: 'Alex',
	},
	{
		name: 'Liberty',
		seed: 13,
		draftedBy: 'Fraske',
	},
	{
		name: 'Eastern Washington',
		seed: 14,
		draftedBy: 'Todd',
	},
	{
		name: 'Colgate',
		seed: 14,
		draftedBy: 'Scott',
	},
	{
		name: 'Morehead St',
		seed: 14,
		draftedBy: 'Batey',
	},
	{
		name: 'Grand Canyon',
		seed: 15,
		draftedBy: 'Brewers',
	},
	{
		name: 'Oral Roberts',
		seed: 15,
		draftedBy: 'Reed',
	},
	{
		name: 'Iona',
		seed: 15,
		draftedBy: 'Matt',
	},
	{
		name: 'Drexel',
		seed: 16,
		draftedBy: 'Scott',
	},
	{
		name: 'Mount St Marys/Texas Southern',
		seed: 16,
		draftedBy: 'Brent',
	},
]

module.exports = teams
