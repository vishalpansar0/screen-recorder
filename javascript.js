const shareBtn = document.getElementById('shareBtn');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

let desktopstream;

shareBtn.addEventListener('click', () => {
    desktopstream = navigator.mediaDevices.getDisplayMedia({video: true});
        
  })