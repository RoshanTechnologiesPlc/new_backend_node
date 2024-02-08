const fetchRssDataFor90Minutes = require("../../newsAi/webScrapping/extract_news_link")

const oneMinute = 1000 * 60 * 1;

async function periodicUpdate() {
  await fetchRssDataFor90Minutes()
  setInterval(fetchRssDataFor90Minutes, 10 * oneMinute)
}

module.exports = periodicUpdate