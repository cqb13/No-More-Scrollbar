var style = document.createElement("style");
var amount = 0;

chrome.storage.sync.get("state", function (data) {
  var visible = !data.state;

  if (visible == false) {
    HideScrollbar();
  }
});

function HideScrollbar() {
  style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
  document.head.appendChild(style);
}
