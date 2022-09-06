var style = document.createElement("style");
var amount = 0;

chrome.storage.sync.get(["stateNMS", "firstNMS"], function (data) {
  // result of bad code
  var visible = data.stateNMS;

  if (visible == false) {
    HideScrollbar();
  }
});

function HideScrollbar() {
  style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
  document.head.appendChild(style);
}
