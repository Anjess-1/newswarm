const sql = require("../config/db")

const Category = function (category) {
    this.categoryId = category.categoryId
    this.name = category.name
    this.createdAt = category.createdAt
    this.updated_at = category.updatedAt
}

Category.createCategoryPost = (newCategory, callback) => {
    sql.query("insert into category set ?", newCategory, (err, res) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, { message: `category created at categoryId : ${res.insertId}` })
    })
}

Category.showAllCategoryPost = (req, callback) => {
    sql.query("select * from category", null, (err, res) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { categorylist: res })
    })
}

Category.getCategoryPostsBycategoryId = (categoryId, callback) => {
    sql.query("select * from category where categoryId =?", categoryId, (err, res) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { categoryDetails: res })
    })
}

Category.deleteCategoryPostBycategoryId = (categoryId, callback) => {
    sql.query("delete from category where categoryId = ?", categoryId, (err, res) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { "msg": "category deleted" })
    })
}

Category.updateCategoryPostBycategoryId = (categoryId, category, callback) => {
    let updatedPayload = ''
    if (category['name']) {
        updatedPayload += `name = '${category['name']}', `
    }
    updatedPayload = updatedPayload.substring(0, updatedPayload.length - 2);
    const sqlQuery = `update category set ${updatedPayload} where categoryId = ${categoryId}`
    sql.query(sqlQuery, null, (err, result) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { "msg": "User data updated successfully" })
    })

}
module.exports = Category;