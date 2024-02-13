function getRandomPosition() {
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    return [x, y];
}

function moveNo() {
    var button = document.getElementById("noButton");
    var position = getRandomPosition();
    button.style.left = position[0] + "px";
    button.style.top = position[1] + "px";
}

function accept() {
    // Stop the movement of the "No" button
    clearInterval(interval);
    window.location.href = "another_page.html";
}

// Move the "No" button every second
var interval = setInterval(moveNo, 1000);
