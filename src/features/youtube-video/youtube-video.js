const PARAMS = {
  className: ".js-video-box",
  btnPlay: ".video-box__play"
};

const elems = document.querySelectorAll(PARAMS.className);
elems.forEach(initVideoBox);

function initVideoBox(elem) {
  const youtubeID = elem.dataset.youtubeId;
  const imgSrc = `https://i.ytimg.com/vi/${youtubeID}/maxresdefault.jpg`;
  const href = `https://youtu.be/${youtubeID}`
  const btn = elem.querySelector(PARAMS.btnPlay);

  elem.style.backgroundImage = `url(${imgSrc})`;

  btn.addEventListener("click", function(event) {
    event.preventDefault();
    insertVideo(youtubeID, elem);
  })
}

function insertVideo(id, elem) {
  const iframe = document.createElement("iframe");
  iframe.width="100%";
    iframe.height="100%";
  iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.setAttribute("allowfullscreen", true);
  iframe.src=`https://www.youtube.com/embed/${id}?autoplay=1;rel=0&amp;hd=1&amp;vq=hd720;enablejsapi=1;`;

  elem.append(iframe);
  elem.classList.add("_play");
}

export default initVideoBox;