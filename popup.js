document.addEventListener(
  "DOMContentLoaded",
  function() {
    var unblurButton = document.getElementById("unblur");

    chrome.tabs.query(
      { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
      function(tabs) {
        let currentURL = tabs[0].url;
        console.log("Current URL: " + currentURL);
        if (currentURL.indexOf("https://www.quora.com") > -1) {
          unblurButton.addEventListener(
            "click",
            function() {
              console.log("unblur button clicked");
              unblurButton.disabled = true;
              if (!currentURL.endsWith("?share=1")) {
                // Removing last # if present:
                if (currentURL.endsWith("#"))
                  currentURL = currentURL.slice(0, -1);
                chrome.tabs.update(tabs.id, { url: currentURL + "?share=1" });
              } else unblurButton.innerHTML = "Unblurred";
            },
            false
          );
        } else unblurButton.disabled = true;
      }
    );
  },
  false
);

// TODO:
// - Modularize code
