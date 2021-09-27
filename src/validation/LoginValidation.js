import { PASSWORD_LENGTH } from '../constants/constants'
const LoginValidation = (userData) => {
    var userErrors = ''
    if (!userData.email) {
        userErrors = 'Please enter the Email'
    } else if (!userData.password) {
        userErrors = 'Please enter the password'
    } else if (userData.password.length < PASSWORD_LENGTH) {
        userErrors = 'Please enter the min eigth character password'
    }
    return userErrors
}
export default LoginValidation