const toggle = document.getElementById("toggle-switch");

toggle.addEventListener("change", function () {
  chrome.storage.sync.get("state", function (data) {
    var state = data.state;
    if (toggle.checked) {
      state = true;
    } else if (!toggle.checked) {
      state = false;
    }
    console.log(data.state + "why")
    chrome.stroage.sync.set({ state: state });
  });
});

function startUp() {
  chrome.storage.sync.get("state", function (data) {
    console.log(data.state);
  });
}

startUp();
