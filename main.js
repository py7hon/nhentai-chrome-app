var webview = document.querySelector("webview");

webview.addEventListener('permissionrequest', function (e) {
  if (e.permission === 'download') {
    e.request.allow();
  }
  if (e.permission === 'media') {
    e.request.allow();
  }
  if (e.permission === 'fullscreen') {
    e.request.allow();
  }
});

webview.addEventListener('newwindow', function (e) {
  e.preventDefault();
  window.open(e.targetUrl, '_blank');
});

chrome.app.window.current().onBoundsChanged.addListener(function () {
  webview.style.height = chrome.app.window.current().innerBounds.height + "px";
  webview.style.width = chrome.app.window.current().innerBounds.width + "px";
});

webview.style.height = document.documentElement.clientHeight + "px";
webview.style.width  = document.documentElement.clientWidth + "px";
onload = function () {
    document.querySelector("#nav1").addEventListener("click",nHentai);
    document.querySelector("#nav2").addEventListener("click",mirror1);
    document.querySelector("#nav3").addEventListener("click",mirror2);
    document.querySelector("#nav4").addEventListener("click",donasi);
    document.querySelector("#button1").addEventListener("click",nHentai);
    document.querySelector("#button2").addEventListener("click",mirror1);
    document.querySelector("#button3").addEventListener("click",mirror2);
    document.querySelector("#homebt").addEventListener("click",homebt);
}
function nHentai() {
        document.querySelector('#webview').src ='https://nhentai.net';
        document.querySelector('#webview').style.display = 'block';
        document.querySelector('#choise').style.visibility = 'hidden';
}
function mirror1() {
        document.querySelector('#webview').src ='https://nhent.ai';
        document.querySelector('#webview').style.display = 'block';
        document.querySelector('#choise').style.visibility = 'hidden';
}
function mirror2() {
        document.querySelector('#webview').src ='https://nhentai.unblock.my.id';
        document.querySelector('#webview').style.display = 'block';
        document.querySelector('#choise').style.visibility = 'hidden';
}
function donasi() {
        document.querySelector('#webview').src ='https://paypal.me/iqbalrifai';
        document.querySelector('#webview').style.display = 'block';
        document.querySelector('#choise').style.visibility = 'hidden';
}
function homebt() {
        chrome.runtime.reload();
}
