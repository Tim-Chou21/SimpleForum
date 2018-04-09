function initApp() {
    // Login with Email/Password
    var txtEmail = document.getElementById('inputEmail');
    var txtPassword = document.getElementById('inputPassword');
    var btnLogin = document.getElementById('btnLogin');
    var btnGoogle = document.getElementById('btngoogle');
    var btnSignUp = document.getElementById('btnSignUp');

    btnLogin.addEventListener('click', function () {
        /// TODO 4: Add email login button event
        ///         1. Get user input email and password to login
        ///         2. Back to index.html when login success
        ///         3. Show error message by "create_alert" and clean input field
    });

    btnGoogle.addEventListener('click', function () {
        /// TODO 5: Add google login button event
        ///         1. Use popup function to login google
        ///         2. Back to index.html when login success
        ///         3. Show error message by "create_alert"
    });

    btnSignUp.addEventListener('click', function () {        
        /// TODO 6: Add signup button event
        ///         1. Get user input email and password to signup
        ///         2. Show success message by "create_alert" and clean input field
        ///         3. Show error message by "create_alert" and clean input field
    });
}

// Custom alert
function create_alert(type, message) {
    var alertarea = document.getElementById('custom-alert');
    if (type == "success") {
        str_html = "<div class='alert alert-success alert-dismissible fade show' role='alert'><strong>Success! </strong>" + message + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
        alertarea.innerHTML = str_html;
    } else if (type == "error") {
        str_html = "<div class='alert alert-danger alert-dismissible fade show' role='alert'><strong>Error! </strong>" + message + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
        alertarea.innerHTML = str_html;
    }
}

window.onload = function () {
    initApp();
};