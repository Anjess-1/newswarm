const Category = require('../model/category.model')
const valid = require('../utility/validation')


exports.createCategory = (req, res) => {
    const category = new Category({
        name: req.body.name,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    if (!valid.stringValidation(category.name)) {
        return res.status(401).send({ message: "Please enter a valid name" })
    }
    Category.createCategoryPost(category, (err, result) => {
        if (err) {
            res.status(500).send({
                message: "some error occured"
            })
        }
        //res.send("success")
        res.send(result);
    })
}

exports.showAllCategory = (req, res) => {
    Category.showAllCategoryPost(req, (err, result) => {
        if (err) {
            res.status(500).send({
                message: `Some error occured & err : ${err}`
            })
        }
        res.send({ result });
    })

}

exports.getCategoryBycategoryId = (req, res) => {
    const categoryId = req.params.categoryId
    if (!valid.numberValidation(categoryId)) {
        return res.status(401).send({ message: "Please enter a valid categoryId" })
    }
    Category.getCategoryPostsBycategoryId(categoryId, (err, result) => {
        if (err) {
            res.status(500).send({
                message: `some error occured`
            })
        }
        res.send({ result });
    })
}

exports.deleteCategoryBycategoryId = (req, res) => {
    const categoryId = req.params.categoryId
    if (!valid.numberValidation(categoryId)) {
        return res.status(401).send({ message: "Please enter a valid categoryId" })
    }
    Category.deleteCategoryPostBycategoryId(categoryId, (err, result) => {
        if (err) {
            res.status(500).send({
                message: `Some error occures & err : ${err}`
            })
        }
        res.send({ result });
    })
}

exports.updateCategoryBycategoryId = (req, res) => {
    const categoryId = req.params.categoryId
    const updateData = new Category(req.body)
    const catName = req.params.name

    if (!valid.numberValidation(categoryId)) {
        return res.status(401).send({ message: "Please enter a valid categoryId" })
    } 
    if (!valid.catValidation(catName)) {
        return res.status(401).send({ message: "Please enter a valid name" })
    }
    Category.updateCategoryPostBycategoryId(categoryId, updateData, (err, result) => {
        if (err) {
            res.status(500).send({
                message: `some error occured`
            })
        }
        res.send(result)
    })

}