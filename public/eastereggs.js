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


//miroru
function showacidgreentears() {
  for (var i = 0; i < document.getElementsByClassName('acidgreentears').length; i ++) {
    document.getElementsByClassName('acidgreentears')[i].style.display = 'block';
  }
  document.getElementById('gifwithtears').style.opacity = '1';
  document.getElementById('gifwithtears_aimooddesign').style.opacity = '1';
  document.getElementsByClassName('princesspaerts_art')[0].src = 'https://cdn.glitch.com/0337a9ff-22b3-4786-927c-60d314c827be%2Fart1tears.png?v=1589073870806';
  document.getElementsByClassName('princesspaerts_art')[1].src = 'https://cdn.glitch.com/0337a9ff-22b3-4786-927c-60d314c827be%2Fart2tears.png?v=1589074459889';
  document.getElementsByClassName('princesspaerts_art')[2].src = 'https://cdn.glitch.com/0337a9ff-22b3-4786-927c-60d314c827be%2Fart3tears.png?v=1589074466513';
  document.getElementsByClassName('princesspaerts_art')[3].src = 'https://cdn.glitch.com/0337a9ff-22b3-4786-927c-60d314c827be%2Fart4tears.png?v=1589074460790';
  document.getElementsByClassName('princesspaerts_art')[4].src = 'https://cdn.glitch.com/0337a9ff-22b3-4786-927c-60d314c827be%2Fart5tears.png?v=1589074460756';
  kotikBlocknotik('https://cdn.glitch.com/0337a9ff-22b3-4786-927c-60d314c827be%2F%D0%BA%D0%BE%D1%82%D0%B8%D0%BA-%D0%B1%D0%BB%D0%BE%D0%BA%D0%BD%D0%BE%D1%82%D0%B8%D0%BA%20%D0%BF%D0%BB%D0%B0%D1%87%D0%B5%D1%82%20%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B5%20%D1%80%D0%B0%D0%B7%D1%80%D1%8B%D0%B2%D0%B0%D0%B5%D1%82%D1%81%D1%8F(((.png?v=1589070181618');
}

function hideacidgreentears() {
  for (var i = 0; i < document.getElementsByClassName('acidgreentears').length; i ++) {
    document.getElementsByClassName('acidgreentears')[i].style.display = 'none';
  }
  document.getElementById('gifwithtears').style.opacity = '0';
  document.getElementById('gifwithtears_aimooddesign').style.opacity = '0';
  document.getElementsByClassName('princesspaerts_art')[0].src = 'https://cdn.glitch.com/0337a9ff-22b3-4786-927c-60d314c827be%2Fart1.png?v=1588657812567';
  document.getElementsByClassName('princesspaerts_art')[1].src = 'https://cdn.glitch.com/0337a9ff-22b3-4786-927c-60d314c827be%2FMy%20lovely%20art%20on%20Princess%20Parts%20(8).png?v=1588660094971';
  document.getElementsByClassName('princesspaerts_art')[2].src = 'https://cdn.glitch.com/0337a9ff-22b3-4786-927c-60d314c827be%2FMy%20lovely%20art%20on%20Princess%20Parts.png?v=1588660109564';
  document.getElementsByClassName('princesspaerts_art')[3].src = 'https://cdn.glitch.com/0337a9ff-22b3-4786-927c-60d314c827be%2FMy%20lovely%20art%20(5).png?v=1588660112235';
  document.getElementsByClassName('princesspaerts_art')[4].src = 'https://cdn.glitch.com/0337a9ff-22b3-4786-927c-60d314c827be%2FMy%20lovely%20art%20(1).png?v=1588660131609';
  kotikBlocknotik('https://cdn.glitch.com/0337a9ff-22b3-4786-927c-60d314c827be%2F%D0%BA%D0%BE%D1%82%D0%B8%D0%BA-%D0%B1%D0%BB%D0%BE%D0%BA%D0%BD%D0%BE%D1%82%D0%B8%D0%BA.png?v=1588757110122');
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
