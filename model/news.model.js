const sql = require("../config/db")

const News = function (news) {
    this.newsId = news.newsId
    this.bannerImgUrl = news.bannerImgUrl
    this.title = news.title
    this.content = news.content
    this.readMeLink = news.readMeLink
    this.updatedAt = news.updatedAt
    this.createdAt = news.createdAt
}

News.createNews = (newsData, callback) => {
    sql.query("insert into news set ?", newsData, (err, res) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, { message: `News created at id : ${res.insertId}` })
    })
}

News.showAllContentData = (req, callback) => {
    sql.query("select * from news", null, (err, res) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { newsId: res })
    })
}

News.updatePostDetailsByNewsId = (newsId, news, callback) => {
    let updateload = ''
    if (news['bannerImgUrl']) {
        updateload += `bannerImgUrl = '${news['bannerImgUrl']}', `
    }
    if (news['title']) {
        updateload += `title = '${news['title']}', `
    }
    if (news['content']) {
        updateload += `content = '${news['content']}', `
    }
    if (news['readMeLink']) {
        updateload += `readMeLink = '${news['readMeLink']}', `
    }

    updateload = updateload.substring(0, updateload.length - 2);

    const sqlQuery = `update news set ${updateload} where newsId = ${newsId}`
    sql.query(sqlQuery, null, (err, result) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { "msg": "Post is updated" })
    })
}

News.showNewsDetailsByNewsId = (newsId, callback) => {
    sql.query("select * from news where newsId = ?", newsId, (err, res) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { newsDetails: res })
    })
}

News.deletePostBynewsId = (newsId, callback) => {
    sql.query("Delete From news where newsId = ?", newsId, (err, res) => {
        if (err) {
            callback(err, null)
            retuurn;
        }
        callback(null, {"msg": "Data Deleted."})
    })
}

module.exports = News;
