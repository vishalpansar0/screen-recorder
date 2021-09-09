const shareBtn = document.getElementById('shareBtn');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');


let stream;
let desktopstream;

shareBtn.addEventListener('click', () => {
    desktopstream = navigator.mediaDevices.getDisplayMedia({video: true});
    const track = desktopstream.getVideoTracks();

    stream = new MediaStream(track);
    console.log('Stream', stream);
  })