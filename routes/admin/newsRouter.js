
const express = require("express");
const router = express.Router();


const getPendingNews = require("../../controller/news/getPendingNews");
const getApprovedNews = require("../../controller/news/get_approved_news");
const getAllNews = require("../../controller/news/get_all_news");
const postNews = require("../../controller/news/post_news");
const editNews = require("../../controller/news/edit_news");
const newsCount = require("../../controller/news/get_news_count");
const newsDetail = require("../../controller/news/get_news_detail");
router.get("/pending", getPendingNews);
router.get("/approved", getApprovedNews);
router.get("/all", getAllNews)
router.get("/detail", newsDetail);
router.get('/newscount' , newsCount)
router.post("/post", postNews);
router.post("/edit", editNews);

module.exports = router;