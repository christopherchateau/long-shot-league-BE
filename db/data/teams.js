const teams = [
  {
    name: "Duke",
    seed: 1,
    draftedBy: "Chris"
  },
  {
    name: "Virginia",
    seed: 1,
    draftedBy: "Matt"
  },
  {
    name: "Gonzaga",
    seed: 1,
    draftedBy: "Brent"
  },
  {
    name: "North Carolina",
    seed: 1,
    draftedBy: "Reed"
  },
  {
    name: "Kentucky",
    seed: 2,
    draftedBy: "Brewers"
  },
  {
    name: "Michigan",
    seed: 2,
    draftedBy: "Kristin"
  },
  {
    name: "Michigan St",
    seed: 2,
    draftedBy: "Laura"
  },
  {
    name: "Tennessee",
    seed: 2,
    draftedBy: "Scott"
  },
  {
    name: "Purdue",
    seed: 3,
    draftedBy: "Kevin"
  },
  {
    name: "LSU",
    seed: 3,
    draftedBy: "Dan"
  },
  {
    name: "Texas Tech",
    seed: 3,
    draftedBy: "Bmase"
  },
  {
    name: "Houston",
    seed: 3,
    draftedBy: "Alex"
  },
  {
    name: "Florida St",
    seed: 4,
    draftedBy: "Bmase"
  },
  {
    name: "Kansas",
    seed: 4,
    draftedBy: "Doherty"
  },
  {
    name: "Virginia Tech",
    seed: 4,
    draftedBy: "Doherty"
  },
  {
    name: "Kansas St",
    seed: 4,
    draftedBy: "Laura"
  },
  {
    name: "Mississippi St",
    seed: 5,
    draftedBy: "Brewers"
  },
  {
    name: "Wisconsin",
    seed: 5,
    draftedBy: "Kevin"
  },
  {
    name: "Marquette",
    seed: 5,
    draftedBy: "Scott"
  },
  {
    name: "Auburn",
    seed: 5,
    draftedBy: "Kristin"
  },
  {
    name: "Buffalo",
    seed: 6,
    draftedBy: "Brent"
  },
  {
    name: "Iowa St",
    seed: 6,
    draftedBy: "Matt"
  },
  {
    name: "Maryland",
    seed: 6,
    draftedBy: "Brent"
  },
  {
    name: "Villanova",
    seed: 6,
    draftedBy: "Fraske"
  },
  {
    name: "Louisville",
    seed: 7,
    draftedBy: "Reed"
  },
  {
    name: "Cincinnati",
    seed: 7,
    draftedBy: "Fraske"
  },
  {
    name: "Nevada",
    seed: 7,
    draftedBy: "Matt"
  },
  {
    name: "Wofford",
    seed: 7,
    draftedBy: "Todd"
  },
  {
    name: "Syracuse",
    seed: 8,
    draftedBy: "Chris"
  },
  {
    name: "Utah St",
    seed: 8,
    draftedBy: "Bmase"
  },
  {
    name: "VCU",
    seed: 8,
    draftedBy: "Laura"
  },
  {
    name: "Mississippi",
    seed: 8,
    draftedBy: "Kristin"
  },
  {
    name: "Central Florida",
    seed: 9,
    draftedBy: "Scott"
  },
  {
    name: "Oklahoma",
    seed: 9,
    draftedBy: "Dan"
  },
  {
    name: "Baylor",
    seed: 9,
    draftedBy: "Kevin"
  },
  {
    name: "Washington",
    seed: 9,
    draftedBy: "Laura"
  },
  {
    name: "Florida",
    seed: 10,
    draftedBy: "Doherty"
  },
  {
    name: "Seton Hall",
    seed: 10,
    draftedBy: "Brewers"
  },
  {
    name: "Minnesota",
    seed: 10,
    draftedBy: "Kristin"
  },
  {
    name: "Iowa",
    seed: 10,
    draftedBy: "Alex"
  },
  {
    name: "Belmont",
    seed: 11,
    draftedBy: "Todd"
  },
  {
    name: "St Mary's",
    seed: 11,
    draftedBy: "Reed"
  },
  {
    name: "Arizona St",
    seed: 11,
    draftedBy: "Justin"
  },
  {
    name: "Ohio St",
    seed: 11,
    draftedBy: "Scott"
  },
  {
    name: "Murray St",
    seed: 12,
    draftedBy: "Justin"
  },
  {
    name: "New Mexico St",
    seed: 12,
    draftedBy: "Chris"
  },
  {
    name: "Liberty",
    seed: 12,
    draftedBy: "Bmase"
  },
  {
    name: "Oregon",
    seed: 12,
    draftedBy: "Dan"
  },
  {
    name: "UC Irvine",
    seed: 13,
    draftedBy: "Todd"
  },
  {
    name: "Saint Louis",
    seed: 13,
    draftedBy: "Alex"
  },
  {
    name: "Vermont",
    seed: 13,
    draftedBy: "Fraske"
  },
  {
    name: "Northeastern",
    seed: 13,
    draftedBy: "Dan"
  },
  {
    name: "Northern Kentucky",
    seed: 14,
    draftedBy: "Kevin"
  },
  {
    name: "Georgia St",
    seed: 14,
    draftedBy: "Doherty"
  },
  {
    name: "Yale",
    seed: 14,
    draftedBy: "Justin"
  },
  {
    name: "Old Dominion",
    seed: 14,
    draftedBy: "Fraske"
  },
  {
    name: "Bradley",
    seed: 15,
    draftedBy: "Matt"
  },
  {
    name: "Colgate",
    seed: 15,
    draftedBy: "Reed"
  },
  {
    name: "Montana",
    seed: 15,
    draftedBy: "Todd"
  },
  {
    name: "Abilene-Christian",
    seed: 15,
    draftedBy: "Alex"
  },
  {
    name: "Fairleigh Dickinson",
    seed: 16,
    draftedBy: "Justin"
  },
  {
    name: "Iona",
    seed: 16,
    draftedBy: "Chris"
  },
  {
    name: "Gardner-Webb",
    seed: 16,
    draftedBy: "Brent"
  },
  {
    name: "North Dakota St",
    seed: 16,
    draftedBy: "Brewers"
  }
];

module.exports = teams;
