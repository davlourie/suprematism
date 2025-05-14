document.querySelectorAll('.moveable').forEach(el => {
  el.addEventListener('click', () => {
    const canvas = document.querySelector('.canvas');
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;
    const elWidth = el.offsetWidth;
    const elHeight = el.offsetHeight;

    const maxLeft = canvasWidth - elWidth;
    const maxTop = canvasHeight - elHeight;

    const newLeft = Math.floor(Math.random() * maxLeft) + elWidth / 2;
    const newTop = Math.floor(Math.random() * maxTop) + elHeight / 2;

    const percentLeft = (newLeft / canvasWidth) * 100;
    const percentTop = (newTop / canvasHeight) * 100;

    el.style.left = `${percentLeft}%`;
    el.style.top = `${percentTop}%`;
  });
});
