const sql = require("../config/db")

const Like = function (like) {
    this.likeId = like.likeId
    this.userId = like.userId
    this.commentId = like.commentId
    this.createdAt = like.createdAt
    this.updatedAt = like.updatedAt
}
Like.createALike = (data, callback) => {
    sql.query("insert into CommentLike set ?", data, (err, res) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { message: `post created at id: ${res.insertId}` })
    })
}

Like.showAllLikes = (req, callback) => {
    sql.query("select * from CommentLike", null, (err, res) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { likeList: res })
    })
}

Like.showLikesByuserId = (userId, callback) => {
    sql.query("select * from CommentLike where userId = ?", userId, (err, res) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { likeDetails: res })
    })
}

Like.deleteLikesByuserId = (userId, callback) => {
    sql.query("delete from CommentLike where userId = ?", userId, (err, res) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { "msg": "like deleted" })
    })
}

Like.updateLikesByuserId = (userId, CommentLike, callback) => {
    let updatedPayload = ''
    if(CommentLike['userId']) {
        updatedPayload += `userId = '${CommentLike['userId']}', `
    }
    if(CommentLike['commentId']) {
        updatedPayload += `commentId = '${CommentLike['commentId']}', `
    }
    updatedPayload = updatedPayload.substring(0, updatedPayload.length - 2);
    const sqlQuery = `update CommentLike set ${updatedPayload} where userId = ${userId}`
sql.query(sqlQuery, null, (err, res) => {
if(err) {
    callback(err, null)
    return;
}
callback(null, { "msg": "data updated!"})
})

}
module.exports = Like;