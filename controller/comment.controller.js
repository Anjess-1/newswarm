const Comment = require('../model/comment.model');

exports.createComment = (req, res) => {
    const comment = new Comment({
        newsId: req.body.newsId,
        userId: req.body.userId,
        content: req.body.content,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    Comment.createCommentPost(comment, (err, result) => {
        if (err) {
            res.status(500).send({
                message: "Some error occured while creating comment"
            })
        }
        console.log(err);
        res.send(result);
    })
}

exports.showAllComments = (req, res) => {
    Comment.showAllCommentPosts(req, (err, result) => {
        if (err) {
            res.status(500).send({
                message: "some error occured"
            })
        }
        res.send(result);
    })
}

exports.getCommentDetailBycommentId = (req, res) => {
    Comment.getCommentPostBycommentId(req.params.commentId, (err, result) => {
        if (err) {
            res.status(500).send({
                message: `some error occured & err : ${err}`
            })
        }
        res.send(result);
    })
}

exports.deleteCommentBycommentId = (req, res) => {
    Comment.deleteCommentDataBycommentId(req.params.commentId, (err, result) => {
        if (err) {
            res.status(500).send({
                message: `some error occured & err : ${err}`
            })
        }
        res.send(result);
    })
}

exports.updateCommentBycommentId = (req, res) => {
    const commentId = req.params.commentId
    const updatePost = new Comment(req.body)

    Comment.updateCommentDataBycommentId(commentId, updatePost, (err, result) => {
        if (err) {
            res.status(500).send({
                message: `some error occured & err : ${err}`
            })
        }
        res.send(result)
    })
}