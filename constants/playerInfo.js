const playerInfo = [
    {
      "playerId": 54,
      "playerName": "Diego Costa",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 178,
      "playerName": "Lucas Moura",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 297,
      "playerName": "A. Oxlade-Chamberlain",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 888,
      "playerName": "P. Jones",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 900,
      "playerName": "J. Lingard",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 2473,
      "playerName": "M. Lanzini",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 2677,
      "playerName": "João Moutinho",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 18753,
      "playerName": "Adama Traoré",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 18762,
      "playerName": "T. Davies",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 18849,
      "playerName": "J. McArthur",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 18852,
      "playerName": "L. Milivojević",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 18854,
      "playerName": "A. Townsend",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 18858,
      "playerName": "A. Begović",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 18878,
      "playerName": "J. Stanislas",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 18891,
      "playerName": "C. Clark",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 19174,
      "playerName": "J. Steer",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 19299,
      "playerName": "J. Colback",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 19842,
      "playerName": "L. Taylor",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 130419,
      "playerName": "M. Longstaff",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 181822,
      "playerName": "E. Wady",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 84,
      "playerName": "Wesley Moraes",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 285,
      "playerName": "K. Hoever",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 378,
      "playerName": "Alex Telles",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 882,
      "playerName": "David de Gea",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 1914,
      "playerName": "M. Sanson",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 18747,
      "playerName": "R. Giles",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 50816,
      "playerName": "R. Laryea",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 83029,
      "playerName": "J. Bowler",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 138934,
      "playerName": "A. Pressley",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 140947,
      "playerName": "I. Kaboré",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 153434,
      "playerName": "W. Fish",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 162189,
      "playerName": "M. Bidstrup",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 197448,
      "playerName": "Yan Couto",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 278075,
      "playerName": "C. Cîrjan",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 278088,
      "playerName": "C. Rushworth",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 278128,
      "playerName": "J. Wilson-Esbrand",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 284062,
      "playerName": "K. Edwards",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 284446,
      "playerName": "F. Potts",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 284466,
      "playerName": "C. Patino",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 309507,
      "playerName": "B. Ibrahim",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 18751,
      "playerName": "Ivan Cavaleiro",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 27778,
      "playerName": "B. Bolla",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 138906,
      "playerName": "J. White",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 152980,
      "playerName": "R. Savage",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 162552,
      "playerName": "D. Scarlett",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 273758,
      "playerName": "I. Samuels",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 278086,
      "playerName": "I. Odutayo",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 284248,
      "playerName": "M. Frauendorf",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 284291,
      "playerName": "J. Turner-Cooke",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 284305,
      "playerName": "J. Miley",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 284471,
      "playerName": "S. Parkes",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 284559,
      "playerName": "A. Borto",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 291022,
      "playerName": "J. Keeley",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 298129,
      "playerName": "M. Boateng",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 318056,
      "playerName": "A. Murphy",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 327728,
      "playerName": "D. McCoy-Splatt",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 328104,
      "playerName": "Ben Parkinson",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 336599,
      "playerName": "B. Baker-Boaitey",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 359386,
      "playerName": "M. Godo",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 384981,
      "playerName": "S. Amissah",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 2276,
      "playerName": "J. Cumming",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 64167,
      "playerName": "G. Słonina",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 138777,
      "playerName": "F. Anjorin",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 162590,
      "playerName": "T. Morton",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 270507,
      "playerName": "C. Casadei",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 282130,
      "playerName": "L. Pye",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 284060,
      "playerName": "L. Laing",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 284382,
      "playerName": "D. Mee",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 284400,
      "playerName": "T. Collyer",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 284536,
      "playerName": "J. Knightbridge",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 288055,
      "playerName": "Ângelo",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 288112,
      "playerName": "W. Kambwala",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 291363,
      "playerName": "G. Earthy",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 303016,
      "playerName": "M. Oyedele",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 310186,
      "playerName": "C. Scanlon",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 328107,
      "playerName": "L. Koumas",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 330636,
      "playerName": "S. Aljofree",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 363974,
      "playerName": "Z. Marsh",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 378981,
      "playerName": "Elyh Harrison",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 404021,
      "playerName": "F. Marjoram",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 279,
      "playerName": "L. Mbe Soh",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 907,
      "playerName": "R. Lukaku",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 2952,
      "playerName": "M. Dräger",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 19866,
      "playerName": "J. Lowe",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 25416,
      "playerName": "W. Weghorst",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 144725,
      "playerName": "K. Simon-Swyer",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 162075,
      "playerName": "P. Maghoma",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 274550,
      "playerName": "H. Vale",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 278079,
      "playerName": "A. Ramsey",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 282133,
      "playerName": "J. Hugill",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 282136,
      "playerName": "N. Emeran",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 284241,
      "playerName": "Mateo Mejía",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 284493,
      "playerName": "T. Adaramola",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 284540,
      "playerName": "Mauro Bandeira",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 288107,
      "playerName": "C. McNeill",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 301295,
      "playerName": "K. Rodney",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 327602,
      "playerName": "D. Osong",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 329358,
      "playerName": "A. Bott",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 329362,
      "playerName": "J. Powell",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 349987,
      "playerName": "G. Kuol",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 1853,
      "playerName": "Bruno Jordão",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 18972,
      "playerName": "A. Knockaert",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 69257,
      "playerName": "J. Furlong",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 144732,
      "playerName": "T. Doyle",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 153261,
      "playerName": "N. Young-Coombes",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 162493,
      "playerName": "M. Craig",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 216770,
      "playerName": "I. Hansen-Aarøen",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 284186,
      "playerName": "S. McAllister",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 284212,
      "playerName": "D. Sassi",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 284363,
      "playerName": "R. Bennett",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 284390,
      "playerName": "J. Wright",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 284523,
      "playerName": "S. Swinkels",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 288279,
      "playerName": "Luizão",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 296121,
      "playerName": "J. Hinchy",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 334725,
      "playerName": "D. Sadi",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 382160,
      "playerName": "D. Adu-Adjei",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 382167,
      "playerName": "J. Wadham",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 382170,
      "playerName": "M. Kinsey-Wellings",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 382930,
      "playerName": "F. Okoh",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 390769,
      "playerName": "Michael Dacosta",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 3240,
      "playerName": "J. Gbamin",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 18899,
      "playerName": "I. Hayden",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 18996,
      "playerName": "H. Arter",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 19592,
      "playerName": "L. Freeman",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 19757,
      "playerName": "G. Rea",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 134428,
      "playerName": "B. Chrisene",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 138842,
      "playerName": "M. Azeez",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 138843,
      "playerName": "J. Hillson",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 144733,
      "playerName": "B. Knight",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 153420,
      "playerName": "G. Wickens",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 192351,
      "playerName": "T. Fornah",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 277716,
      "playerName": "A. Hackford",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 284439,
      "playerName": "L. Sousa",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 313236,
      "playerName": "E. Nwaneri",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 327738,
      "playerName": "L. De Fougerolles",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 331009,
      "playerName": "C. Sayers",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 335813,
      "playerName": "A. Francis-Clarke",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 347066,
      "playerName": "E. Pollock",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 365988,
      "playerName": "A. Harris",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 382166,
      "playerName": "C. Plain",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 147,
      "playerName": "Philippe Coutinho",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 292,
      "playerName": "J. Henderson",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 548,
      "playerName": "H. Ziyech",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 641,
      "playerName": "O. Zinchenko",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 2806,
      "playerName": "F. Schär",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 2936,
      "playerName": "J. Tarkowski",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 5996,
      "playerName": "E. Fernández",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 19115,
      "playerName": "B. Peacock-Farrell",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 19221,
      "playerName": "H. Wilson",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 19345,
      "playerName": "M. Bech",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 50892,
      "playerName": "D. Pereira",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 135334,
      "playerName": "S. Bueno",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 179651,
      "playerName": "J. Taylor",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 231062,
      "playerName": "A. Okonkwo",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 284262,
      "playerName": "H. Griffiths",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 284554,
      "playerName": "O. Goodman",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 288106,
      "playerName": "Marc Jurado",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 344707,
      "playerName": "C. Marshall",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 392636,
      "playerName": "S. Sachdev",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 400340,
      "playerName": "L. Marsh",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 290,
      "playerName": "V. van Dijk",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 567,
      "playerName": "Rúben Dias",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 766,
      "playerName": "R. Olsen",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 1125,
      "playerName": "R. Christie",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 1566,
      "playerName": "Emerson Royal",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 1934,
      "playerName": "S. Berge",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 2061,
      "playerName": "Bryan Gil",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 2790,
      "playerName": "J. Guðmunds­son",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 13489,
      "playerName": "J. Durán",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 14206,
      "playerName": "B. Aguilera",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 19191,
      "playerName": "J.  McGinn",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 37145,
      "playerName": "T. Malacia",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 47380,
      "playerName": "Marc Cucurella",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 158698,
      "playerName": "J. Quansah",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 169295,
      "playerName": "K. Hein",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 199310,
      "playerName": "A. Ben Slimane",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 237129,
      "playerName": "P. Sarr",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 301281,
      "playerName": "A. Phillips",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 315237,
      "playerName": "W. Osula",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 328126,
      "playerName": "J. Amissah",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 855,
      "playerName": "João Cancelo",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 897,
      "playerName": "M. Greenwood",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 1117,
      "playerName": "K. Tierney",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 2273,
      "playerName": "Kepa",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 2279,
      "playerName": "E. Ampadu",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 18592,
      "playerName": "I. Ndiaye",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 18806,
      "playerName": "W. Hughes",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 18835,
      "playerName": "Guaita",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 18843,
      "playerName": "J. Schlupp",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 19043,
      "playerName": "T. Kongolo",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 19352,
      "playerName": "Sergi Canós",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 19586,
      "playerName": "E. Eze",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 19617,
      "playerName": "M. Olise",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 20386,
      "playerName": "M. Macey",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 30544,
      "playerName": "G. Scamacca",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 67971,
      "playerName": "M. Guéhi",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 146325,
      "playerName": "A. Pepple",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 284300,
      "playerName": "Álvaro Fernández",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 288699,
      "playerName": "M. Perrone",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 311520,
      "playerName": "Marquinhos",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 723,
      "playerName": "Joelinton",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 1440,
      "playerName": "R. Holding",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 2490,
      "playerName": "J. Lerma",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 2729,
      "playerName": "J. Andersen",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 2864,
      "playerName": "A. Isak",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 2939,
      "playerName": "C. Wilson",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 10135,
      "playerName": "Bruno Guimarães",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 18844,
      "playerName": "J. Tomkins",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 18847,
      "playerName": "J. Ward",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 18862,
      "playerName": "N. Clyne",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 19088,
      "playerName": "D. Henderson",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 19143,
      "playerName": "S. Johnstone",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 19684,
      "playerName": "R. Matthews",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 126949,
      "playerName": "C. Richards",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 127605,
      "playerName": "N. Ferguson",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 138787,
      "playerName": "A. Gordon",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 182201,
      "playerName": "T. Mitchell",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 284549,
      "playerName": "J. Whitworth",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 308867,
      "playerName": "S. Grehan",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 328105,
      "playerName": "L. Miley",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 169,
      "playerName": "K. Trippier",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 1463,
      "playerName": "J. Willock",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 2507,
      "playerName": "M. Almirón",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 2855,
      "playerName": "E. Krafth",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 18778,
      "playerName": "H. Barnes",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 18892,
      "playerName": "P. Dummett",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 18894,
      "playerName": "J. Lascelles",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 18896,
      "playerName": "Javier Manquillo",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 18901,
      "playerName": "S. Longstaff",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 18903,
      "playerName": "M. Ritchie",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 18911,
      "playerName": "N. Pope",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 18941,
      "playerName": "M. Targett",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 18961,
      "playerName": "D. Burn",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 19163,
      "playerName": "J. Murphy",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 31146,
      "playerName": "S. Tonali",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 38734,
      "playerName": "S. Botman",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 44912,
      "playerName": "M. Gillespie",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 138908,
      "playerName": "E. Anderson",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 158694,
      "playerName": "T. Livramento",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 284492,
      "playerName": "L. Hall",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 261,
      "playerName": "T. Kehrer",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 665,
      "playerName": "M. Cornet",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 1243,
      "playerName": "T. Souček",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 1646,
      "playerName": "Lucas Paquetá",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 1697,
      "playerName": "Pablo Fornals",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 1972,
      "playerName": "L. Karius",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 2284,
      "playerName": "Emerson",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 2869,
      "playerName": "E. Álvarez",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 2938,
      "playerName": "J. Ward-Prowse",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 15911,
      "playerName": "M. Kudus",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 18819,
      "playerName": "M. Antonio",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 18820,
      "playerName": "C. Coventry",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 18886,
      "playerName": "M. Dúbravka",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 18955,
      "playerName": "D. Ings",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 19361,
      "playerName": "S. Benrahma",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 19428,
      "playerName": "J. Bowen",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 21694,
      "playerName": "N. Aguerd",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 154807,
      "playerName": "D. Chesters",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 284409,
      "playerName": "D. Mubama",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 288116,
      "playerName": "K. Casey",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 253,
      "playerName": "A. Areola",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 1231,
      "playerName": "V. Coufal",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 1445,
      "playerName": "K. Mavropanos",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 1469,
      "playerName": "D. Welbeck",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 2726,
      "playerName": "K. Zouma",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 2997,
      "playerName": "Ł. Fabiański",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 10329,
      "playerName": "João Pedro",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 18813,
      "playerName": "A. Cresswell",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 18817,
      "playerName": "A. Ogbonna",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 18823,
      "playerName": "B. Johnson",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 40911,
      "playerName": "J. Moder",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 70747,
      "playerName": "J. Enciso",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 106835,
      "playerName": "K. Mitoma",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 129643,
      "playerName": "E. Ferguson",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 135775,
      "playerName": "Ansu Fati",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 144709,
      "playerName": "J. Anang",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 301771,
      "playerName": "S. Adingra",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 305730,
      "playerName": "J. Hinshelwood",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 311334,
      "playerName": "F. Buonanotte",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 356041,
      "playerName": "C. Baleba",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 14,
      "playerName": "M. Dahoud",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 277,
      "playerName": "M. Diaby",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 295,
      "playerName": "A. Lallana",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 296,
      "playerName": "J. Milner",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 537,
      "playerName": "J. Veltman",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 7600,
      "playerName": "Igor Julio",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 18960,
      "playerName": "J. Steele",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 18963,
      "playerName": "L. Dunk",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 18970,
      "playerName": "P. Groß",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 18973,
      "playerName": "S. March",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 19265,
      "playerName": "A. Webster",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 19366,
      "playerName": "O. Watkins",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 38695,
      "playerName": "J. van Hecke",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 46731,
      "playerName": "P. Estupiñán",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 129058,
      "playerName": "B. Verbruggen",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 130423,
      "playerName": "B. Gilmour",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 138815,
      "playerName": "T. Lamptey",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 167663,
      "playerName": "T. McGill",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 308843,
      "playerName": "T. Patterson",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 312260,
      "playerName": "K. Young",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 133,
      "playerName": "C. Lenglet",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 671,
      "playerName": "B. Traoré",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 786,
      "playerName": "N. Zaniolo",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 983,
      "playerName": "L. Bailey",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 1904,
      "playerName": "B. Kamara",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 2922,
      "playerName": "L. Dendoncker",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 2926,
      "playerName": "Y. Tielemans",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 19016,
      "playerName": "C. Chambers",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 19071,
      "playerName": "E. Buendía",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 19177,
      "playerName": "K. Hause",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 19179,
      "playerName": "T. Mings",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 19192,
      "playerName": "J. Ramsey",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 19354,
      "playerName": "E. Konsa",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 46815,
      "playerName": "Pau Torres",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 47522,
      "playerName": "Douglas Luiz",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 47547,
      "playerName": "Álex Moreno",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 284500,
      "playerName": "T. Iroegbunam",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 284556,
      "playerName": "T. O&apos;Reilly",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 312118,
      "playerName": "J. Feeney",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 329347,
      "playerName": "O. Kellyman",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 247,
      "playerName": "C. Gakpo",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 293,
      "playerName": "C. Jones",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 306,
      "playerName": "Mohamed Salah",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 542,
      "playerName": "R. Gravenberch",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 1096,
      "playerName": "D. Szoboszlai",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 2489,
      "playerName": "L. Díaz",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 2678,
      "playerName": "Diogo Jota",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 2724,
      "playerName": "L. Digne",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 6716,
      "playerName": "A. Mac Allister",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 19035,
      "playerName": "H. Elliott",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 19298,
      "playerName": "M. Cash",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 19599,
      "playerName": "E. Martínez",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 21090,
      "playerName": "Diego Carlos",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 51617,
      "playerName": "D. Núñez",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 138937,
      "playerName": "F. Marschall",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 180317,
      "playerName": "C. Bradley",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 287109,
      "playerName": "J. McConnell",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 310187,
      "playerName": "Stefan Bajčetić",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 334729,
      "playerName": "B. Clark",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 343576,
      "playerName": "B. Doak",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 280,
      "playerName": "Alisson Becker",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 281,
      "playerName": "C. Kelleher",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 283,
      "playerName": "T. Alexander-Arnold",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 284,
      "playerName": "J. Gomez",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 286,
      "playerName": "J. Matip",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 289,
      "playerName": "A. Robertson",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 507,
      "playerName": "Thiago Alcântara",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 1100,
      "playerName": "E. Haaland",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 1145,
      "playerName": "I. Konaté",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 1422,
      "playerName": "J. Doku",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 1600,
      "playerName": "K. Tsimikas",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 6009,
      "playerName": "J. Álvarez",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 8500,
      "playerName": "W. Endo",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 18812,
      "playerName": "Adrián",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 162687,
      "playerName": "V. Jaroš",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 180866,
      "playerName": "Marcelo Pitaluga",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 278133,
      "playerName": "O. Bobb",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 284231,
      "playerName": "M. Hamilton",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 284366,
      "playerName": "L. Chambers",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 287111,
      "playerName": "F. Mrozek",
      "teamName": "Liverpool",
      "teamId": 40,
      "teamLogo": "https://media-4.api-sports.io/football/teams/40.png"
    },
    {
      "playerId": 5,
      "playerName": "M. Akanji",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 23,
      "playerName": "Sergio Gómez",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 44,
      "playerName": "Rodri",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 617,
      "playerName": "Ederson",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 626,
      "playerName": "J. Stones",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 627,
      "playerName": "K. Walker",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 629,
      "playerName": "K. De Bruyne",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 631,
      "playerName": "P. Foden",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 636,
      "playerName": "Bernardo Silva",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 2291,
      "playerName": "M. Kovačić",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 18861,
      "playerName": "N. Aké",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 19130,
      "playerName": "K. Phillips",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 19187,
      "playerName": "J. Grealish",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 19197,
      "playerName": "S. Carson",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 25004,
      "playerName": "S. Ortega",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 41621,
      "playerName": "Matheus Nunes",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 50828,
      "playerName": "Z. Steffen",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 129033,
      "playerName": "J. Gvardiol",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 284230,
      "playerName": "R. Lewis",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 284571,
      "playerName": "C. Sagoe",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 49,
      "playerName": "T. Partey",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 643,
      "playerName": "Gabriel Jesus",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 727,
      "playerName": "R. Nelson",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 978,
      "playerName": "K. Havertz",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 1161,
      "playerName": "E. Smith Rowe",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 1452,
      "playerName": "Mohamed Elneny",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 1460,
      "playerName": "B. Saka",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 1468,
      "playerName": "E. Nketiah",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 1946,
      "playerName": "L. Trossard",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 2289,
      "playerName": "Jorginho",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 2597,
      "playerName": "T. Tomiyasu",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 2937,
      "playerName": "D. Rice",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 37127,
      "playerName": "M. Ødegaard",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 38746,
      "playerName": "J. Timber",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 41725,
      "playerName": "Fábio Vieira",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 61431,
      "playerName": "J. Kiwior",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 127769,
      "playerName": "Gabriel Martinelli",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 284502,
      "playerName": "J. Lannin-Sweet",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 309501,
      "playerName": "A. Cozier-Duberry",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 309505,
      "playerName": "R. Walters",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 186,
      "playerName": "Son Heung-Min",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 190,
      "playerName": "Cédric Soares",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 207,
      "playerName": "I. Perišić",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 697,
      "playerName": "M. Solomon",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 863,
      "playerName": "R. Bentancur",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 1578,
      "playerName": "G. Lo Celso",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 2413,
      "playerName": "Richarlison",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 18784,
      "playerName": "J. Maddison",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 18968,
      "playerName": "Y. Bissouma",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 19032,
      "playerName": "R. Sessegnon",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 19465,
      "playerName": "David Raya",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 19959,
      "playerName": "B. White",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 20355,
      "playerName": "A. Ramsdale",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 22090,
      "playerName": "W. Saliba",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 22224,
      "playerName": "Gabriel Magalhães",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 30435,
      "playerName": "D. Kulusevski",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 129711,
      "playerName": "B. Johnson",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 204039,
      "playerName": "D. Udogie",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 293163,
      "playerName": "J. Donley",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 311344,
      "playerName": "A. Véliz",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 159,
      "playerName": "H. Lloris",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 161,
      "playerName": "A. Whiteman",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 164,
      "playerName": "B. Davies",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 175,
      "playerName": "E. Dier",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 180,
      "playerName": "O. Skipp",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 2735,
      "playerName": "P. Højbjerg",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 3339,
      "playerName": "C. Doucouré",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 18885,
      "playerName": "K. Darlow",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 18932,
      "playerName": "F. Forster",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 19235,
      "playerName": "D. Spence",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 19321,
      "playerName": "J. Rodon",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 30776,
      "playerName": "C. Romero",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 31354,
      "playerName": "G. Vicario",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 47519,
      "playerName": "Pedro Porro",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 152418,
      "playerName": "N. Ahamada",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 152849,
      "playerName": "M. van de Ven",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 156428,
      "playerName": "B. Austin",
      "teamName": "Tottenham",
      "teamId": 47,
      "teamLogo": "https://media-4.api-sports.io/football/teams/47.png"
    },
    {
      "playerId": 196855,
      "playerName": "J. Anthony",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 284551,
      "playerName": "J. Wells-Morrison",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 379626,
      "playerName": "C. Pettit",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 303,
      "playerName": "R. Brewster",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 2028,
      "playerName": "I. Coulibaly",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 10169,
      "playerName": "Vinicius Souza",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 17407,
      "playerName": "F. Seriki",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 19102,
      "playerName": "J. Fleck",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 19105,
      "playerName": "O. Norwood",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 19302,
      "playerName": "B. Osborn",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 19337,
      "playerName": "O. McBurnie",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 20319,
      "playerName": "N. Bishop",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 36929,
      "playerName": "G. Hamer",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 137302,
      "playerName": "C. Archer",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 138806,
      "playerName": "B. Williams",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 158697,
      "playerName": "J. McAtee",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 215874,
      "playerName": "T. Cannon",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 284428,
      "playerName": "O. Hutchinson",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 296458,
      "playerName": "D. Jebbison",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 304161,
      "playerName": "B. Traoré",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 331563,
      "playerName": "M. Burstow",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 379150,
      "playerName": "A. Brooks",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 395209,
      "playerName": "J. Buyabu",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 792,
      "playerName": "J. Kluivert",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 1736,
      "playerName": "W. Foderingham",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 1949,
      "playerName": "A. Ahmedhodžić",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 2734,
      "playerName": "P. Billing",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 18331,
      "playerName": "R. Norrington-Davies",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 18883,
      "playerName": "D. Solanke",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 19090,
      "playerName": "G. Baldock",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 19091,
      "playerName": "C. Basham",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 19093,
      "playerName": "J. Egan",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 19201,
      "playerName": "J. Bogle",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 19281,
      "playerName": "A. Semenyo",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 19294,
      "playerName": "J. Robinson",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 19779,
      "playerName": "A. Davies",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 19804,
      "playerName": "K. Moore",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 37161,
      "playerName": "L. Sinisterra",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 44809,
      "playerName": "M. Lowe",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 50737,
      "playerName": "A. Trusty",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 138828,
      "playerName": "Y. Larouci",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 152969,
      "playerName": "L. Thomas",
      "teamName": "Sheffield Utd",
      "teamId": 62,
      "teamLogo": "https://media-4.api-sports.io/football/teams/62.png"
    },
    {
      "playerId": 284797,
      "playerName": "D. Ouattara",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 1150,
      "playerName": "T. Adams",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 6610,
      "playerName": "M. Senesi",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 18815,
      "playerName": "R. Fredericks",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 18866,
      "playerName": "C. Mepham",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 18869,
      "playerName": "A. Smith",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 18870,
      "playerName": "D. Brooks",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 18872,
      "playerName": "L. Cook",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 19070,
      "playerName": "M. Aarons",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 19229,
      "playerName": "D. Randolph",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 19245,
      "playerName": "M. Tavernier",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 19263,
      "playerName": "L. Kelly",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 19356,
      "playerName": "E. Marcondes",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 19482,
      "playerName": "J. Rothwell",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 30765,
      "playerName": "A. Radu",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 31057,
      "playerName": "H. Traorè",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 130416,
      "playerName": "G. Kilkenny",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 161671,
      "playerName": "I. Zabarnyi",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 206254,
      "playerName": "M. Kerkez",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 290962,
      "playerName": "B. Greenwood",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 304853,
      "playerName": "A. Scott",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 22,
      "playerName": "J. Bruun Larsen",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 110,
      "playerName": "H. Massengo",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 912,
      "playerName": "Neto",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 1411,
      "playerName": "H. Delcroix",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 8589,
      "playerName": "B. Manuel",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 18922,
      "playerName": "J. Cork",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 18948,
      "playerName": "N. Redmond",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 18957,
      "playerName": "M. Obafemi",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 19169,
      "playerName": "J. Rodríguez",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 19268,
      "playerName": "J. Brownhill",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 19827,
      "playerName": "J. Cullen",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 37381,
      "playerName": "M. Trésor",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 98936,
      "playerName": "L. Foster",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 105789,
      "playerName": "D. Churlinov",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 123469,
      "playerName": "Z. Amdouni",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 129169,
      "playerName": "A. Zaroury",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 323449,
      "playerName": "A. Al Dakhil",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 336564,
      "playerName": "W. Odobert",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 359603,
      "playerName": "L. Koleosho",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 361388,
      "playerName": "E. Agyei",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 616,
      "playerName": "A. Murić",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 1427,
      "playerName": "A. Sambi Lokonga",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 2549,
      "playerName": "L. Vigouroux",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 8661,
      "playerName": "Vitinho",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 17597,
      "playerName": "D. O&apos;Shea",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 17641,
      "playerName": "E. Adebayo",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 18918,
      "playerName": "C. Taylor",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 19083,
      "playerName": "C. Morris",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 19331,
      "playerName": "C. Roberts",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 19365,
      "playerName": "C. Ogbene",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 19802,
      "playerName": "J. Brown",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 19808,
      "playerName": "C. Woodrow",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 19829,
      "playerName": "A. Doughty",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 25628,
      "playerName": "J. Beyer",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 47903,
      "playerName": "H. Ekdal",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 162489,
      "playerName": "J. Trafford",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 162528,
      "playerName": "D. Franchi",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 181827,
      "playerName": "C. Egan-Riley",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 403065,
      "playerName": "J. Luker",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 441198,
      "playerName": "J. Burger",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 76,
      "playerName": "M. Nakamba",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 906,
      "playerName": "T. Chong",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 2287,
      "playerName": "R. Barkley",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 8471,
      "playerName": "T. Kaminski",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 15632,
      "playerName": "M. Andersen",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 19061,
      "playerName": "T. Krul",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 19408,
      "playerName": "R. Burke",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 19466,
      "playerName": "A. Bell",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 19750,
      "playerName": "J. Shea",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 19756,
      "playerName": "D. Potts",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 19759,
      "playerName": "L. Berry",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 19767,
      "playerName": "P. Mpanzu",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 20189,
      "playerName": "J. Clark",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 20203,
      "playerName": "T. Lockyer",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 20206,
      "playerName": "G. Osho",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 125743,
      "playerName": "Beto",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 153425,
      "playerName": "L. Dobbin",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 153429,
      "playerName": "T. Mengi",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 330412,
      "playerName": "Youssef Chermiti",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 406507,
      "playerName": "J. Johnson",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 83,
      "playerName": "A. Danjuma",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 172,
      "playerName": "D. Alli",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 894,
      "playerName": "A. Young",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 895,
      "playerName": "J. Garner",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 2165,
      "playerName": "V. Mykolenko",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 2934,
      "playerName": "M. Keane",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 2990,
      "playerName": "I. Gueye",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 17661,
      "playerName": "J. Branthwaite",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 18758,
      "playerName": "S. Coleman",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 18765,
      "playerName": "André Gomes",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 18766,
      "playerName": "D. Calvert-Lewin",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 18805,
      "playerName": "A. Doucouré",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 18929,
      "playerName": "D. McNeil",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 19073,
      "playerName": "B. Godfrey",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 19128,
      "playerName": "J. Harrison",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 20069,
      "playerName": "B. Crellin",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 138417,
      "playerName": "N. Patterson",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 162714,
      "playerName": "A. Onana",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 167657,
      "playerName": "T. Onyango",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 298099,
      "playerName": "M. Hunt",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 2699,
      "playerName": "S. Ghoddos",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 2932,
      "playerName": "J. Pickford",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 15799,
      "playerName": "F. Onyeka",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 15908,
      "playerName": "M. Damsgaard",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 18755,
      "playerName": "João Virgínia",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 19362,
      "playerName": "J. Dasilva",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 19364,
      "playerName": "N. Maupay",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 19974,
      "playerName": "I. Toney",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 20110,
      "playerName": "S. Baptiste",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 20224,
      "playerName": "A. Lonergan",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 20589,
      "playerName": "B. Mbeumo",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 20649,
      "playerName": "Y. Wissa",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 25073,
      "playerName": "V. Janelt",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 47438,
      "playerName": "M. Jensen",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 106725,
      "playerName": "K. Lewis-Potter",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 153422,
      "playerName": "E. Brierley",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 178077,
      "playerName": "K. Schade",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 180308,
      "playerName": "M. Peart-Harris",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 263538,
      "playerName": "Y. Yarmolyuk",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 284474,
      "playerName": "M. Olakigbe",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 1119,
      "playerName": "K. Ajer",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 1165,
      "playerName": "Matheus Cunha",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 1835,
      "playerName": "T. Strakosha",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 2731,
      "playerName": "M. Jørgensen",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 7722,
      "playerName": "S. Kalajdzic",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 15745,
      "playerName": "M. Roerslev",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 17772,
      "playerName": "C. Goode",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 18917,
      "playerName": "B. Mee",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 19340,
      "playerName": "E. Balcombe",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 19346,
      "playerName": "R. Henry",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 19495,
      "playerName": "N. Collins",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 19789,
      "playerName": "E. Pinnock",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 26232,
      "playerName": "M. Flekken",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 30407,
      "playerName": "C. Nørgaard",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 44871,
      "playerName": "A. Hickey",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 281975,
      "playerName": "V. Adedokun",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 303019,
      "playerName": "N. Fraser",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 356237,
      "playerName": "Kim Ji-Soo",
      "teamName": "Brentford",
      "teamId": 55,
      "teamLogo": "https://media-4.api-sports.io/football/teams/55.png"
    },
    {
      "playerId": 385726,
      "playerName": "E. González",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 436879,
      "playerName": "E. Ballard-Matthews",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 130,
      "playerName": "Nélson Semedo",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 1590,
      "playerName": "José Sá",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 1864,
      "playerName": "Pedro Neto",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 2056,
      "playerName": "Pablo Sarabia",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 18740,
      "playerName": "Jonny",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 18742,
      "playerName": "M. Doherty",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 18744,
      "playerName": "M. Kilman",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 18947,
      "playerName": "M. Lemina",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 19147,
      "playerName": "C. Dawson",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 19341,
      "playerName": "D. Bentley",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 20665,
      "playerName": "J. Bellegarde",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 21138,
      "playerName": "R. Aït-Nouri",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 24888,
      "playerName": "Hwang Hee-Chan",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 41606,
      "playerName": "Toti Gomes",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 82855,
      "playerName": "T. King",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 129791,
      "playerName": "Fábio Silva",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 157912,
      "playerName": "B. Traoré",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 195103,
      "playerName": "João Gomes",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 204033,
      "playerName": "J. Hodge",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 280687,
      "playerName": "Hugo Bueno",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 305,
      "playerName": "D. Origi",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 2298,
      "playerName": "C. Hudson-Odoi",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 2468,
      "playerName": "G. Montiel",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 2771,
      "playerName": "O. Aina",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 2991,
      "playerName": "C. Kouyaté",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 6056,
      "playerName": "N. Domínguez",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 8598,
      "playerName": "T. Awoniyi",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 18739,
      "playerName": "W. Boly",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 18746,
      "playerName": "M. Gibbs-White",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 18931,
      "playerName": "C. Wood",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 19305,
      "playerName": "R. Yates",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 22149,
      "playerName": "I. Sangaré",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 24882,
      "playerName": "O. Mangala",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 25916,
      "playerName": "M. Niakhaté",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 44811,
      "playerName": "S. McKenna",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 147835,
      "playerName": "A. Omobamidele",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 153430,
      "playerName": "A. Elanga",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 275170,
      "playerName": "Danilo",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 305834,
      "playerName": "Andrey Santos",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 363695,
      "playerName": "Murillo",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 62,
      "playerName": "E. Horvath",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 104,
      "playerName": "Carlos Vinícius",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 163,
      "playerName": "S. Aurier",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 371,
      "playerName": "Felipe",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 557,
      "playerName": "O. Vlachodimos",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 1455,
      "playerName": "A. Iwobi",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 1746,
      "playerName": "J. Worrall",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 2294,
      "playerName": "Willian",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 2887,
      "playerName": "R. Jiménez",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 17365,
      "playerName": "H. Toffolo",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 18836,
      "playerName": "W. Hennessey",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 19004,
      "playerName": "B. De Cordova-Reid",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 41104,
      "playerName": "João Palhinha",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 41577,
      "playerName": "Nuno Tavares",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 50999,
      "playerName": "M. Turner",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 138780,
      "playerName": "N. Williams",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 192349,
      "playerName": "G. Shelvey",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 195106,
      "playerName": "Rodrigo Muniz",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 284470,
      "playerName": "M. Dibley-Dias",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 284475,
      "playerName": "L. Harris",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 105,
      "playerName": "F. Ballo-Touré",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 657,
      "playerName": "K. Tete",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 899,
      "playerName": "Andreas Pereira",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 1438,
      "playerName": "B. Leno",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 2823,
      "playerName": "S. Lukić",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 2920,
      "playerName": "T. Castagne",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 18814,
      "playerName": "I. Diop",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 19023,
      "playerName": "T. Ream",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 19025,
      "playerName": "T. Cairney",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 19145,
      "playerName": "T. Adarabioyo",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 19312,
      "playerName": "S. Benda",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 19480,
      "playerName": "H. Reed",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 19549,
      "playerName": "A. Robinson",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 19657,
      "playerName": "M. Rodák",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 129707,
      "playerName": "T. Francois",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 138822,
      "playerName": "A. Broja",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 152967,
      "playerName": "C. Bassey",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 286774,
      "playerName": "R. Stutter",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 289618,
      "playerName": "A. Matos",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 415001,
      "playerName": "Deivid Washington",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 269,
      "playerName": "C. Nkunku",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 645,
      "playerName": "R. Sterling",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 19545,
      "playerName": "R. James",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 22094,
      "playerName": "W. Fofana",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 22166,
      "playerName": "M. Sarr",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 63577,
      "playerName": "M. Mudryk",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 67972,
      "playerName": "C. Gallagher",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 116117,
      "playerName": "M. Caicedo",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 136723,
      "playerName": "N. Madueke",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 138816,
      "playerName": "I. Maatsen",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 138935,
      "playerName": "C. Chukwuemeka",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 152953,
      "playerName": "L. Colwill",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 152982,
      "playerName": "C. Palmer",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 161907,
      "playerName": "M. Gusto",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 181796,
      "playerName": "J. Brooking",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 270508,
      "playerName": "L. Ugochukwu",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 282125,
      "playerName": "R. Lavia",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 283058,
      "playerName": "N. Jackson",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 284406,
      "playerName": "A. Gilchrist",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 328093,
      "playerName": "I. Samuels-Smith",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 18,
      "playerName": "J. Sancho",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 95,
      "playerName": "B. Badiashile",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 259,
      "playerName": "Thiago Silva",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 908,
      "playerName": "A. Martial",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 909,
      "playerName": "M. Rashford",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 2933,
      "playerName": "B. Chilwell",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 9971,
      "playerName": "Antony",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 18959,
      "playerName": "Robert Sánchez",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 19012,
      "playerName": "M. Bettinelli",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 19720,
      "playerName": "T. Chalobah",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 21998,
      "playerName": "A. Disasi",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 118307,
      "playerName": "Đ. Petrović",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 152955,
      "playerName": "L. Bergström",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 157997,
      "playerName": "A. Diallo",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 163054,
      "playerName": "S. Shoretire",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 180560,
      "playerName": "H. Mejbri",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 284242,
      "playerName": "O. Forson",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 284324,
      "playerName": "A. Garnacho",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 288006,
      "playerName": "R. Højlund",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 303667,
      "playerName": "E. Beach",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 74,
      "playerName": "S. Amrabat",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 174,
      "playerName": "C. Eriksen",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 547,
      "playerName": "D. van de Beek",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 739,
      "playerName": "Sergio Reguilón",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 742,
      "playerName": "R. Varane",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 747,
      "playerName": "Casemiro",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 886,
      "playerName": "Diogo Dalot",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 889,
      "playerName": "V. Lindelöf",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 891,
      "playerName": "L. Shaw",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 903,
      "playerName": "S. McTominay",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 1485,
      "playerName": "Bruno Fernandes",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 2467,
      "playerName": "Lisandro Martínez",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 2935,
      "playerName": "H. Maguire",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 18772,
      "playerName": "J. Evans",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 18846,
      "playerName": "A. Wan-Bissaka",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 19220,
      "playerName": "M. Mount",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 70078,
      "playerName": "F. Pellistri",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 284322,
      "playerName": "K. Mainoo",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 284361,
      "playerName": "R. Vítek",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 303010,
      "playerName": "D. Gore",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 526,
      "playerName": "A. Onana",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 1135,
      "playerName": "O. Édouard",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 2931,
      "playerName": "T. Heaton",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 3428,
      "playerName": "J. Ayew",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 18853,
      "playerName": "J. Riedewald",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 18860,
      "playerName": "M. Travers",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 18863,
      "playerName": "S. Cook",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 19076,
      "playerName": "J. Lewis",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 20093,
      "playerName": "J. Hill",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 25927,
      "playerName": "J. Mateta",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 50132,
      "playerName": "A. Bayındır",
      "teamName": "Manchester United",
      "teamId": 33,
      "teamLogo": "https://media-4.api-sports.io/football/teams/33.png"
    },
    {
      "playerId": 69539,
      "playerName": "L. McNally",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 137220,
      "playerName": "A. Moran",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 149564,
      "playerName": "L. Cundle",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 284449,
      "playerName": "J. Rak-Sakyi",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 293162,
      "playerName": "J. Raymond",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 304319,
      "playerName": "A. Ola-Adebomi",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 304320,
      "playerName": "D. Ozoh",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 311157,
      "playerName": "Matheus França",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 328808,
      "playerName": "M. Ebiowei",
      "teamName": "Crystal Palace",
      "teamId": 52,
      "teamLogo": "https://media-4.api-sports.io/football/teams/52.png"
    },
    {
      "playerId": 2784,
      "playerName": "R. Rúnarsson",
      "teamName": "Arsenal",
      "teamId": 42,
      "teamLogo": "https://media-4.api-sports.io/football/teams/42.png"
    },
    {
      "playerId": 2910,
      "playerName": "Hwang Ui-Jo",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 18873,
      "playerName": "R. Fraser",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 19150,
      "playerName": "M. Holgate",
      "teamName": "Everton",
      "teamId": 45,
      "teamLogo": "https://media-4.api-sports.io/football/teams/45.png"
    },
    {
      "playerId": 19173,
      "playerName": "M. Šarkić",
      "teamName": "Wolves",
      "teamId": 39,
      "teamLogo": "https://media-4.api-sports.io/football/teams/39.png"
    },
    {
      "playerId": 19733,
      "playerName": "F. Downes",
      "teamName": "West Ham",
      "teamId": 48,
      "teamLogo": "https://media-4.api-sports.io/football/teams/48.png"
    },
    {
      "playerId": 19772,
      "playerName": "A. Connolly",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 19964,
      "playerName": "S. Dembélé",
      "teamName": "Bournemouth",
      "teamId": 35,
      "teamLogo": "https://media-4.api-sports.io/football/teams/35.png"
    },
    {
      "playerId": 20503,
      "playerName": "L. O&apos;Brien",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 44922,
      "playerName": "A. Campbell",
      "teamName": "Luton",
      "teamId": 1359,
      "teamLogo": "https://media-4.api-sports.io/football/teams/1359.png"
    },
    {
      "playerId": 69403,
      "playerName": "S. Twine",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 84088,
      "playerName": "J. Panzo",
      "teamName": "Nottingham Forest",
      "teamId": 65,
      "teamLogo": "https://media-4.api-sports.io/football/teams/65.png"
    },
    {
      "playerId": 138931,
      "playerName": "J. Philogene",
      "teamName": "Aston Villa",
      "teamId": 66,
      "teamLogo": "https://media-4.api-sports.io/football/teams/66.png"
    },
    {
      "playerId": 144729,
      "playerName": "T. Harwood-Bellis",
      "teamName": "Manchester City",
      "teamId": 50,
      "teamLogo": "https://media-4.api-sports.io/football/teams/50.png"
    },
    {
      "playerId": 171058,
      "playerName": "H. Ashby",
      "teamName": "Newcastle",
      "teamId": 34,
      "teamLogo": "https://media-4.api-sports.io/football/teams/34.png"
    },
    {
      "playerId": 181797,
      "playerName": "B. Humphreys",
      "teamName": "Chelsea",
      "teamId": 49,
      "teamLogo": "https://media-4.api-sports.io/football/teams/49.png"
    },
    {
      "playerId": 191971,
      "playerName": "J. Stansfield",
      "teamName": "Fulham",
      "teamId": 36,
      "teamLogo": "https://media-4.api-sports.io/football/teams/36.png"
    },
    {
      "playerId": 202086,
      "playerName": "J. Sarmiento",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    },
    {
      "playerId": 264437,
      "playerName": "B. Thomas",
      "teamName": "Burnley",
      "teamId": 44,
      "teamLogo": "https://media-4.api-sports.io/football/teams/44.png"
    },
    {
      "playerId": 265820,
      "playerName": "Y. Ayari",
      "teamName": "Brighton",
      "teamId": 51,
      "teamLogo": "https://media-4.api-sports.io/football/teams/51.png"
    }
  ]



module.exports = playerInfo;