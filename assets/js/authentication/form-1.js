var toggle = document.getElementById("toggle-password");

if (toggle) {
    toggle.addEventListener('click', function() {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    });
}