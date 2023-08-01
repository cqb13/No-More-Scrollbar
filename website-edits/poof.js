var style = document.createElement("style");
var amount = 0;

chrome.storage.sync.get(["stateNMS", "firstNMS"], function (data) {
  if (!data.stateNMS && data.firstNMS == true) {
    HideScrollbar();
  } else {
    ShowScrollbar();
  }
});

function HideScrollbar() {
  style.innerHTML = `*::-webkit-scrollbar {display: none;}`;
  document.head.appendChild(style);
}

function ShowScrollbar() {
  style.innerHTML = `
    *::-webkit-scrollbar {width: 5px;}
    *::-webkit-scrollbar-track {background: #00000000;}
    *::-webkit-scrollbar-thumb {background: #496bbe4d;}
    *::-webkit-scrollbar-thumb:hover {background: #496bbeb3;}`;
  document.head.appendChild(style);
}
