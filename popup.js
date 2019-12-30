document.addEventListener(
  "DOMContentLoaded",
  function() {
    var unblurButton = document.getElementById("unblur");
    console.log("hey");
    chrome.tabs.query(
      { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
      function(tabs) {
        // alert(tabs[0].url);
        const currentURL = tabs[0].url;
        console.log("Current URL: " + currentURL);
        if (currentURL.indexOf("https://www.quora.com") > -1) {
          unblurButton.addEventListener(
            "click",
            function() {
              console.log("unblur button clicked");
              unblurButton.disabled = true;
              // console.log(currentURL);
              if (!currentURL.endsWith("?share=1"))
                chrome.tabs.update(tabs.id, { url: currentURL + "?share=1" });
            },
            false
          );
        } else unblurButton.disabled = true;
      }
    );
  },
  false
);
