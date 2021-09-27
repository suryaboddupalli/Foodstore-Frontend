import { EMAIL_REGX, MOBILE_NUMBER_LENGTH, PASSWORD_LENGTH, PASSWORD_REGX } from '../constants/constants'
const RegisterValidation = (userdata) => {
    var userErrors = ''

    if (!userdata.firstName) {
        userErrors = 'Please enter the Firstname'
    }
    else if (!userdata.lastName) {
        userErrors = 'please enter the Lastname'
    }
    else if (!userdata.email) {
        userErrors = 'please enter the Email'
    }
    else if (!((EMAIL_REGX).test(userdata.email))) {
        userErrors = 'Please enter the valid Email'
    }
    else if (userdata.phone.length !== MOBILE_NUMBER_LENGTH) {
        userErrors = 'Please enter valid Mobile NUmber'
    }
    else if (userdata.password.length < PASSWORD_LENGTH) {
        userErrors = 'Please enter min 8 characters '
    }
    else if (!((PASSWORD_REGX).test(userdata.password))) {
        userErrors = 'Password must contain 1 uppercase, 1 lowercase, 1 Digit, 1 special character'
    }
    return userErrors
}
export default RegisterValidation