
const validateUser = (user) => {
    if (user === "") {
        return "Username not entered !";
    } else if (user.match(/[!@#$%^&*()<>:,.+="'?!~`\-]/g)) {
        return 'Username can have special characters !';
    }
    return null;
}
const validateUserPassword = (pass) => {
    if (pass === "") {
        return "Password not entered !";
    } else if (pass.length < 8) {
        return 'Password must be more than 8 characters !';
    }
    return null;
}
export { validateUser, validateUserPassword };