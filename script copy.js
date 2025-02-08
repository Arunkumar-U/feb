// function revealMessage() {
//     document.getElementById("hiddenMessage").style.display = "block";
// }


function revealMessage() {
    document.getElementById("hiddenMessage").style.display = "block";
}

// Floating Heart Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Between 2s to 5s
    document.getElementById("heartContainer").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500); // Create hearts every 500ms
