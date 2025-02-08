document.addEventListener("DOMContentLoaded", function () {
    const heartContainer = document.getElementById("heartContainer");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        // Random position
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animationDuration = Math.random() * 5 + 5 + "s";

        heartContainer.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }

    setInterval(createHeart, 500);
});
