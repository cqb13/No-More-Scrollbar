var style = document.createElement("style");
var amount = 0;

chrome.storage.sync.get(["stateNMS", "firstNMS"], function (data) {
  if (!data.stateNMS && data.firstNMS == true) {
    HideScrollbar();
  }
});

function HideScrollbar() {
  style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
  document.head.appendChild(style);
}
