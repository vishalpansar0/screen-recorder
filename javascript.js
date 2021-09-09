const shareBtn = document.getElementById('shareBtn');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const vElement = document.getElementById('videoElement');


let stream;
let desktopstream;

shareBtn.addEventListener('click', () => {
    startcapture()
  })

  async function startcapture(){
    desktopStream = await navigator.mediaDevices.getDisplayMedia({ video:true});

    const tracks = [
      ...desktopStream.getVideoTracks()   ];

    stream = new MediaStream(tracks);
    console.log('Stream', stream)
    vElement.srcObject = stream;
  }