function validateForm() {
    let form = document.getElementById("myForm");
    console.log(form.elements);
    for (var i = 0; i < form.elements.length; i++) {
        if (!form.elements[i].validity.valid) {
            document.getElementById("error-" + form.elements[i].name).style.display = "block";

            document.getElementById("error-img-" + form.elements[i].name).style.display = "block";
        }
    }
}

function resetError(id) {
    document.getElementById("error-" + id).style.display = "none";
    document.getElementById("error-img-" + id).style.display = "none";
}