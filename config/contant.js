exports.constants = {
    // For Ragex check
    "RAGEX_NAME": /^[A-Za-z ]{3,29}$/,
    "RAGEX_EMAIL": /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    "RAGEX_PHONE": /^[0-9]{10}$/,
    "RAGEX_PASSWORD": /^[A-Za-z0-9@#$]{8,12}$/,
    "RAGEX_URL": /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
    "RAGEX_STRING": /^[A-Za-z0-9]$/,

    // For validation message
    "EMAIL_VALIDATION_MSG" : "Please enter a valid email id",
    "PHONE_VALIDATION_MSG" : "Please enter valid Mobile Number",
    "PASSWORD_VALIDATION_MSG" : "Please enter a valid password: Min 8 and Max 12 characters. Only use @, #, $ special characters",
    "USER_ID_VALIDATION_MSG" : "Please send a valid userId",
    "NAME_VALIDATION_MSG" : "Please enter a valid name",
    "URL_VALIDATION_MSG" : "Please enter a valid URL",

    //Other constant
    "VALIDATION_ARRAY" : ["", null, 0]
}



