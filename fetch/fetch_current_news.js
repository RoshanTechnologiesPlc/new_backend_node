
const axios = require("axios")
const newsModel = require("../schemas/news_model")
const newsContentSchema = require("../schemas/newsContentSchema")
const uuid = require('uuid');
const djangoUrl = "https://testadjangobackendquick.azurewebsites.net/apiscrap"

// const djangoUrl = 'http://127.0.0.1:8000/apiscrap'
async function addNewsFile(url){
        const config = {
        method: 'GET',
        url: djangoUrl,
        params : {
            url : url
        }
        }


      try{
        const response = await axios(config)

        if (response.status == 200) {
            console.log("response is 200")
            newsFile = JSON.stringify(response.data).replace('false' , null)
            newsFile = JSON.parse(newsFile)
    
        result =  await  InsertNews(newsFile)
        return result
        }
             
         else {
            return false
        }

      }catch(e){
        console.log(`error happened while fetching news file ${e}`)
      }

        // const newsFile = {'title': 'How Liverpool will spend £164m investment raised by selling minority stake', 'description': 'Liverpool sell minority stake to Dynasty Equity\nInvestment thought to be worth up to £164m\nReds confirm what the money will be spent on\n', 'author': 'Jamie Spencer', 'mainImage': 'https://images2.minutemediacdn.com/image/upload/c_crop,w_903,h_602,x_121,y_80/c_fill,w_720,ar_3:2,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01hbe0kvbspdf09ee7f3.jpg', 'figCaption': 'Liverpool have attracted significant outside investment / Michael Regan/GettyImages', 'headlineTextAfterImage': "Liverpool owners Fenway Sports Group (FSG) have announced the sale of a minority stake to a sports investment firm that will inject a significant amount of money into the club, although it won't be spent on new players in upcoming transfer windows.", 'sourceLink': 'https://www.90min.com/posts/how-liverpool-will-spend-164m-investment-selling-minority-stake', 'listOfContent': [{'h1title': '', 'h2title': '', 'h3title': '', 'paragraphs': 'Liverpool owners Fenway Sports Group (FSG) have announced the sale of a minority stake to a sports investment firm that will inject a significant amount of money into the club, although it won\'t be spent on new players in upcoming transfer windows.\nDynasty Equity have completed what Liverpool are describing as a "strategic common equity minority investment" in the club. It will bring additional money into the club, while FSG have stressed that their commitment to the Reds remains "as strong as ever".\nThe club\'s owners have been open to outside investment since confirming so last year, when it was also reported that that presentation had been prepared for parties interested in a full sale.\nLiverpool\'s finances have come under scrutiny in recent times. The Reds posted combined pre-tax losses of just over £50m in their accounts for 2019/20 and 2020/21, highlighting the hugely detrimental impact of the Covid-19 pandemic.\n', 'imageLink': null, 'figCaption': ''}, {'h1title': '', 'h2title': '', 'h3title': '', 'paragraphs': '', 'imageLink': 'https://images2.minutemediacdn.com/image/upload/c_crop,w_903,h_602,x_121,y_80/c_fill,w_720,ar_3:2,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01hbe0kvbspdf09ee7f3.jpg', 'figCaption': 'John W. Henry founded FSG and Liverpool principal owner / Michael Regan/GettyImages'}, {'h1title': '', 'h2title': '', 'h3title': '', 'paragraphs': 'Their most recently published accounts for the 2021/22 season saw revenue soar by £107m on the previous year to a club record £594m. Liverpool returned to profitability, however, wages also grew by almost 17% and total administrative costs were up £69m to £545m.\nReports suggest the investment from Dynasty Equity is worth between £82m and £164m. Liverpool have not disclosed the amount, but have confirmed what it will be used for.\n"The minority investment will primarily be used to pay down bank debt incurred during the COVID-19 pandemic and capital expenses made to enhance Anfield, build the AXA Training Centre, repurchase Melwood training ground and, most recently, acquisitions during the summer transfer window," a statement from the club on Thursday afternoon read.\nLiverpool are also open to exploring "further growth opportunities" with Dynasty Equity.\n', 'imageLink': null, 'figCaption': ''}, {'h1title': '', 'h2title': '', 'h3title': 'READ THE LATEST LIVERPOOL NEWS, TRANSFER RUMOURS & GOSSIP', 'paragraphs': '', 'imageLink': null, 'figCaption': ''}], 'language': 'en'}
        // InsertNews(newsFile)
    }
 

async function InsertNews(newsFile) {
    // await mongoose.connection.db.dropCollection("news")
    console.log("function called")
    // console.log(newsFile)
    const title = newsFile.title;
    const description = newsFile.description;
    const newsLink = newsFile.newsLink;
    const author = newsFile.author;
    const sourceLink = newsFile.sourceLink;
    const mainImage = newsFile.mainImage
    const figCaption = newsFile.figCaption;

    const id = uuid.v4();
    const publishedDate = new Date().toISOString();
    const language = "am" 
    const listOfContent = []
    let firstContents = newsFile.listOfContent.length > 0 ?   newsFile.listOfContent[0] : ""
    let firstParagraphIndex = firstContents.paragraphs.indexOf(".")
    let headLineTextAfterImage  = firstParagraphIndex != -1  ? firstContents.paragraphs.slice(0, firstParagraphIndex) + "." : ""
    let firstParagraphTextAfter = firstParagraphIndex != -1  ?  firstContents.paragraphs.slice(firstParagraphIndex + 3) : ""
    headlineTextAfterImage = headLineTextAfterImage.replace("90min rounds up the latest transfer news, rumours and gossip circulating around the world", "")

    
    for (let index = 0; index < newsFile.listOfContent.length; index++) {
        const element = newsFile.listOfContent[index];

        const newsContent = {

            h1title: element.h1title,
            h2title: element.h2title,
            h3title: element.h3title,
            imageLink: element.imageLink == false ? null :  element.imageLink,
            figCaption: element.figCaption,
            paragraph: index == 0 ? firstParagraphTextAfter : element.paragraphs,
            description: element.description,
            tableBody : element.tableBody,
            tableHead : element.tableHead
        }


        // newsContentObject = await newsContentSchema.findOneAndUpdate(
        //     {
        //         h1title: element.h1title

        //     },
        //     newsContent, {
        //     upsert: true,
        //     new: true
        // }
        // )


        listOfContent.push(newsContent)

    }


    // const newsObject = {
    //     id,
    //     title,
    //     description,
    //     newsLink,
    //     author,
    //     sourceLink,
    //     mainImage,
    //     figCaption,
    //     headLineTextAfterImage,
    //     publishedDate,
    //     language,
    //     listOfContent

    // }


    // try {

    //     console.log("adding the news ....")
    //     result = await newsModel.findOneAndUpdate(
    //         {
    //             id: id
    //         },
    //         newsObject,
    //         {
    //             upsert: true,
    //             new: true
    //         }
    //     )

    //     if (result) {

    //         console.log("added news file . ....")
    //         // return result  
    //     } else {
    //         console.log("news is not added")
    //     }
 
    // } catch (error) {
    //     console.log(`error adding news file ${error}`)
    // }


    // return listOfContent
    // return {
    //     id,
    //     title,
    //     description,
    //     newsLink,
    //     author,
    //     sourceLink,
    //     mainImage,
    //     figCaption,
    //     headLineTextAfterImage,
    //     publishedDate,
    //     language,
    //     listOfContent
    // }



    return {
        title, 
        description,
        newsLink,
        author,
        sourceLink,
        listOfContent,
        mainImage,
        figCaption,
        headLineTextAfterImage,
        publishedDate }
}



module.exports = addNewsFile
