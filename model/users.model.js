const sql = require("../config/db")

const User = function (user) {
    this.userId = user.userId
    this.name = user.name
    this.emailId = user.emailId
    this.phoneNumber = user.phoneNumber
    this.password = user.password
    this.createdAt = user.createdAt
}

User.CreateUser = (newUser, callback) => {
    // const userData = [newUser.name, newUser.emailId, newUser.phoneNumber, newUser.password];
    // sql.query("insert into users (name, emailId, phoneNumber, password) values (?,?,?,?)", [newUser.name, newUser.emailId, newUser.phoneNumber, newUser.password], (err, res) => {
    sql.query("insert into users set ?", newUser, (err, res) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, { message: `User created at userId : ${res.insertId}` })
    })
}

User.showAllUsersData = (req, callback) => {
    sql.query("select * from users", null, (err, res) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { userList: res })
    })
}

User.getUserDetailByuserId = (userId, callback) => {
    sql.query("select * from users where userId = ?", userId, (err, res) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { userDetails: res })
    })

}

User.getUserDetailBymobileNumber = (mobileNumber, callback) => {
    sql.query("select * from users where phoneNumber = ?", mobileNumber, (err, res) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { userDetails: res })
    })

}

User.updateUserDetailByuserId = (userId, user, callback) => {
    let updatedPayload = ''

    if (user['name']) {
        updatedPayload += `name = '${user['name']}', `
    }
    if (user['emailId']) {
        updatedPayload += `emailId = '${user['emailId']}', `
    }
    if (user['password']) {
        updatedPayload += `password = '${user['password']}', `
    }
    if (user['phoneNumber']) {
        updatedPayload += `phoneNumber = '${user['phoneNumber']}', `
    }

    updatedPayload = updatedPayload.substring(0, updatedPayload.length - 2);
    const sqlQuery = `update users set ${updatedPayload} where userId = ${userId}`
    sql.query(sqlQuery, null, (err, result) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { "msg": "User data updated successfully" })
    })
}

User.deleteuserDetailByuserId = (userId, callback) => {
    sql.query("Delete From users Where userId = ?", userId, (err, res) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { "msg": "User data deleted successfully" })
    })
}

User.loginUserByMobile = (userData, callback) => {
    sql.query("select userId from users where password = ? and phoneNumber = ?", [userData.password, userData.phoneNumber], (err, result) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { result })
    })
}

User.loginByEmail = (userData, callback) => {
    sql.query("Select userId from users where emailId = ? and password= ?", [userData.emailId, userData.password], (err, result) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { result })
    })
}

User.loginUser = (userData, callback) => {
    let query = 'Select userId from users where '

    if (userData['emailId']) {
        query += `emailId = '${userData['emailId']}' and `
    } else if (userData['phoneNumber']) {
        query += `phoneNumber = ${userData['phoneNumber']} and `
    }

    query += 'password = ?'
    sql.query(query, userData.password, (err, result) => {
        if (err) {
            callback(err, null)
            return;
        }
        callback(null, { result })
    })
}

module.exports = User;