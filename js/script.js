const contextMenu = document.querySelector(".container");
const shareMenu = document.querySelector(".share-menu");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  let x = e.offsetX;
  let y = e.offsetY;
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;
  let cmWidth = contextMenu.offsetWidth;
  let cmHeight = contextMenu.offsetHeight;

  x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
  y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

  x > winWidth - cmWidth - shareMenu.offsetWidth
    ? (shareMenu.style.left = "-170px")
    : (shareMenu.style.left = "260px");

  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = "visible";
});

document.addEventListener("click", (e) => {
  e.preventDefault();
  contextMenu.style.visibility = "hidden";
});
