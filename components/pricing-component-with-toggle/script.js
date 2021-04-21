function togglePricing(id) {
    if (document.getElementById(id).checked) {
        document.getElementById("basic-amount").innerHTML = "19.99";
        document.getElementById("professional-amount").innerHTML = "24.99";
        document.getElementById("master-amount").innerHTML = "39.99";
    } else {
        document.getElementById("basic-amount").innerHTML = "199.99";
        document.getElementById("professional-amount").innerHTML = "249.99";
        document.getElementById("master-amount").innerHTML = "399.99";
    }

}