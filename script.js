document.querySelectorAll(".moveable").forEach((el) => {
  el.addEventListener("click", () => {
    const canvas = document.querySelector(".canvas");
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;
    const elWidth = el.offsetWidth;
    const elHeight = el.offsetHeight;

    const maxLeft = canvasWidth - elWidth;
    const maxTop = canvasHeight - elHeight;

    const newLeft = Math.floor(Math.random() * maxLeft);
    const newTop = Math.floor(Math.random() * maxTop);

    el.style.left = `${newLeft}px`;
    el.style.top = `${newTop}px`;
  });
});
