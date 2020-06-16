tf.setBackend('webgl').then(console.log('Backend set to', tf.getBackend()));

function isMobile() {
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  return isAndroid || isiOS;
}

let videoWidth, videoHeight;

const VIDEO_WIDTH = 600;
const VIDEO_HEIGHT = 600;
const mobile = isMobile();
// Don't render the point cloud on mobile in order to maximize performance and
// to avoid crowding limited screen space.
const renderPointcloud = mobile === false;

let modelFacemesh; 

var stream1;
async function setupCamera() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    throw new Error(
      'Browser API navigator.mediaDevices.getUserMedia not available');
  }

  const video = document.getElementById('video');
  const stream = await navigator.mediaDevices.getUserMedia({
    'audio': false,
    'video': {
      facingMode: 'user',
      // Only setting the video to a specified size in order to accommodate a
      // point cloud, so on mobile devices accept the default size.
      width: mobile ? undefined : VIDEO_WIDTH,
      height: mobile ? undefined : VIDEO_HEIGHT
    },
  });
  stream1 = stream.getTracks()[0];
  video.srcObject = stream;

  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
  });
}

async function loadVideo() {
  const video = await setupCamera();
  video.play();
  return video;
}

const main = async () => {
  let video;
  modelFacemesh = await facemesh.load();

  try {
    video = await loadVideo();
  } catch (e) {
    let info = document.getElementById('info');
    info.textContent = e.message;
    info.style.display = 'block';
    throw e;
  }

  landmarksRealTime(video);
}
const canvas = document.getElementById('output');
const ctx = canvas.getContext('2d');

const landmarksRealTime = async (video) => {
  videoWidth = video.videoWidth;
  videoHeight = video.videoHeight;

  canvas.width = videoWidth;
  canvas.height = videoHeight;  

  video.width = videoWidth;
  video.height = videoHeight;

  ctx.clearRect(0, 0, videoWidth, videoHeight);
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";

function deleteTransition() {
  butt_FollowButterfly.style.transition= '0s';
  butt_DesignAiYourMood.style.transition= '0s';
  butt_SmileAndLike.style.transition= '0s';
  butt_LearnYourFacePartsWithAI.style.transition= '0s';
  butt_MakeMeBig.style.transition= '0s';
  butt_FixPosture.style.transition= '0s';
  butt_PrincessParts.style.transition= '0s';
  butt_isolation.style.transition= '0s';
  butt_miroru.style.transition= '0s';
}
  
  var butt_miroru = document.getElementById('butt_miroru');
  var butt_isolation = document.getElementById('butt_isolation');
  var butt_PrincessParts = document.getElementById('butt_princessparts');
  var butt_LearnYourFacePartsWithAI = document.getElementById('butt_learnyourfacepartswithai');
  var butt_MakeMeBig = document.getElementById('butt_makemebig');
  var butt_FixPosture = document.getElementById('butt_fixposture');
  var butt_SmileAndLike = document.getElementById('butt_smileandlike');
  var butt_DesignAiYourMood = document.getElementById('butt_designaiyourmood');
  var butt_FollowButterfly = document.getElementById('butt_followbutterfly');
  var iEyebrowX, iEyebrowY, iLEyeX, iLEyeY, iREyeX, iREyeY, iNoseX, iNoseY, iLipsX, iLipsY, iLCheekX, iLCheekY, iRCheekX, iRCheekY, iChinX, iChinY;
  async function frameLandmarks() {
    document.getElementById('status').innerHTML = '';
    ctx.drawImage(video, 0, 0, videoWidth, videoHeight, 0, 0, canvas.width, canvas.height);
    deleteTransition();
    document.getElementById('specialarea').style.display = 'none';
    const predictionsFacemesh = await modelFacemesh.estimateFaces(video);
    if (predictionsFacemesh.length > 0) {
      
      var resultFacemesh = predictionsFacemesh[0].scaledMesh;
      butt_miroru.style.top = resultFacemesh[114][1] + 'px';
      butt_miroru.style.left = resultFacemesh[114][0] + 'px';
      butt_isolation.style.top = resultFacemesh[443][1] + 'px';
      butt_isolation.style.left = resultFacemesh[443][0] + 'px';
      butt_PrincessParts.style.top = resultFacemesh[167][1] + 'px';
      butt_PrincessParts.style.left = resultFacemesh[167][0] + 'px';
      butt_LearnYourFacePartsWithAI.style.top = resultFacemesh[67][1] + 'px';
      butt_LearnYourFacePartsWithAI.style.left = resultFacemesh[67][0] + 'px';
      butt_MakeMeBig.style.top = resultFacemesh[25][1] + 'px';
      butt_MakeMeBig.style.left = resultFacemesh[25][0] + 'px';
      butt_FixPosture.style.top = resultFacemesh[177][1] + 'px';
      butt_FixPosture.style.left = resultFacemesh[177][0] + 'px';
      butt_SmileAndLike.style.top = resultFacemesh[210][1] + 'px';
      butt_SmileAndLike.style.left = resultFacemesh[210][0] + 'px';
      butt_DesignAiYourMood.style.top = resultFacemesh[175][1] + 'px';
      butt_DesignAiYourMood.style.left = resultFacemesh[175][0] + 'px';
      butt_FollowButterfly.style.top = resultFacemesh[411][1] + 'px';
      butt_FollowButterfly.style.left = resultFacemesh[411][0] + 'px';
      
    }
    requestAnimationFrame(frameLandmarks);
  };
  frameLandmarks();
};

function startThis(button) {
  console.log(button);
  if (button.value === '0') {
    navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    //🔮💎💎🔮
    document.getElementById('status').innerHTML = 'wait a second please';
    main();
    button.innerHTML = 'stop playing(';
    button.value = '1';
  } else if (button.value === '1') {
    stream1.stop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    button.innerHTML = 'play with ai';
    button.value = '0';
  }
}



//
//
// ⚠️🥰Warning: section with AI is finished
// UI UI UI UI UI
//
//

// This code is for floating projects

