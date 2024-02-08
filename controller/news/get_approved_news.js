const News = require('../../schemas/news_model');

module.exports = async (req, res) => {
    console.log("getApprovedNews ... ")
    try {
        const pageNumber = req.query.page ? parseInt(req.query.page) : 0; // Default to the first page if not provided
        const pageSize = 10; // Keeping it consistent
        const skip = pageNumber * pageSize;
        console.log(pageNumber)

        let language;
        switch (req.query.lang) {
            case "en":
                language = "am"
                break;
            case "am":
                language = "am"
                break
            case "tr":
                language = "ti"
                break;
            case "or":
                language = "or"
                break;
            case "si":
                language = "so"
                break;
            default:
                language = "am";
        }

        console.log(language)

        const query = {
          
           
            pending: false , 
            language: language
               
            
        };

        try {
            const newsResult = await News
                .find(query, { description: 0, _id: 0 })
                .sort({ publishedDate: -1 })
                .skip(skip)
                .limit(pageSize)
            console.log(newsResult.length)
            return res.status(200).json(newsResult);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ ok: false });
        }
    } catch (e) {
        console.log(e);
        res.status(502).json({ message: 'internal server error' });
    }
};
