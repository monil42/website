// validate the given number
function checkNumberValid() {
    var no = document.getElementById('number').value;
    var uservalid = " ";
    if (no.length !== 10 && uservalid != +no) {

        document.getElementById('login').style.display = 'none';
        document.getElementById('password').style.display = 'none';
        document.getElementById('email').style.display = 'none';
        document.getElementById('username').style.display = 'none';
        document.getElementById('password-auth').style.display = 'none';
        document.getElementById('login-auth').style.display = 'none';
        document.getElementById('signinDaxy').style.display = 'none';
        document.getElementById('loginDaxy').style.display = 'block';

        return
    }
    fetch(`https://api.nakoda.daxy.in/user/isregistered/${no}`)

    .then(response => response.json())
        .then(uservalid => {
            if (uservalid.registered) {
                document.getElementById('password').style.display = 'block';
                document.getElementById('login').style.display = 'block';
                document.getElementById('email').style.display = 'none';
                document.getElementById('username').style.display = 'none';
                document.getElementById('password-auth').style.display = 'none';
                document.getElementById('login-auth').style.display = 'none';
                document.getElementById('loginDaxy').style.display = 'block';
                document.getElementById('signinDaxy').style.display = 'none';


            } else {
                document.getElementById('password').style.display = 'none';
                document.getElementById('login').style.display = 'none';
                document.getElementById('email').style.display = 'block';
                document.getElementById('username').style.display = 'block';
                document.getElementById('password-auth').style.display = 'block';
                document.getElementById('login-auth').style.display = 'block';
                document.getElementById('loginDaxy').style.display = 'none';
                document.getElementById('signinDaxy').style.display = 'block';



            }


        });

}