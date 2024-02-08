const fetchHighlightsFromYoutube = require("../../fetch/youtube_highlight/premier_league")
const oneMinute = 1000 * 60;

async function fetchHighlights() {


    await fetchHighlightsFromYoutube("PLKj1QUtwqLN_xhwiUekBYfx4sYVNzRtQO", 140)
  
    await fetchHighlightsFromYoutube("PLFTjYT0jsEKwuqv5UVaErB3RDUI-XI-9C", 135)
    await fetchHighlightsFromYoutube("PLcj4z4KsbIoVPGtu3C-dRs4Ry-2pSWgAl", 253)
  
    await fetchHighlightsFromYoutube("PL3uJGozO1imf_dHCPebi_o8asEMnadkUN", 78)
  
    await fetchHighlightsFromYoutube("PLvnfVnc10KYhswTH08Lz1k2-ehpIqmP75", 45)
  
    await fetchHighlightsFromYoutube('PLyeZvgLTmwr5kNa1CFO-eJ7Q6sgR1I_t7', 46)
  
    await fetchHighlightsFromYoutube("PL6SufeKmBK0E-JC_2ONuJlxp87J3aTvAu", 135)
  
    await fetchHighlightsFromYoutube("PLHKIZtgW3StyLS_4vbWko-4qKiBZ0hFNp", 203)
  
    await fetchHighlightsFromYoutube("PL79m9Jm7_jmDfSTbNR28HDvm6XlnboAXu", 20)
  
    await fetchHighlightsFromYoutube("PL79m9Jm7_jmBoG6Zz1nj8tO8uXR8FBB7R", 12)
  
  
  
    await fetchHighlightsFromYoutube("PLS9YRt7PtOaRmxK_tPJ2h4uNu0LZ8BCqd", 61)
    await fetchHighlightsFromYoutube("PLgKzKaglVK7Djzb574jtbuwCwN4McHsfy", 135)
    await fetchHighlightsFromYoutube("PLQ_voP4Q3cffZYz6sVkSigiLfAZI_5vba", 39)
    await fetchHighlightsFromYoutube("PLvuwbYTkUzHe7rC3ns2q5kZg5yYmQaZ5O", 39)
    await fetchHighlightsFromYoutube("PLrknD2SRMNPm6SR8pMN_Oy-6p9w-DEhc1", 363)
    await fetchHighlightsFromYoutube('PLQZMWakg6Kkra--nS5mAvsGxffYkeBF9O', 2)
  }
  

async function periodicUpdate() {
    await fetchHighlights()
    setInterval(fetchHighlights, oneMinute * 15)
}

module.exports = periodicUpdate