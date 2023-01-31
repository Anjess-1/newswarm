const Like = require('../model/commentLike.model')
const valid = require('../utility/validation')

exports.createLike = (req, res) => {
    const like = new Like({
        userId: req.body.userId,
        commentId: req.body.commentId,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    if(!valid.numberValidation(like.userId)) {
        return res.status(401).send({ message: "Please enter a valid userId" })
    }
    if(!valid.nameValidation(like.commentId)) {
        return res.status(401).send({ message: "Please enter a valid commentId" }) 
    }
    Like.createALike(like, (err, result) => {
        if (err) {
            res.status(500).send({
                message: "some error occured"
            })
        }
        res.send(result);
    })
}

exports.showAllLike = (req, res) => {
    Like.showAllLikes(req, (err, result) => {
        if (err) {
            res.status(500).send({
                message: "some error occured"
            })
        }
        res.send({ result });
    })
}

exports.showLikeByuserId = (req, res) => {
    const userId = req.params.userId
    if(!valid.numberValidation(userId)) {
        return res.status(401).send({ message: "Please enter a valid userId" })
    }
    Like.showLikesByuserId(userId, (err, result) => {
        if (err) {
            res.status(500).send({
                message: "some error occures"
            })
        }
        res.send({ result });
    })
}

exports.deleteLikeByuserId = (req, res) => {
    const userId = req.params.userId
    if(!valid.numberValidation(userId)) {
        return res.status(401).send({ message: "Please enter a valid userId" })
    }
    Like.deleteLikesByuserId(userId, (err, result) => {
        if (err) {
            res.status(500).send({
                message: "some error occured"
            })
        }
        res.send({ result })
    })
}

exports.updateLikeByuserId = (req, res) => {
    const userId = req.params.userId
    const updatData = new Like(req.body)
    const commentId = req.params.commentId

    if(!valid.numberValidation(userId)) {
        return res.status(401).send({ message: "Please enter a valid userId" })
    }
    if(!valid.nameValidation(commentId)) {
        return res.status(401).send({ message: "Please enter a valid commentId" }) 
    }
    Like.updateLikesByuserId(userId, updatData, (err, result) => {
if(err) {
    res.status(500).send({
        message: "some error occured"
    })
}
res.send({result})
    })
}