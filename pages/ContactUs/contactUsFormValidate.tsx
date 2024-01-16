const inputValidation = (fullName: string, user_message: string): boolean => {
    if (fullName.length === 0 || /^\s+$/.test(fullName)) {
        alert("Please Enter Your Name!");
        return false;
    }
    else if (user_message.length === 0 || /^\s+$/.test(user_message)) {
        alert("Please Enter Your Queries!");
        return false;
    }
    else {
        return true;
    }
}
export default inputValidation;