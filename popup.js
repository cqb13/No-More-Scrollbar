const toggle = document.getElementById("toggle-switch");

const info = {
  type: "basic",
  iconUrl: "/images/icon128.png",
  title: "Info",
  message: "You must reload the current page for changes to apply!",
  buttons: [{ title: "Dont Show Again" }],
};

toggle.addEventListener("change", function () {
  chrome.storage.sync.get(["state", "show"], function (data) {
    var state = data.state;
    var show = data.show;
    if (state == false) {
      state = true;
    } else if (state == true) {
      state = false;
    }
    chrome.storage.sync.set({ state: state });
    chrome.storage.sync.set({ show: show });
    if (show != false) {
      chrome.notifications.create(info);
      chrome.notifications.onButtonClicked.addListener(notAgain(show));
    }
  });
});

function notAgain(show) {
  show = false;
  chrome.storage.sync.set({ show: show });
}

function startUp() {
  chrome.storage.sync.get("state", function (data) {
    toggle.checked = data.state;
  });
}

startUp();
