window.onload = function() {
  if (/Android|iPhone/i.test(navigator.userAgent)) {
  document.getElementById('description').innerHTML = 'it is mobile';
  window.location.href = "mobile.html";
}

// an alternative structure to check individual matches
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
  window.location.href = "/mobile";
}
  if (location.protocol !== "https:") {
   location.protocol = "https:";
  }
}

// tf.setBackend('webgl').then(console.log('Backend set to', tf.getBackend()));
var butt_miroru = document.getElementById('butt_miroru'), 
//       butt_isolation = document.getElementById('butt_isolation'),
      butt_PrincessParts = document.getElementById('butt_princessparts'),
      // butt_LearnYourFacePartsWithAI = document.getElementById('butt_learnyourfacepartswithai'),
      butt_MakeMeBig = document.getElementById('butt_makemebig'),
      butt_FixPosture = document.getElementById('butt_fixposture'),
      butt_SmileAndLike = document.getElementById('butt_smileandlike'),
      butt_DesignAiYourMood = document.getElementById('butt_designaiyourmood'),
      butt_FollowButterfly = document.getElementById('butt_followbutterfly'),
      //🥰
      butt_Realless = document.getElementById('butt_realless'),
      butt_ThisOlesyaDoesntExist = document.getElementById('butt_thisolesyadoesntexist'),
      butt_forgottenblinks = document.getElementById('butt_forgottenblinks'),
      butt_EdgarMusicVideo = document.getElementById('butt_edgarmusicVideo'),
      // butt_GeneratedStories = document.getElementById('butt_generatedstories'),
    button_project = document.getElementsByClassName('button_project');

function isMobile() {
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  return isAndroid || isiOS;
}

const state = {
  backend: "webgl",
  maxFaces: 1,
  triangulateMesh: true,
  predictIrises: false
};

let videoWidth, videoHeight;

const VIDEO_WIDTH = 600;
const VIDEO_HEIGHT = 600;
const mobile = isMobile();
// Don't render the point cloud on mobile in order to maximize performance and
// to avoid crowding limited screen space.
const renderPointcloud = mobile === false;

