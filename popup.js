const toggle = document.getElementById("toggle-switch");

toggle.addEventListener("change", function () {
  chrome.storage.sync.get("state", function (data) {
    var state = data.state;
    if (state == false) {
      state = true;
    } else if (state == true) {
      state = false;
    }
    chrome.storage.sync.set({ state: state });
  });
});

function startUp() {
  chrome.storage.sync.get("state", function (data) {
    toggle.checked = data.state;
  });
}

startUp();
