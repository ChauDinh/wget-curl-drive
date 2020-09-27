const demoBtn = document.querySelector(".demo-btn");
const submitBtn = document.querySelector(".submit-btn");
const copyBtn = document.querySelector(".copy-btn");
const videoArea = document.querySelector(".video");
const closeVideoBtn = document.querySelector(".close-video");
const videoIframe = document.getElementById("video-iframe");

demoBtn.addEventListener("click", () => {
  videoArea.style.display = "block";
});

closeVideoBtn.addEventListener("click", () => {
  videoIframe.contentWindow.postMessage('{"event": "command", "func": "stopVideo", "args": ""}', '*');
  videoArea.style.display = "none";
});