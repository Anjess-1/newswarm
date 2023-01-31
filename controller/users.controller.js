const Users = require('../model/users.model')
const valid = require('../utility/validation')
const msg = require('../config/contant')

const constant = msg.constants

exports.createUser = (req, res) => {
    const user = new Users({
        name: req.body.name,
        emailId: req.body.emailId,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        createAt: new Date()
    })
    if (!valid.nameValidation(user.name)) {
        return res.status(401).send({ message: constant.NAME_VALIDATION_MSG})
    }
    if (!valid.emailValidation(user.emailId)) {
        return res.status(401).send({ message: constant.EMAIL_VALIDATION_MSG })
    }
    if (!valid.phoneNumberValidation(user.phoneNumber)) {
        return res.status(401).send({ message: constant.PHONE_VALIDATION_MSG })
    }
    if (!valid.passwordValidation(user.password)) {
        return res.status(401).send({ message: constant.PASSWORD_VALIDATION_MSG })
    }
    Users.CreateUser(user, (err, result) => {
        if (err) {
            res.status(500).send({
                message: "Error while creating user"
            })
        }
        res.send(result);
    })
}

exports.showAllUsers = (req, res) => {
    Users.showAllUsersData(req, (err, result) => {
        if (err) {
            res.status(500).send({
                message: `Some error occured & err : ${err}`
            })
        }
        res.send({ result });
    })
}

exports.getUserDetailByuserId = (req, res) => {
    const userId = req.params.userId
    if (!valid.numberValidation(userId)) {
        return res.status(401).send({ message: constant.USER_ID_VALIDATION_MSG })
    }
    Users.getUserDetailByuserId(userId, (err, result) => {
        if (err) {
            res.status(500).send({
                message: `Some error occured & err : ${err}`
            })
        }
        res.send({ result });
    })
}

exports.getUserDetailBymobileNumber = (req, res) => {
    const mobileNumber = req.params.mobileNumber
    if (!valid.phoneNumberValidation(mobileNumber)) {
        return res.status(401).send({ message: constant.PHONE_VALIDATION_MSG })
    }
    Users.getUserDetailBymobileNumber(mobileNumber, (err, result) => {
        if (err) {
            res.status(500).send({
                message: `Some error occured & err : ${err}`
            })
        }
        res.send({ result });
    })
}

exports.updateUserDetailByuserId = (req, res) => {
    const userId = req.params.userId
    const updateData = new Users(req.body)

    if (!valid.numberValidation(userId)) {
        return res.status(401).send({ message: constant.USER_ID_VALIDATION_MSG })
    }
    Users.updateUserDetailByuserId(userId, updateData, (err, result) => {
        if (err) {
            res.status(500).send({
                message: `Some error occured & err : ${err}`
            })
        }
        res.send({ result });
    })
}

exports.deleteuserDetailByuserId = (req, res) => {
    const userId = req.params.userId

    if (!valid.numberValidation(userId)) {
        return res.status(401).send({ message: constant.USER_IxcD_VALIDATION_MSG })
    }

    Users.deleteuserDetailByuserId(userId, (err, result) => {
        if (err) {
            res.status(500).send({
                message: `Some error occures & err : ${err}`
            })
        }
        res.send({ result });
    })
}

exports.loginUserByMobile = (req, res) => {
    const userData = new Users(req.body)
    const mobileNumber = userData.mobileNumber
    const password = userData.password

    if (!valid.phoneNumberValidation(mobileNumber)) {
        return res.status(401).send({ message: constant.PHONE_VALIDATION_MSG })
    }
    if (!valid.passwordValidation(password)) {
        return res.status(401).send({ message: constant.PASSWORD_VALIDATION_MSG })
    }
    
    Users.loginUserByMobile(userData, (err, result) => {
        if (err) {
            res.status(500).send({
                message: `Some error occured & err : ${err}`
            })
        }
        result = JSON.parse(JSON.stringify(result))

        if (result && result.result && result.result.length) {
            res.status(200).send({ "msg": "user login successfully", "userId": result.result[0].userId })
        } else {
            res.status(400).send({ "msg": "Incorrect Number or password" })
        }
    })
}

exports.loginByEmail = (req, res) => {
    const userData = new Users(req.body)
    const emailId = userData.emailId
    const password = userData.password

    if (!valid.emailValidation(emailId)) {
        return res.status(401).send({ message: constant.EMAIL_VALIDATION_MSG })
    }
    if (!valid.passwordValidation(password)) {
        return res.status(401).send({ message: constant.PASSWORD_VALIDATION_MSG })
    }
    Users.loginByEmail(userData, (err, result) => {
        if (err) {
            res.status(500).send({
                message: `Some error & err : ${err}`
            })
        }
        result = JSON.parse(JSON.stringify(result))

        if (result && result.result.length) {
            res.status(200).send({ "msg": "login successfully", "userId": result.result[0].userId })
        } else {
            res.status(400).send({ "msg": "incorrect data" })
        }

    })
}

exports.loginUser = (req, res) => {
    const userData = new Users(req.body)
    const emailId = userData.emailId
    const mobileNumber = userData.mobileNumber
    const password = userData.password

    if ((emailId || constant.VALIDATION_ARRAY.includes(emailId)) && !valid.emailValidation(emailId)) {
        return res.status(401).send({ message: constant.EMAIL_VALIDATION_MSG })
    }
    if ((mobileNumber || constant.VALIDATION_ARRAY.includes(mobileNumber)) && !valid.phoneNumberValidation(mobileNumber)) {
        return res.status(401).send({ message: constant.PHONE_VALIDATION_MSG })
    }
    if (!valid.passwordValidation(password)) {
        return res.status(401).send({ message: constant.PASSWORD_VALIDATION_MSG })
    }
    Users.loginUser(userData, (err, result) => {
        if (err) {
            res.status(500).send({
                message: `Some error & err : ${err}`
            })
        }
        result = JSON.parse(JSON.stringify(result))

        if (result && result.result.length) {
            res.status(500).send({ "msg": "login successfully", "userId": result.result[0].userId })
        } else {
            res.status(400).send({ "msg": "incorrect data" })
        }

    })
}




