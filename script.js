function moveRandomE1(elm) {
   elm.style.position = "absolute";
   elm.style.top = Math.random() * 100 + "%";
   elm.style.left = Math.random() * 100 + "%";
}

const moveRandom = document.querySelector("#MOVE");

moveRandom.addEventListener("mouseenter", function(e) {
   moveRandomE1(e.target);
})
