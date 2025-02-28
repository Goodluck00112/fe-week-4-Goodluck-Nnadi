function greetUser() {
    var name = document.getElementById("nameInput").value;
    var message = "Please enter your name.";

    if (name !== "") {
        message = "Hello, " + name + "!";
    }

    document.getElementById("greetingMessage").innerText = message;
}
