const sql = require("../config/db")

const Comment = function (comment) {
    this.commentId = comment.commentId
    this.newsId = comment.newsId
    this.userId = comment.userId
    this.content = comment.content
    this.createdAt = comment.createdAt
    this.updatedAt = comment.updatedAt
}

Comment.createCommentPost = (data, callback) => {
    sql.query("insert into Comment set ?", data, (err, res) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, { message: `comment created at id: ${res.insertId}` })
    })
}

Comment.showAllCommentPosts = (data, callback) => {
    sql.query("select * from Comment", null, (err, res) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { commentId: res })
    })
}

Comment.getCommentPostBycommentId = (commentId, callback) => {
    sql.query("select * from Comment where commentId = ?", commentId, (err, res) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { commentDetails: res });
    })
}

Comment.deleteCommentDataBycommentId = (commentId, callback) => {
    sql.query("Delete from Comment where commentId = ?", commentId, (err, res) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { "msg": "data deleted" })
    })
}

Comment.updateCommentDataBycommentId = (commentId, Comment, callback) => {
    let updateload = ''
    if (Comment['newsId']) {
        updateload += `newsId = '${Comment['newsId']}', `
    }
    if (Comment['userId']) {
        updateload += `userId = '${Comment['userId']}', `
    }
    if (Comment['content']) {
        updateload += `content = '${Comment['content']}', `
    }
    updateload = updateload.substring(0, updateload.length - 2);
    const sqlQuery = `update Comment set ${updateload} where commentId = ${commentId}`
    sql.query(sqlQuery, null, (err, res) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { "msg": "Post is updated" })
    })
}













module.exports = Comment;