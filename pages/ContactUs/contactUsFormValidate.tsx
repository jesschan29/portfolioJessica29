const inputValidation = (fullName: string, user_message: string): boolean => {
    if (fullName.trim() === "") {
        alert("Please Enter Your Name!");
        return false;
    }
    else if (user_message.trim() === "") {
        alert("Please Enter Your Queries!");
        return false;
    }
    else {
        return true;
    }
}
export default inputValidation;