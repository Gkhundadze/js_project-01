const prompt = require('prompt-sync')({ sigint: true });
const user = {
    userName: '',
    userPass: '',
};
getUserName();
function getUserName() {
    const userName = prompt('username : ');
    if (userName.length <= 6) {
        console.log('username is too short, lets try one more time');
        getUserName();
    } else {
        user.userName = userName;
        getUserPassword()
    }
}
function getUserPassword() {
    const userPass = prompt('password : ');
    if (userPass.length <= 6) {
        console.log('password is too short');
        getUserPassword();
    } else {
        user.userPass = userPass;
        console.log('you have registered successfully, lets check your login');
        checkUser();

    }
}
function checkUser() {
    checkUserN();
    function checkUserN() {
        let checkUserName = prompt('user : ');
        if (checkUserName == user.userName) {
            console.log('username is correct');
        } else {
            console.log("username is incorrect, you're in");
            checkUserN();
        }
    }
    checkUserP();
    function checkUserP() {
        let checkUserPassword = prompt('password : ');
        if (checkUserPassword == user.userPass) {
            console.log('password is correct');
        } else {
            console.log("password is incorrect");
            checkUserP();
        }
    }

}

