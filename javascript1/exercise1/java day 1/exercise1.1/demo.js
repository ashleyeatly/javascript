function getAndDisplayName() {
    var name = document.querySelector("#name").value;
    document.querySelector("#welcome").innerHTML =
        "Welcome to my site, " + name;
} //end get .. function
document.querySelector("#submit").addEventListener(
    "click", getAndDisplayName);