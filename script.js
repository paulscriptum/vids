const staticVideo = document.getElementById('staticVideo');
const movingVideo = document.getElementById('movingVideo');

let isMoving = false;
let timeoutId = null;

function switchToMoving() {
  if (!isMoving) {
    isMoving = true;
    staticVideo.classList.remove('active');
    movingVideo.classList.add('active');
  }
}

function switchToStatic() {
  if (isMoving) {
    isMoving = false;
    movingVideo.classList.remove('active');
    staticVideo.classList.add('active');
  }
}

document.addEventListener('mousemove', () => {
  switchToMoving();

  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    switchToStatic();
  }, 100);
});

staticVideo.play();
movingVideo.play();
