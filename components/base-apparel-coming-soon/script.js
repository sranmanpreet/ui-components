function validateForm() {
    var email = document.forms['myForm']['email'].value;
    var error = document.getElementsByClassName("error");
    var form = document.getElementsByName("myForm");

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        error[0].style.display = "none";
        form[0].style.borderColor = "hsla(0, 36%, 70%, 0.459)";
        return true;
    }
    error[0].style.display = "block";
    form[0].style.borderColor = "red";
}