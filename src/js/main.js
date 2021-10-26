const videoAi = document.getElementById('videoAi');
const videoAnalysis = document.getElementById('videoVideoAnalysis');
const videoRecognition = document.getElementById('videoRecognition');
const videoModeling = document.getElementById('videoModeling');
const videoPlyerAnalysis = document.getElementById('videoPlyerAnalysis');
const play1 = document.getElementById('play1');
const play2 = document.getElementById('play2');
const play3 = document.getElementById('play3');
const play4 = document.getElementById('play4');
const play5 = document.getElementById('play5');

function videoConrol(video,play) {
  video.addEventListener('pause', ()=> {
    play.classList.remove('active', 'hiden');
    play.classList.add('active');
    video.removeAttribute('controls');
  });

  video.addEventListener('play', ()=> {
    play.classList.remove('active', 'hiden');
    play.classList.add('hiden');
  });
	
  play.addEventListener('click', ()=> {
    video.play();
    play.classList.remove('active', 'hiden');
    play.classList.add('hiden');
    video.setAttribute('controls','controls');  
  });
}

videoConrol(videoAi, play1);
videoConrol(videoAnalysis, play2);
videoConrol(videoRecognition, play3);
videoConrol(videoModeling, play4);
videoConrol(videoPlyerAnalysis, play5);

// scrolls

const scrollOpt = {block: "center", behavior: "smooth"};

const headerLink1 = document.getElementById('headerLink1');
const headerLink2 = document.getElementById('headerLink2');
const headerLink3 = document.getElementById('headerLink3');
const headerLink4 = document.getElementById('headerLink4');
const headerLink5 = document.getElementById('headerLink5');

const section1 = document.getElementById('section_ai');
const section2 = document.getElementById('section_video-analysis');
const section3 = document.getElementById('section_recognition');
const section4 = document.getElementById('section_modeling');
const section5 = document.getElementById('section_player-analysis');

headerLink1.addEventListener('click',() => section1.scrollIntoView(scrollOpt));
headerLink2.addEventListener('click',() => section2.scrollIntoView(scrollOpt));
headerLink3.addEventListener('click',() => section3.scrollIntoView(scrollOpt));
headerLink4.addEventListener('click',() => section4.scrollIntoView(scrollOpt));
headerLink5.addEventListener('click',() => section5.scrollIntoView(scrollOpt));

let up = null;

function doScroll(scroll) {

  const arrow = document.getElementById('arrow');
  const arrowImg = document.getElementById('arrowImg');
  const scrollTxt = document.getElementById('scroll');
  const header = document.getElementById('header');
 
  const y1 = window.scrollY + section1.getBoundingClientRect().top;
  const y2 = window.scrollY + section2.getBoundingClientRect().top;
  const y3 = window.scrollY + section3.getBoundingClientRect().top;
  const y4 = window.scrollY + section4.getBoundingClientRect().top;
  const y5 = window.scrollY + section5.getBoundingClientRect().top;
  
  const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  const offset = Math.floor(scrollHeight * 0.12);
 
  if (scroll > y5 - offset ) {
    arrowImg.classList.add('arrow_up');
    scrollTxt.innerHTML = 'up';
    up = false;
    arrow.addEventListener('click',() => header.scrollIntoView(scrollOpt));
  } else if((scroll >= y4 - offset) && up ){
    arrow.addEventListener('click',() => section5.scrollIntoView(scrollOpt));
  } else if ((scroll >= y3 - offset) && up ){
    arrow.addEventListener('click',() => section4.scrollIntoView(scrollOpt));
  } else if ((scroll >= y2 - offset) && up ){
    arrow.addEventListener('click',() => section3.scrollIntoView(scrollOpt));
  } else if ((scroll >= y1 - offset) && up ){
    arrow.addEventListener('click',() => section2.scrollIntoView(scrollOpt));
  } else if (scroll <= y1){
    arrow.addEventListener('click',() => section1.scrollIntoView(scrollOpt));
    arrowImg.classList.remove('arrow_up');
    scrollTxt.innerHTML = 'scroll';
    up = true;
	 }
}

let lastScrollPosition = 0;
let ticking = false;

window.addEventListener('scroll', () => {
  lastScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doScroll(lastScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
