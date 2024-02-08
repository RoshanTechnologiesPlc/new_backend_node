const axios = require('axios');

async function synthesisNews(news) {
    require('dotenv').config();
    let wholeNews = news.title + news.figCaption + news.description.replace('\n', ' ') + news.headLineTextAfterImage;

    for (let i = 0; i < news.listOfContent.length; i++) {
        let content = news.listOfContent[i];
        wholeNews += content.h1title + content.h2title + content.h3title + content.figCaption + content.paragraph + content.description.replace('\n', ' ');
    }

    const config = {
        language: news.language,
        newsId: news.id, // Assuming you meant to use news.id here
        text: wholeNews,
    };

    try {
        const response = await axios.post(process.env.META_TTS_URL, config);
        // You might want to do something with the response here
    } catch (error) {
        console.error('Error in axios post:', error);
    }
}

module.exports = synthesisNews;