let model; 

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
  // modelFacemesh = await facemesh.load();
  await tf.setBackend(state.backend);

  model = await faceLandmarksDetection.load(
    faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
    { maxFaces: state.maxFaces }
  );

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
  for (var i = 0; i < button_project.length; i ++) {
    button_project[i].style.transition= '0s'
  }
}

  var iEyebrowX, iEyebrowY, iLEyeX, iLEyeY, iREyeX, iREyeY, iNoseX, iNoseY, iLipsX, iLipsY, iLCheekX, iLCheekY, iRCheekX, iRCheekY, iChinX, iChinY;
  async function frameLandmarks() {
    document.getElementById('status').innerHTML = '';
    ctx.drawImage(video, 0, 0, videoWidth, videoHeight, 0, 0, canvas.width, canvas.height);
    deleteTransition();
    document.getElementById('specialarea').style.display = 'none';
    // const predictionsFacemesh = await modelFacemesh.estimateFaces(video);
    const predictionsFacemesh = await model.estimateFaces({
    input: video,
    returnTensors: false,
    flipHorizontal: false,
    predictIrises: state.predictIrises
  });
    if (predictionsFacemesh.length > 0) {
      
      var resultFacemesh = predictionsFacemesh[0].scaledMesh;
      butt_miroru.style.top = resultFacemesh[114][1] + 'px';
      butt_miroru.style.left = resultFacemesh[114][0] + 'px';
//       butt_isolation.style.top = resultFacemesh[443][1] + 'px';
//       butt_isolation.style.left = resultFacemesh[443][0] + 'px';
      butt_PrincessParts.style.top = resultFacemesh[167][1] + 'px';
      butt_PrincessParts.style.left = resultFacemesh[167][0] + 'px';
      
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
      
      butt_Realless.style.top = resultFacemesh[136][1] - 15 + 'px';
      butt_Realless.style.left = resultFacemesh[136][0] - 20 + 'px';
      butt_ThisOlesyaDoesntExist.style.top = resultFacemesh[67][1] - 40 + 'px';
      butt_ThisOlesyaDoesntExist.style.left = resultFacemesh[67][0] - 40 + 'px';
      butt_forgottenblinks.style.top = resultFacemesh[381][1] + 'px';
      butt_forgottenblinks.style.left = resultFacemesh[381][0] + 'px';
      butt_EdgarMusicVideo.style.top = resultFacemesh[152][1] - 20 + 'px';
      butt_EdgarMusicVideo.style.left = resultFacemesh[152][0] + 'px';
      // butt_GeneratedStories.style.top = resultFacemesh[21][1] + 'px';
      // butt_GeneratedStories.style.left = resultFacemesh[21][0] + 'px';
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
//Small details
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
var butterfly = document.getElementsByClassName('butterfly'), animateButterfly;

function butterfliesFlyToTheButton(button) {
  clearTimeout(animateButterfly)
  // let cardButterfly = document.getElementById('followbutterfly');
  var cardButterfly = offset(document.getElementById('followbutterfly'));
  console.log(cardButterfly.left, cardButterfly.top);
  let xCard = cardButterfly.left,
      yCard = cardButterfly.top,
      xEndCard = xCard + 460,
      xStartPoint = xEndCard - 100,
      yEndCard = yCard + 400,
      yEndPoint = yEndCard + 40;
      
  let xButterflyButton = parseInt(button.style.left.replace('px', '')) - 10,
      yButterflyButton = parseInt(button.style.top.replace('px', '')) - 10,
      widthButton = parseInt(button.style.width.replace('px', '')),
      heightButton = parseInt(button.style.height.replace('px', '')),
      xFollowButterflyCard = parseInt(document.getElementById('followbutterfly').style.left.replace('px', '')),
      yFollowButterflyCard = parseInt(document.getElementById('followbutterfly').style.top.replace('px', '')),
      // xStart = xFollowButterflyCard + ,
      // yStart,
      xEnd = xButterflyButton + widthButton + 30,
      yEnd = yButterflyButton + heightButton + 30;
  
  for (var i = 0; i < butterfly.length; i ++) {
    butterfly[i].style.transition= '2s'
    butterfly[i].style.top = Math.random() * (yEndPoint - yEndCard) + yEndCard + 'px';
    butterfly[i].style.left = Math.random() * (xEndCard - xStartPoint) + xStartPoint + 'px';
    butterfly[i].parentNode.href= 'https://follow-butterfly.glitch.me/';
  }
}

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}


function hideButterflies() {
  for (var i = 0; i < butterfly.length; i ++) {
    butterfly[i].style.display = 'none';
  }
}

function showButterflies() {
  //spawn in random place
  for (var i = 0; i < butterfly.length; i ++) {
    butterfly[i].style.display = 'block';
    butterfly[i].style.top = Math.random() * window.innerHeight + 'px';
    butterfly[i].style.left = Math.random() * window.innerWidth + 'px';
    butterfly[i].addEventListener("mouseover", function(){
      butterfly[i].style.top = parseInt(butterfly[i].style.left.replace('px', '')) + 10 + 'px';
    });
  }
  //change their position every 2-3 seconds
  changeButterflyPosition();
}


function changeButterflyPosition() {
  for (var i = 0; i < butterfly.length; i ++) {
    let xInitialPositionButterfly = parseInt(butterfly[i].style.left.replace('px', '')),
        yInitialPositionButterfly = parseInt(butterfly[i].style.top.replace('px', '')),
        xPositionButterfly = Math.random() * window.innerHeight,
        yPositionButterfly = Math.random() * window.innerWidth;
    
    //set new position
    butterfly[i].style.top = xPositionButterfly + 'px';
    butterfly[i].style.left = yPositionButterfly + 'px';
    butterfly[i].style.transition= '15s';
    // butterfly[i].parentNode.removeAttribute("href");
    
    //rotate toward their end goal position
    if (xInitialPositionButterfly < xPositionButterfly) {
      butterfly[i].style.transform = 'rotate(180deg)';
    } else {
      butterfly[i].style.transform = 'rotate(0deg)';
    }
  }
  animateButterfly = setTimeout(changeButterflyPosition, 4000);
}

function changeText() {
  let span = '<span>I’m so proud to show you</span> my first experiment <span>where AI recognises your emotions and changes design with content based on it!</span>';
  document.getElementById('designAImood_text').innerHTML = span;
}

function changeTextback() {
  let span = 'This is my first experiment with AI where I pondered: <span>what if design will alter based on human’s emotions?</span> Here, AI recognizes your emotions and changes design with content.';
  document.getElementById('designAImood_text').innerHTML = span;
}

function changeTextIsolation() {
  let span = 'Just close your eyes to see the **censored**';
  let description = 'hi hi hi welcome to my 2d world <br>watasi wa ***** desu 。<br>a.k.a *********<br>an internet artist living on the world wide web<br><br>my brush is <br>my canvas is your screen<br>with these tools, i create new interaction<br>between human and machine <br><br>3d irl';
  document.getElementById('isolation_text').innerHTML = span;
  document.getElementById('description').innerHTML = description;
}

function changeTextbackIsolation() {
  let span = 'Just close your eyes to see the truth.';
  let description = 'hi hi hi welcome to my 2d world <br>watasi wa Olesya desu 。<br>a.k.a monolesan<br>an internet artist living on the world wide web<br><br>my brush is Artificial Intelligence<br>my canvas is your screen<br>with these tools, i create new interaction<br>between human and machine <br><br>3d irl';
  document.getElementById('isolation_text').innerHTML = span;
  document.getElementById('description').innerHTML = description;
}


let princessparts_art = document.getElementsByClassName('princesspaerts_art');
//miroru
function showacidgreentears() {
  for (var i = 0; i < document.getElementsByClassName('acidgreentears').length; i ++) {
    document.getElementsByClassName('acidgreentears')[i].style.display = 'block';
  }
  document.getElementById('gifwithtears').style.opacity = '1';
  document.getElementById('gifwithtears_aimooddesign').style.opacity = '1';
  princessparts_art[0].src = 'assets/art1tears.png';
  princessparts_art[1].src = 'assets/art2tears.png';
  princessparts_art[2].src = 'assets/art3tears.png';
  princessparts_art[3].src = 'assets/art4tears.png';
  princessparts_art[4].src = 'assets/art5tears.png';
  kotikBlocknotik('assets/kotik_bloknotik_cries_omg_whattodo.png');
}

function hideacidgreentears() {
  for (var i = 0; i < document.getElementsByClassName('acidgreentears').length; i ++) {
    document.getElementsByClassName('acidgreentears')[i].style.display = 'none';
  }
  document.getElementById('gifwithtears').style.opacity = '0';
  document.getElementById('gifwithtears_aimooddesign').style.opacity = '0';
  princessparts_art[0].src = 'assets/art1.png';
  princessparts_art[1].src = 'assets/art2.png';
  princessparts_art[2].src = 'assets/art3.png';
  princessparts_art[3].src = 'assets/art4.png';
  princessparts_art[4].src = 'assets/art5.png';
  kotikBlocknotik('assets/kotik_bloknotik.png');
}

function kotikBlocknotik(cries_omgdontcrypleaseitmakesmecrytoo) {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = cries_omgdontcrypleaseitmakesmecrytoo;    //path to your icon
  document.getElementsByTagName('head')[0].appendChild(link);
}


var cardInitialZindex;
function showWindowGhost(card, newwindow) {
  cardInitialZindex = card.style.zIndex;
  card.style.zIndex = 300;
  newwindow.style.zIndex = 301;
  card.style.left = card.style.left;
  let cardPosition = parseInt(card.style.left.replace('px', ''));
  if (cardPosition < window.innerWidth / 4) {
    newwindow.style.display = 'block';
    newwindow.style.left = cardPosition + 360 + 'px';
  } else {
    newwindow.style.display = 'block';
    newwindow.style.left = '40px';
  }
  
}

function hideWindowGhost(card, newwindow) {
  card.style.zIndex = cardInitialZindex;
  newwindow.style.display = 'none';
}

//ARTICLEs
function showArticle(card, article) {
  cardInitialZindex = card.style.zIndex;
  card.style.zIndex = 300;
  article.style.display = 'block';
}

function hideArticle(card, article) {
  card.style.zIndex = cardInitialZindex;
  article.style.display = 'none';
}

//MAKE ME BIIIIIIIIIGGGGGGGGGGGGGKKKKKKKKKKKKkkkKK
var makemebig_LEFT_EYE = document.getElementById('makemebig_left_eye');
var makemebig_RIGHT_EYE = document.getElementById('makemebig_right_eye');

function resizeText(button) {
  makemebig_LEFT_EYE.style.transform = 'rotate(-45deg)';
  makemebig_LEFT_EYE.style.top = Math.random() * 450 + 'px';
  makemebig_LEFT_EYE.style.left = Math.random() * 400 + 'px';
  makemebig_LEFT_EYE.style.transition= '10s';
  
  makemebig_RIGHT_EYE.style.transform = 'rotate(90deg)';
  makemebig_RIGHT_EYE.style.top = Math.random() * 450 + 'px';
  makemebig_RIGHT_EYE.style.left = Math.random() * 400 + 'px';
  makemebig_RIGHT_EYE.style.transition= '10s';
}

function stopResizeText(button) {
  makemebig_LEFT_EYE.style.transform = 'rotate(0deg)';
  makemebig_LEFT_EYE.style.top = '30px';
  makemebig_LEFT_EYE.style.left = '10px';
  makemebig_LEFT_EYE.style.transition= '5s';
  
  makemebig_RIGHT_EYE.style.transform = 'rotate(-40.4deg)';
  makemebig_RIGHT_EYE.style.top = '360px';
  makemebig_RIGHT_EYE.style.left = '160px';
  makemebig_RIGHT_EYE.style.transition= '4s';
}

//c: & <3
function showPixelHeart(button) {
  for (var i = 0; i < document.getElementsByClassName('pixelheart').length; i ++) {
    document.getElementsByClassName('pixelheart')[i].style.display = 'block';
  }
  setTimeout(hidePixelHeart, 1900);
}

function hidePixelHeart() {
  for (var i = 0; i < document.getElementsByClassName('pixelheart').length; i ++) {
    document.getElementsByClassName('pixelheart')[i].style.display = 'none';
  }
}

// FIX POSTURE
function blurScreenPleassse(button) {
  document.body.style.filter = 'blur(4px)';
  document.body.style.transition= '0.9s';
}

function stopBluringScreenSir(button) {
  document.body.style.filter = 'blur(0px)';
  document.body.style.transition= '0s';
}

//THISOLESYADOESNTEXIST
//🎭 Press anywhere on page to see a new photo


var thisOlesyaDoesntExistCard = document.getElementById('thisolesyadoesntexist'),
    thisOlesyaDoesntExistPhoto = document.getElementById('thisolesyadoesntexistphoto'), 
    photoNumber = 1, 
    myPhotos = ['assets/photo1.jpeg','assets/photo3.jpeg','assets/photo2.jpeg','assets/photo4.jpeg','assets/photo5.jpeg'],
    loadingBarColours = ['#52FF00', '#52FF00', '#52FF00', '#52FF00', '#FF00E5', '#FF0000', '#000000', '#000000', '#000000'],
    loadingBar = document.getElementById('loadingbar_thisolesyadoesntexist');

function deleteLoadingBar() {
  loadingBar.style.display = 'none';
}

function generateMyPhoto() {
   thisOlesyaDoesntExistPhoto.src = myPhotos[photoNumber];
    
    loadingBar.style.background = loadingBarColours[Math.floor(Math.random() * loadingBarColours.length)];
    loadingBar.style.display = 'block';
  
  photoNumber++;
    
  setTimeout(deleteLoadingBar, 650);
  if (photoNumber === myPhotos.length) {
    photoNumber = 0;
  }
}
thisOlesyaDoesntExistCard.addEventListener("click", generateMyPhoto, true);

function turnOffVideo() {
  document.getElementById('edgarvideo').pause();
}


// DRAG CARDS
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
//Make the DIV element draggagle:
let projects = document.getElementsByClassName('projects');
for (var i = 0; i < projects.length; i ++) {
  dragElement(projects[i]);
}


// dragElement(document.getElementById("omgwhatareyoudoing"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywher
    e inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Position of buttons
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
function flyletters() {
  document.getElementById("specialarea").style.display = "none";
  butt_miroru.style.top = "335px";
  butt_miroru.style.left = "400px";

//   butt_isolation.style.top = "264px";
//   butt_isolation.style.left = "540px";

  butt_PrincessParts.style.top = "380px";
  butt_PrincessParts.style.left = "416px";

  butt_ThisOlesyaDoesntExist.style.top = "160px";
  butt_ThisOlesyaDoesntExist.style.left = "280px";
  
  butt_forgottenblinks.style.top = "560px";
  butt_forgottenblinks.style.left = "360px";
  
  butt_EdgarMusicVideo.style.top = "220px";
  butt_EdgarMusicVideo.style.left = "440px";
  
  // butt_GeneratedStories.style.top = "190px";
  // butt_GeneratedStories.style.left = "380px";
  
  butt_Realless.style.top = "280px";
  butt_Realless.style.left = "260px";

  butt_MakeMeBig.style.top = "286px";
  butt_MakeMeBig.style.left = "370px";

  butt_FixPosture.style.top = "400px";
  butt_FixPosture.style.left = "300px";

  butt_SmileAndLike.style.top = "390px";
  butt_SmileAndLike.style.left = "540px";

  butt_DesignAiYourMood.style.top = "480px";
  butt_DesignAiYourMood.style.left = "320px";

  butt_FollowButterfly.style.top = "500px";
  butt_FollowButterfly.style.left = "400px";
  // let button_project = document.getElementsByClassName('button_project');
  for (var i = 0; i < button_project.length; i ++) {
    button_project[i].style.transition= '1s';
  }
}


// Position of buttons
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
// 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰
var startIndexZ = 0;
var indexZ;

// for (var i = 0; i < button_project.length; i ++) {
//   button_project.addEventListener("click", function() {
//     button_project[i].id =
//   });
// }

function showCard(project) {
  project.style.display = 'block';
  startIndexZ++;
  indexZ = startIndexZ;
  project.style.zIndex = indexZ;
  // document.getElementById(button).textDecoration = 'underline';
}

function closeCard(project) {
  project.style.display = 'none';
  // button.style.textDecoration = 'none';
}

function touchCard(project) {
  startIndexZ++;
  indexZ = startIndexZ;
  project.style.zIndex = indexZ;
}

