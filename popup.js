const toggle = document.getElementById("toggle-switch");

console.log("running?");

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
    if (data.state == false) {
      console.log("visible");
    } else {
      console.log(data.state);
      console.log("not visible");
    }
  });
}

startUp();
