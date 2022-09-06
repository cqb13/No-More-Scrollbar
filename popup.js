const toggle = document.getElementById("toggle-switch");

const info = {
  type: "basic",
  iconUrl: "/images/icon128.png",
  title: "Info",
  message: "You must reload the current page for changes to apply!",
  buttons: [{ title: "Dont Show Again" }],
};

toggle.addEventListener("change", function () {
  chrome.storage.sync.get(["stateNMS"], function (data) {
    var state = data.stateNMS;

    if (state == false || state == null) {
      state = true;
    } else if (state == true) {
      state = false;
    }
    chrome.storage.sync.set({ stateNMS: state });

    chrome.storage.sync.get("showNotificationNMS", function (data) {
      if (data.showNotificationNMS != false) {
        chrome.notifications.create(info);
        chrome.notifications.onButtonClicked.addListener(notAgain);
      }
    });
  });
});

function notAgain() {
  var show = false;
  chrome.storage.sync.set({ showNotificationNMS: show });
}

function startUp() {
  chrome.storage.sync.get("stateNMS", function (data) {
    toggle.checked = data.stateNMS;
  });
}

startUp();
