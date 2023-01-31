const cons = require("../config/contant")
const constant = cons.constants

exports.nameValidation = (name) => {
    if (name && name.length && constant.RAGEX_NAME.test(name)) {
        return true
    }
    return false
}

exports.emailValidation = (emailId) => {
    if (emailId && emailId.length && constant.RAGEX_EMAIL.test(emailId)) {
        return true
    }
    return false
}

exports.phoneNumberValidation = (phoneNumber) => {
    if (phoneNumber && constant.RAGEX_PHONE.test(phoneNumber)) {
        return true
    }
    return false
}

exports.passwordValidation = (password) => {
    if (password && constant.RAGEX_PASSWORD.test(password)) {
        return true
    }
    return false
}

exports.numberValidation = (number) => {
    if (number && !isNaN(number)) {
        return true
    }
    return false
}

exports.urlValidation = (url) => {
    if(url && constant.RAGEX_URL.test(url)) {
        return true
    }
    return false
}

exports.stringValidation = (str) => {
    if(str && str.length && str.length > 2 && constant.RAGEX_STRING.test(str)) {
        return true;
    }
    return false
}
