const News = require('../model/news.model')
const valid = require('../utility/validation')
const msg = require('../config/contant')

const constant = msg.constants

exports.createNews = (req, res) => {
    const news = new News({
        bannerImgUrl: req.body.bannerImgUrl,
        title: req.body.title,
        content: req.body.content,
        readMeLink: req.body.readMeLink,
        updatedAt: new Date(),
        createdAt: new Date()
    })
    if (!valid.urlValidation(news.bannerImgUrl)) {
        return res.status(401).send({ message: "Please enter a valid URL" })
    }

    News.createNews(news, (err, result) => {
        if (err) {
            res.status(500).send({
                message: "Some error occured while creating news"
            })
        }
        res.send(result);
    })
}

exports.showAllNews = (req, res) => {
    News.showAllContentData(req, (err, result) => {
        if (err) {
            res.send(500).send({
                message: `Some error occured & err : ${err}`
            })
        }
        res.send({ result });
    })

}

exports.updatePostByNewsId = (req, res) => {
    const newsId = req.params.newsId
    const updateData = new News(req.body)
    const url = req.params.bannerImgUrl

    if (!valid.numberValidation(newsId)) {
        return res.status(401).send({ message: constant.USER_ID_VALIDATION_MSG })
    }
    if (!valid.urlValidation(url)) {
       return res.status(401).send({ message: constant.URL_VALIDATION_MSG })
    }
    News.updatePostDetailsByNewsId(newsId, updateData, (err, result) => {
        
        if (err) {
            res.status(500).send({
                message: `Some error occured & err : ${err}`
            })
        }
        res.send({ result })
    })
}

exports.showNewsByNewsId = (req, res) => {
    const newsId = req.params.newsId
    if (!valid.numberValidation(newsId)) {
        return res.status(401).send({ message: "Please send a valid userId" })

    }
    News.showNewsDetailsByNewsId(newsId, (err, result) => {
        if (err) {
            res.status(500).send({
                message: `some error occured & err : ${err}`
            })
        }
        res.send({ result })
    })
}

exports.deletePostBynewsId = (req, res) => {
    const newsId = req.params.newsId
    if (!valid.numberValidation(newsId)) {
        return res.status(401).send({ message: "Please send a valid userId" })
    }
    News.deletePostBynewsId(newsId, (err, result) => {
        if (err) {
            res.status(500).send({
                message: `some error occured & err : ${err}`
            })
        }
        res.send({ result })
    })
}